import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyHouston from "@/components/WhyHouston";
import Services from "@/components/Services";

const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const CTABanner = dynamic(() => import("@/components/CTABanner"), { ssr: false });
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
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
