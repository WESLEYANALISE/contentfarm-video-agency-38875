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
          className={`flex items-center justify-center gap-2 mb-4 transition-all duration-700 ${
            logoInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="p-2 bg-gradient-premium rounded-lg shadow-gold">
            <Scale className="h-6 w-6 text-background" />
          </div>
          <Badge variant="outline" className="px-3 py-1 text-gold border-gold/30 bg-background/20 text-sm">
            <Crown className="h-3 w-3 mr-1" />
            PREMIUM
          </Badge>
        </div>

        {/* Main Title */}
        <div
          ref={titleRef}
          className={`transition-all duration-700 delay-200 ${
            titleInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-3 bg-gradient-premium bg-clip-text text-transparent leading-tight">
            Direito Premium
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-6">
            Aplicativo jurídico completo para sua aprovação
          </p>
        </div>

        {/* Video Presentation */}
        <div 
          ref={priceRef}
          className={`transition-all duration-700 delay-300 mb-6 ${
            priceInView ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative w-full max-w-sm mx-auto aspect-[9/16] rounded-2xl overflow-hidden shadow-glow border border-border/50">
            <iframe
              src="https://www.youtube.com/embed/r7Nz-mFGa8w?autoplay=1&loop=1&playlist=r7Nz-mFGa8w&controls=0&modestbranding=1&playsinline=1&vq=hd1080"
              title="Apresentação do App"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Price Highlight */}
        <div 
          className={`transition-all duration-700 delay-400 ${
            priceInView ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`}
        >
          <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 mb-6 border border-border shadow-card max-w-xs mx-auto">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-muted-foreground line-through text-sm">R$ 79,90</span>
              <Badge className="bg-destructive text-destructive-foreground text-xs">50% OFF</Badge>
            </div>
            <div className="text-3xl font-bold text-gold">R$ 39,90</div>
            <p className="text-xs text-muted-foreground">pagamento único</p>
            <p className="text-xs text-gold font-medium mt-1">🔥 Sem mensalidade!</p>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-4 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-gold text-gold" />
              <span>4.8/5</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div>50k+ usuários</div>
          </div>
        </div>

        {/* CTA Button */}
        <div
          ref={ctaRef}
          className={`transition-all duration-700 delay-600 ${
            ctaInView ? 'animate-fade-in hover-scale' : 'opacity-0 translate-y-4'
          }`}
        >
          <Button 
            size="lg" 
            className="bg-gradient-premium hover:bg-gradient-premium/90 text-background font-semibold px-8 py-3 text-lg shadow-gold transition-all duration-300 hover:shadow-glow hover:scale-105 w-full max-w-sm"
            onClick={() => {
              console.log('Botão clicado - redirecionando para:', 'https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0');
              window.open('https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0', '_blank');
            }}
          >
            <Crown className="h-5 w-5 mr-2" />
            Baixar Versão Premium
          </Button>

          {/* Guarantee */}
          <p className="mt-4 text-sm text-muted-foreground">
            ✅ 7 dias de garantia • Cancele quando quiser
          </p>
        </div>

        {/* Image Carousel */}
        <ImageCarousel />
      </div>
    </section>
  );
};