import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, Shield, Clock, Zap } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

export const CTASection = () => {
  const [mainRef, mainInView] = useInView({ threshold: 0.2 });
  const [priceRef, priceInView] = useInView({ threshold: 0.2 });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.2 });

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background via-card/20 to-background relative overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Main CTA Content */}
        <div
          ref={mainRef}
          className={`transition-all duration-700 ${
            mainInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
          }`}
        >
          <Badge className="mb-4 bg-destructive/20 text-destructive border-destructive/30 px-3 py-1">
            ⚡ OFERTA LIMITADA
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-premium bg-clip-text text-transparent leading-tight">
            Garante sua aprovação
          </h2>
          
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            Mais de 50.000 profissionais já transformaram suas carreiras
          </p>
        </div>

        {/* Price Highlight */}
        <div 
          ref={priceRef}
          className={`bg-gradient-card backdrop-blur-sm rounded-xl p-6 mb-6 border border-border shadow-card max-w-sm mx-auto transition-all duration-700 delay-200 ${
            priceInView ? 'animate-scale-in hover-scale' : 'opacity-0 scale-95'
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-xl text-muted-foreground line-through">R$ 79,90</span>
            <Badge className="bg-destructive text-destructive-foreground">
              50% OFF
            </Badge>
          </div>
          <div className="text-4xl font-bold text-gold mb-1">R$ 39,90</div>
          <p className="text-sm text-muted-foreground mb-2">pagamento único</p>
          <p className="text-sm text-gold font-bold mb-2">
            🔥 SEM MENSALIDADE!
          </p>
          <p className="text-xs text-destructive font-medium">
            Promoção termina em breve!
          </p>
        </div>

        {/* CTA Button */}
        <Button 
          size="lg" 
          className="bg-gradient-premium hover:bg-gradient-premium/90 text-background font-bold px-10 py-4 text-lg shadow-gold transition-all duration-300 hover:shadow-glow hover:scale-105 w-full max-w-sm mb-4"
          onClick={() => {
            console.log('Botão CTA clicado - redirecionando para:', 'https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0');
            window.open('https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0', '_blank');
          }}
        >
          <Crown className="h-5 w-5 mr-2" />
          Baixar versão premium
        </Button>

        {/* Benefits Quick List */}
        <div 
          ref={benefitsRef}
          className={`grid grid-cols-2 gap-3 mb-6 max-w-md mx-auto transition-all duration-700 delay-400 ${
            benefitsInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center gap-2 text-sm">
            <Shield className="h-4 w-4 text-feature-green" />
            <span>7 dias garantia</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-feature-blue" />
            <span>Acesso imediato</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Zap className="h-4 w-4 text-feature-orange" />
            <span>Cancele quando quiser</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Crown className="h-4 w-4 text-feature-purple" />
            <span>Suporte 24/7</span>
          </div>
        </div>

        {/* Security */}
        <p className="text-xs text-muted-foreground">
          🔒 Transação segura • Redirecionamento para Google Play Store
        </p>
      </div>
    </section>
  );
};