import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Shield, Zap, Clock, Star, Check } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

export const PriceRevealSection = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [priceRef, priceInView] = useInView({ threshold: 0.2 });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.2 });

  return (
    <section id="price-section" className="py-20 px-4 bg-gradient-to-br from-card/20 via-background to-card/30 relative overflow-hidden scroll-mt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
          }`}
        >
          <Badge className="mb-4 bg-gold/20 text-gold border-gold/30 px-4 py-1.5 text-sm">
            ⚡ OFERTA POR TEMPO LIMITADO
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-premium bg-clip-text text-transparent leading-tight">
            Investimento Único para Sua Carreira
          </h2>
          
          <p className="text-lg text-foreground/70 mb-2">
            Por menos que um café por dia durante 1 mês
          </p>
          <p className="text-sm text-muted-foreground">
            Acesso vitalício • Sem mensalidades • Cancele quando quiser
          </p>
        </div>

        {/* Price Box */}
        <Card
          ref={priceRef}
          className={`bg-gradient-card border-gold/30 max-w-lg mx-auto mb-8 transition-all duration-700 delay-200 ${
            priceInView ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`}
        >
          <CardContent className="p-8 text-center">
            {/* Price Comparison */}
            <div className="mb-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-2xl text-muted-foreground line-through">R$ 99,99</span>
                <Badge className="bg-destructive text-destructive-foreground text-sm px-3 py-1">
                  60% OFF - OFERTA LIMITADA
                </Badge>
              </div>
              
              <div className="relative">
                <div className="text-6xl font-bold text-gold mb-2 animate-pulse">
                  R$ 39,99
                </div>
                <div className="absolute -top-2 -right-2">
                  <div className="bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                    HOJE
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-gold/90 font-semibold mb-1">
                Pagamento único
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Acesso vitalício a todas as funcionalidades
              </p>
              
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-lg px-4 py-2 text-sm text-gold">
                <Zap className="h-4 w-4" />
                <span className="font-medium">Sem mensalidade • Pague 1x e use para sempre</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="w-full bg-gradient-premium hover:bg-gradient-premium/90 text-background font-bold px-8 py-6 text-xl shadow-gold transition-all duration-300 hover:shadow-glow hover:scale-105 mb-4 animate-pulse"
              onClick={() => {
                console.log('Botão Price Reveal clicado - redirecionando para:', 'https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0');
                window.open('https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0', '_blank');
              }}
            >
              <Crown className="h-6 w-6 mr-2" />
              Garantir acesso agora
            </Button>

            {/* Guarantee */}
            <div className="flex items-center justify-center gap-2 text-sm text-gold/80 mb-4">
              <Shield className="h-4 w-4" />
              <span className="font-medium">✅ 7 dias de garantia incondicional</span>
            </div>

            {/* Urgency message */}
            <p className="text-xs text-destructive font-medium">
              ⏰ Mais de 1.247 pessoas garantiram hoje • Vagas limitadas
            </p>
          </CardContent>
        </Card>

        {/* Benefits Grid */}
        <div
          ref={benefitsRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 transition-all duration-700 delay-400 ${
            benefitsInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-feature-green/20 flex items-center justify-center">
              <Check className="h-5 w-5 text-feature-green" />
            </div>
            <div>
              <div className="font-semibold text-foreground text-sm">Acesso Imediato</div>
              <div className="text-xs text-muted-foreground">Comece a usar agora mesmo</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-feature-blue/20 flex items-center justify-center">
              <Shield className="h-5 w-5 text-feature-blue" />
            </div>
            <div>
              <div className="font-semibold text-foreground text-sm">Garantia Total</div>
              <div className="text-xs text-muted-foreground">7 dias para testar sem risco</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-feature-purple/20 flex items-center justify-center">
              <Crown className="h-5 w-5 text-feature-purple" />
            </div>
            <div>
              <div className="font-semibold text-foreground text-sm">Suporte Premium</div>
              <div className="text-xs text-muted-foreground">Atendimento prioritário 24/7</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-feature-orange/20 flex items-center justify-center">
              <Zap className="h-5 w-5 text-feature-orange" />
            </div>
            <div>
              <div className="font-semibold text-foreground text-sm">Atualizações Grátis</div>
              <div className="text-xs text-muted-foreground">Receba todas as novidades</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-gold text-gold" />
              <span className="font-medium text-foreground">4.8/5</span>
              <span>(12.847 avaliações)</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            🔒 Compra 100% segura e criptografada • Redirecionamento para Google Play Store oficial
          </p>
        </div>
      </div>
    </section>
  );
};