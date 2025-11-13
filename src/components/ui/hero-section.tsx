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
    <section className="relative py-16 px-4 text-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background" />
      
      {/* Desktop background */}
      <div 
        className="absolute top-0 left-0 right-0 bg-cover bg-center bg-no-repeat opacity-20 hidden sm:block"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          height: '60%'
        }}
      />
      
      {/* Mobile background - Justice statue */}
      <div 
        className="absolute top-0 left-0 right-0 bg-cover bg-center bg-no-repeat opacity-25 sm:hidden"
        style={{ 
          backgroundImage: `url('/lovable-uploads/319c8e83-3d9c-4ad2-882e-a95a63e15498.png')`,
          height: '60%'
        }}
      />
      
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Logo and Badge */}
        <div 
          ref={logoRef}
          className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 ${
            logoInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="p-2 bg-gradient-premium rounded-lg shadow-gold hover-scale transition-all duration-300 hover:shadow-glow">
            <Scale className="h-6 w-6 text-background" />
          </div>
          <Badge variant="outline" className="px-3 py-1.5 text-gold border-gold/30 bg-background/20 text-sm hover-scale transition-all duration-300">
            <Crown className="h-3 w-3 mr-1" />
            PREMIUM
          </Badge>
        </div>

        {/* Main Title */}
        <div
          ref={titleRef}
          className={`transition-all duration-700 delay-300 ${
            titleInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-premium bg-clip-text text-transparent leading-tight hover:scale-105 transition-transform duration-500">
            Direito Premium
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-6 leading-relaxed">
            Tudo que você precisa para ser aprovado em um só lugar
          </p>
        </div>

        {/* Price Highlight */}
        <div
          ref={priceRef}
          className={`mb-8 transition-all duration-700 delay-500 ${
            priceInView ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`}
        >
          <div className="inline-block bg-gradient-card border-2 border-gold/30 rounded-2xl p-6 shadow-gold hover:shadow-glow transition-all duration-300 hover:scale-105">
            <Badge className="mb-3 bg-destructive text-destructive-foreground font-bold text-sm px-3 py-1 animate-pulse">
              60% OFF - OFERTA LIMITADA
            </Badge>
            
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-xl text-muted-foreground line-through">
                R$ 99,99
              </span>
              <div className="text-5xl md:text-6xl font-bold bg-gradient-premium bg-clip-text text-transparent">
                R$ 39,99
              </div>
            </div>
            
            <p className="text-sm text-foreground/70 mb-4">
              Pagamento único • Acesso vitalício
            </p>
            
            <Button 
              size="lg" 
              className="w-full bg-gold hover:bg-gold-light text-background font-bold shadow-gold hover:shadow-glow transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.direitopremium.app', '_blank')}
            >
              Garantir acesso agora
            </Button>
          </div>
        </div>

        {/* Image Carousel */}
        <ImageCarousel />

        {/* CTA Button - Ver Vantagens */}
        <div
          ref={ctaRef}
          className={`mt-12 transition-all duration-700 delay-700 ${
            ctaInView ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button 
            variant="outline"
            size="lg" 
            className="group relative border-2 border-gold/50 bg-background/10 hover:bg-gold/10 text-gold font-semibold px-8 py-4 text-base shadow-card transition-all duration-300 hover:shadow-glow hover:scale-105 w-full max-w-md backdrop-blur-sm"
            onClick={() => {
              const featuresSection = document.getElementById('features-section');
              featuresSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            <span className="relative z-10 flex items-center justify-center">
              <Star className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
              Ver todas as vantagens
            </span>
          </Button>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-muted-foreground animate-fade-in delay-1000">
            <div className="flex items-center gap-1 transition-transform duration-300 hover:scale-110">
              <Star className="h-4 w-4 fill-gold text-gold animate-pulse" />
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