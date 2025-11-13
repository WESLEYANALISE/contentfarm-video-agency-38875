import { useState, useEffect } from "react";
import { InteractiveQuiz } from "@/components/ui/interactive-quiz";
import { HeroSection } from "@/components/ui/hero-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { ComparisonTable } from "@/components/ui/comparison-table";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { PriceRevealSection } from "@/components/ui/price-reveal-section";
import { CTASection } from "@/components/ui/cta-section";
import { Footer } from "@/components/ui/footer";


const Index = () => {
  const [showQuiz, setShowQuiz] = useState(true);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    // Check if user already completed quiz (using sessionStorage for this session)
    const hasCompletedQuiz = sessionStorage.getItem("quizCompleted");
    if (hasCompletedQuiz) {
      setShowQuiz(false);
      setQuizCompleted(true);
    }
  }, []);

  const handleQuizComplete = () => {
    sessionStorage.setItem("quizCompleted", "true");
    setQuizCompleted(true);
    setTimeout(() => {
      setShowQuiz(false);
    }, 500);
  };

  if (showQuiz) {
    return <InteractiveQuiz onComplete={handleQuizComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <ComparisonTable />
      <TestimonialsSection />
      <PriceRevealSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
