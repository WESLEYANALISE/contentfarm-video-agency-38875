import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";

export const StickyCtaButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 500px
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-gradient-to-t from-background via-background/95 to-transparent backdrop-blur-sm border-t border-gold/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Price Info */}
            <div className="flex items-center gap-3">
              <div className="text-center sm:text-left">
                <p className="text-xs text-muted-foreground mb-0.5">Oferta Limitada</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-muted-foreground line-through">R$ 99,99</span>
                  <span className="text-2xl md:text-3xl font-bold text-gold">R$ 39,99</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-light text-background font-bold shadow-gold hover:shadow-glow transition-all duration-300 hover:scale-105 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg w-full sm:w-auto"
              onClick={() => {
                console.log('Sticky CTA clicado - redirecionando para:', 'https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0');
                window.open('https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0', '_blank');
              }}
            >
              <Crown className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Garantir Versão Premium Vitalícia
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
