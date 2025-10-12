import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const testimonials = [
  {
    name: "Dra. Marina Santos",
    profession: "Advogada",
    rating: 5,
    text: "Passei na OAB no primeiro exame. Os simulados e flashcards foram essenciais!",
    avatar: "MS"
  },
  {
    name: "Carlos Silva",
    profession: "Estudante 8º período",
    rating: 5,
    text: "30k+ petições economizam horas do meu trabalho. Vale cada centavo!",
    avatar: "CS"
  },
  {
    name: "Dr. Roberto Lima",
    profession: "Juiz de Direito",
    rating: 5,
    text: "Portal de notícias me mantém sempre atualizado. Ferramenta indispensável.",
    avatar: "RL"
  }
];

export const TestimonialsSection = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
          }`}
        >
          <Badge className="mb-3 bg-gold/10 text-gold border-gold/30">
            APROVADOS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-premium bg-clip-text text-transparent">
            Quem já passou
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${
            gridInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card border-border/50 hover:border-gold/30 transition-all duration-300 hover-scale ${
                gridInView ? 'animate-fade-in' : ''
              }`}
              style={{
                animationDelay: gridInView ? `${index * 150}ms` : '0ms'
              }}
            >
              <CardContent className="p-4">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-gold text-gold" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground/90 mb-4 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-premium rounded-full flex items-center justify-center text-background font-semibold text-xs">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.profession}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Stats */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-3 gap-4 mt-12 text-center transition-all duration-700 delay-500 ${
            statsInView ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`}
        >
          <div>
            <div className="text-2xl font-bold text-gold">50k+</div>
            <div className="text-xs text-muted-foreground">Usuários</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gold">4.8★</div>
            <div className="text-xs text-muted-foreground">Avaliação</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gold">98%</div>
            <div className="text-xs text-muted-foreground">Aprovação</div>
          </div>
        </div>
      </div>
    </section>
  );
};