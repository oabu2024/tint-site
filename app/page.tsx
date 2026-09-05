import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyHouston from "@/components/WhyHouston";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import QuoteCalculator from "@/components/QuoteCalculator";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyHouston />
        <Gallery />
        <Testimonials />
        <QuoteCalculator />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
