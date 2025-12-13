import { CustomCursor } from "@/components/CustomCursor";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { GallerySection } from "@/components/GallerySection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <GallerySection />
        <WhyChooseSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
