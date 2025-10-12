import { HeroSection } from "@/components/ui/hero-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { ComparisonTable } from "@/components/ui/comparison-table";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { CTASection } from "@/components/ui/cta-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <ComparisonTable />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
