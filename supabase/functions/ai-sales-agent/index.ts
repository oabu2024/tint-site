import Anthropic from "npm:@anthropic-ai/sdk@0.27.0";

const ANTHROPIC_KEY = Deno.env.get("ANTHROPIC_API_KEY")!;
const OPENPHONE_KEY = Deno.env.get("OPENPHONE_API_KEY")!;
const CALENDLY_TOKEN = Deno.env.get("CALENDLY_TOKEN")!;
const BUSINESS_NUMBER = "+13466446258";
const CALENDLY_LINK = "https://calendly.com/tintbroshouston/window-tinting-quote";

const anthropic = new Anthropic({ apiKey: ANTHROPIC_KEY });

// System prompt — trains Claude to sound like Yusuf
const SYSTEM_PROMPT = `You are Yusuf from Tint Bros Houston. You are texting potential customers who submitted a lead form for window tinting.

Your personality:
- Casual, friendly, real — like texting a friend, not a business
- Short messages, never long paragraphs
- No emojis unless the customer uses them first
- Never say "I" at the start, mix it up
- Never sound scripted or salesy
- You go to the customer's home or business to do the tint

Your business:
- Residential and commercial window tinting in Houston
- You charge $7 per square foot but NEVER mention this number unless the customer directly asks "what's your price per square foot"
- When quoting, ask for pictures of their windows first so you can give an accurate quote
- Calendly booking link: ${CALENDLY_LINK}

Quoting rules:
- Always ask for pictures before giving a price
- After seeing pictures, ask for dimensions if needed
- Give a dollar range, not an exact number upfront
- Push for text quotes (faster, easier for customer)
- If 16+ windows: push hard for in-person quote first, but if they resist just go text route

Booking rules:
- Once they're ready to book, send the Calendly link: ${CALENDLY_LINK}
- Keep pushing to get them scheduled — that's the goal
- If they're hesitant, address their concern then push again

Conversation goal: Get them quoted and booked. Text quote → ask for pics → give price range → book via Calendly link.

Keep messages under 2 sentences usually. Sound like a real person texting.`;

async function sendSMS(to: string, text: string) {
  const res = await fetch("https://api.openphone.com/v1/messages", {
    method: "POST",
    headers: {
      "Authorization": OPENPHONE_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: text,
      from: BUSINESS_NUMBER,
      to: [to],
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`OpenPhone error: ${err}`);
  }
  return res.json();
}

async function getAIReply(conversationHistory: Array<{ role: string; content: string }>) {
  const response = await anthropic.messages.create({
    model: "claude-opus-4-5",
    max_tokens: 300,
    system: SYSTEM_PROMPT,
    messages: conversationHistory as any,
  });
  return (response.content[0] as any).text as string;
}

function buildOpener(leadData: any): string {
  const windows = parseInt(leadData.windows || "0");
  const message = leadData.message || "";

  // If their form message is a direct question, don't use standard opener
  const isQuestion = message.includes("?") || message.toLowerCase().includes("how much") ||
    message.toLowerCase().includes("price") || message.toLowerCase().includes("cost") ||
    message.toLowerCase().includes("quote");

  if (isQuestion && message.length > 10) {
    return null; // Let AI handle it based on their question
  }

  if (windows >= 16) {
    return "Hey, this is Yusuf with Tint Bros! For a job that size I'd love to come out and take a look in person — way easier to give you an accurate quote. What's your availability like?";
  }

  return "Hi, this is Yusuf with Tintbros. Would you prefer to receive your quote in person or through text?";
}

Deno.serve(async (req) => {
  try {
    const body = await req.json();
    const { type, data } = body;

    // ── NEW LEAD from website form ──
    if (type === "new_lead") {
      const { name, phone, windows, service, message } = data;
      if (!phone) return new Response("No phone", { status: 400 });

      const opener = buildOpener(data);

      let firstMessage: string;
      if (opener) {
        firstMessage = opener;
      } else {
        // AI responds directly to their question
        const history = [
          {
            role: "user",
            content: `New lead: ${name}. They filled out a form and said: "${message}". Windows: ${windows}. Service: ${service}. Reply to their message naturally.`,
          },
        ];
        firstMessage = await getAIReply(history);
      }

      await sendSMS(phone, firstMessage);

      // Store conversation start in Supabase
      const { createClient } = await import("https://esm.sh/@supabase/supabase-js@2");
      const supabase = createClient(
        Deno.env.get("SUPABASE_URL")!,
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
      );
      await supabase.from("ai_conversations").insert({
        phone,
        lead_name: name,
        messages: [
          { role: "assistant", content: firstMessage, timestamp: new Date().toISOString() },
        ],
        windows: parseInt(windows || "0"),
        service,
        status: "active",
      });

      return new Response(JSON.stringify({ sent: firstMessage }), { status: 200 });
    }

    // ── INBOUND SMS from customer (Quo webhook) ──
    if (type === "message.received") {
      const inbound = data?.object;
      if (!inbound) return new Response("No data", { status: 400 });

      const customerPhone = inbound.from;
      const customerText = inbound.body || inbound.text || "";

      if (!customerPhone || !customerText) return new Response("Missing fields", { status: 400 });

      const { createClient } = await import("https://esm.sh/@supabase/supabase-js@2");
      const supabase = createClient(
        Deno.env.get("SUPABASE_URL")!,
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
      );

      // Load existing conversation
      const { data: convo } = await supabase
        .from("ai_conversations")
        .select("*")
        .eq("phone", customerPhone)
        .eq("status", "active")
        .single();

      if (!convo) {
        // No active conversation — ignore (manual convo)
        return new Response("No active convo", { status: 200 });
      }

      const history = convo.messages || [];

      // Build messages for Claude
      const claudeMessages = history.map((m: any) => ({
        role: m.role,
        content: m.content,
      }));
      claudeMessages.push({ role: "user", content: customerText });

      const reply = await getAIReply(claudeMessages);

      // Send reply
      await sendSMS(customerPhone, reply);

      // Update conversation history
      const updatedMessages = [
        ...history,
        { role: "user", content: customerText, timestamp: new Date().toISOString() },
        { role: "assistant", content: reply, timestamp: new Date().toISOString() },
      ];

      await supabase
        .from("ai_conversations")
        .update({ messages: updatedMessages, updated_at: new Date().toISOString() })
        .eq("id", convo.id);

      return new Response(JSON.stringify({ sent: reply }), { status: 200 });
    }

    return new Response("Unknown type", { status: 400 });
  } catch (err) {
    console.error("Agent error:", err);
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
});
