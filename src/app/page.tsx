import LandingNavigation from "@/components/LandingNavigation/LandingNavigation";
import Hero from "@/modules/Hero/Hero";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import DemoSection from "@/components/DemoSection/DemoSection";
import FAQSection from "@/components/FAQSection/FAQSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import CTASection from "@/components/CTASection/CTASection";

export default function Home() {
  return (
    <>
      <LandingNavigation />
      <Hero />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <DemoSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
    </>
  );
}
