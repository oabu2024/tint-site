import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyHouston from "@/components/WhyHouston";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
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
        <Services />
        <Gallery />
        <QuoteCalculator />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
