import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — Tint Bros Houston",
  description: "Privacy policy for Tint Bros Houston window tinting services.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-24 text-gray-300">
        <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: November 2026</p>

        <section className="space-y-8 text-sm leading-relaxed">
          <div>
            <h2 className="text-white font-semibold text-base mb-2">1. Information We Collect</h2>
            <p>When you request a quote or contact us, we collect your name, phone number, email address, and home or business address. We may also collect photos of your windows if you choose to upload them.</p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-base mb-2">2. How We Use Your Information</h2>
            <p>We use your information solely to provide quotes, schedule appointments, and communicate with you about our services. We do not sell or share your personal information with third parties for marketing purposes.</p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-base mb-2">3. SMS Communications</h2>
            <p>By submitting your phone number, you consent to receive SMS messages from Tint Bros Houston regarding your quote or appointment. Message and data rates may apply. You can opt out at any time by replying STOP.</p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-base mb-2">4. Data Storage</h2>
            <p>Your information is stored securely and retained only as long as necessary to provide our services. We use industry-standard security measures to protect your data.</p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-base mb-2">5. Cookies</h2>
            <p>Our website may use cookies to improve your browsing experience. These cookies do not collect personally identifiable information and can be disabled in your browser settings.</p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-base mb-2">6. Your Rights</h2>
            <p>You may request that we delete your personal information at any time by contacting us. We will fulfill such requests within a reasonable timeframe.</p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-base mb-2">7. Contact</h2>
            <p>For privacy-related questions, contact us at <a href="mailto:tintbroshouston@gmail.com" className="text-blue-400 underline">tintbroshouston@gmail.com</a>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
