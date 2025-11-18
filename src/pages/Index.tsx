import { lazy, Suspense } from "react";
import { HeroSection } from "@/components/ui/hero-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { StickyCtaButton } from "@/components/ui/sticky-cta-button";

// Lazy load components que não aparecem no viewport inicial
const ComparisonTable = lazy(() => import("@/components/ui/comparison-table").then(m => ({ default: m.ComparisonTable })));
const TestimonialsSection = lazy(() => import("@/components/ui/testimonials-section").then(m => ({ default: m.TestimonialsSection })));
const PriceRevealSection = lazy(() => import("@/components/ui/price-reveal-section").then(m => ({ default: m.PriceRevealSection })));
const CTASection = lazy(() => import("@/components/ui/cta-section").then(m => ({ default: m.CTASection })));
const Footer = lazy(() => import("@/components/ui/footer").then(m => ({ default: m.Footer })));

const LoadingSection = () => (
  <div className="py-16 px-4 animate-pulse">
    <div className="max-w-4xl mx-auto space-y-4">
      <div className="h-8 bg-muted/20 rounded w-3/4 mx-auto"></div>
      <div className="h-4 bg-muted/20 rounded w-1/2 mx-auto"></div>
    </div>
  </div>
);


const Index = () => {

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <Suspense fallback={<LoadingSection />}>
        <ComparisonTable />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <PriceRevealSection />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <CTASection />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Footer />
      </Suspense>
      <StickyCtaButton />
    </div>
  );
};

export default Index;
