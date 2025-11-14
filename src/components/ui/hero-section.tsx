import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Scale, Crown, Star } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { ImageCarousel } from "@/components/ui/image-carousel";

import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  const [logoRef, logoInView] = useInView({ threshold: 0.2 });
  const [titleRef, titleInView] = useInView({ threshold: 0.2 });
  const [priceRef, priceInView] = useInView({ threshold: 0.2 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2 });

  return (
    <section className="relative py-20 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
      
      {/* Desktop background */}
      <div 
        className="absolute top-0 left-0 right-0 bg-cover bg-center bg-no-repeat opacity-10 hidden sm:block"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          height: '50%'
        }}
      />
      
      {/* Mobile background - Justice statue */}
      <div 
        className="absolute top-0 left-0 right-0 bg-cover bg-center bg-no-repeat opacity-15 sm:hidden"
        style={{ 
          backgroundImage: `url('/lovable-uploads/319c8e83-3d9c-4ad2-882e-a95a63e15498.png')`,
          height: '50%'
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Logo and Badge */}
        <div 
          ref={logoRef}
          className={`flex items-center justify-center gap-3 mb-8 transition-all duration-700 ${
            logoInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="p-3 bg-card/40 backdrop-blur-sm rounded-xl border border-gold/20 hover-scale transition-all duration-300">
            <Scale className="h-7 w-7 text-gold" />
          </div>
        </div>

        {/* Rhetorical Question - Pain Point */}
        <div
          ref={titleRef}
          className={`transition-all duration-700 delay-200 ${
            titleInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
          }`}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight max-w-3xl mx-auto">
            Cansado de procurar material de estudo espalhado por aí?
          </h1>
          
          <p className="text-lg md:text-2xl text-foreground/70 mb-4 leading-relaxed max-w-2xl mx-auto">
            Você está perdendo tempo precioso com conteúdos desorganizados e desatualizados...
          </p>

          <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Enquanto isso, outros estão usando um único lugar que reúne <span className="text-gold font-semibold">tudo</span> o que você precisa para ser aprovado.
          </p>
        </div>

        {/* Image Carousel */}
        <div
          ref={priceRef}
          className={`mt-16 mb-12 transition-all duration-700 delay-400 ${
            priceInView ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`}
        >
          <ImageCarousel />
        </div>

        {/* CTA Button - Ver Vantagens */}
        <div
          ref={ctaRef}
          className={`transition-all duration-700 delay-600 ${
            ctaInView ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button 
            variant="outline"
            size="lg" 
            className="group relative border-2 border-gold/50 bg-card/30 backdrop-blur-sm hover:bg-gold/10 text-gold font-semibold px-8 py-6 text-base md:text-lg shadow-card transition-all duration-300 hover:shadow-glow hover:scale-105 w-full max-w-md"
            onClick={() => {
              const featuresSection = document.getElementById('features-section');
              featuresSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            <span className="relative z-10 flex items-center justify-center">
              <Star className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:rotate-12" />
              Ver todas as vantagens
            </span>
          </Button>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-1 transition-transform duration-300 hover:scale-110">
              <Star className="h-4 w-4 fill-gold text-gold" />
              <span className="font-semibold">4.8/5</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="transition-colors duration-300 hover:text-foreground">50k+ usuários</div>
            <div className="w-px h-4 bg-border" />
            <div className="transition-colors duration-300 hover:text-foreground">98% aprovação</div>
          </div>
        </div>
      </div>
    </section>
  );
};