import { HeroSection } from "@/components/ui/hero-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { ComparisonTable } from "@/components/ui/comparison-table";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { PriceRevealSection } from "@/components/ui/price-reveal-section";
import { CTASection } from "@/components/ui/cta-section";
import { Footer } from "@/components/ui/footer";
import { ChatAssistant } from "@/components/ui/chat-assistant";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <ComparisonTable />
      <TestimonialsSection />
      <PriceRevealSection />
      <CTASection />
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Index;
