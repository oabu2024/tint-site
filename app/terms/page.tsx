import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service — Tint Bros Houston",
  description: "Terms of service for Tint Bros Houston window tinting services.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-24 text-gray-300">
        <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: November 2026</p>

        <section className="space-y-8 text-sm leading-relaxed">
          <div>
            <h2 className="text-white font-semibold text-base mb-2">1. Services</h2>
            <p>Tint Bros Houston provides residential and commercial window tinting services in the Houston, TX area. By requesting a quote or booking a service, you agree to these terms.</p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-base mb-2">2. Quotes & Pricing</h2>
            <p>Quotes are estimates based on information provided. Final pricing may vary after an in-person assessment. We will notify you of any changes before work begins. We charge $7 per square foot for most residential installations.</p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-base mb-2">3. Scheduling & Cancellations</h2>
            <p>Appointments may be rescheduled with at least 24 hours notice. No-shows or same-day cancellations may result in a rescheduling fee. We reserve the right to reschedule due to weather or other conditions that affect installation quality.</p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-base mb-2">4. Warranty</h2>
            <p>All installations come with a 6-year warranty covering film defects, peeling, and bubbling under normal use. The warranty does not cover damage caused by improper cleaning, physical damage, or window seal failures unrelated to the film.</p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-base mb-2">5. Customer Responsibilities</h2>
            <p>Customers are responsible for ensuring windows are accessible on the day of installation. Windows should be reasonably clean. Furniture or items blocking window access should be moved prior to our arrival.</p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-base mb-2">6. Limitation of Liability</h2>
            <p>Tint Bros Houston is not liable for pre-existing window damage, seal failures, or issues unrelated to the film installation. Our liability is limited to the cost of the service provided.</p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-base mb-2">7. Contact</h2>
            <p>Questions about these terms can be sent to <a href="mailto:tintbroshouston@gmail.com" className="text-blue-400 underline">tintbroshouston@gmail.com</a>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
