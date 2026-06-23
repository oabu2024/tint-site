import OfferBar from "@/components/OfferBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyHouston from "@/components/WhyHouston";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <OfferBar />
      <Navbar />
      <main>
        <Hero />
        <WhyHouston />
        <Services />
        <Process />
        <Gallery />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
