import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/use-in-view";
import { 
  BookOpen, 
  MessageSquare, 
  Monitor, 
  Headphones, 
  GraduationCap,
  Library,
  BookMarked,
  BookText,
  FileText,
  Download,
  FileCheck,
  Play,
  Brain,
  Map,
  Book,
  CheckCircle,
  HelpCircle,
  FileSignature,
  Film,
  Newspaper
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Vade Mecum 2025",
    description: "Legislação atualizada automaticamente com todas as mudanças jurídicas",
    stats: "2025",
    highlight: "Atualizado"
  },
  {
    icon: MessageSquare,
    title: "Assistente IA 24/7",
    description: "Tire dúvidas jurídicas a qualquer hora via WhatsApp ou app",
    stats: "24/7",
    highlight: "IA Premium"
  },
  {
    icon: Library,
    title: "800+ Livros Completos",
    description: "Biblioteca jurídica completa com os principais autores do direito",
    stats: "800+",
    highlight: "Exclusivo"
  },
  {
    icon: FileSignature,
    title: "30.000+ Petições",
    description: "Modelos prontos e editáveis para todas as áreas do direito",
    stats: "30k+",
    highlight: "Premium"
  },
  {
    icon: Play,
    title: "500+ Videoaulas HD",
    description: "Aulas completas com os melhores professores, todas em alta definição",
    stats: "500+",
    highlight: "HD"
  },
  {
    icon: Brain,
    title: "8.000+ Flashcards",
    description: "Sistema inteligente de memorização baseado em repetição espaçada",
    stats: "8k+",
    highlight: "Smart"
  },
  {
    icon: CheckCircle,
    title: "Simulados OAB",
    description: "Simulados completos e atualizados conforme o padrão oficial da OAB",
    stats: "Completo",
    highlight: "OAB"
  },
  {
    icon: Monitor,
    title: "Acesso Desktop",
    description: "Estude no computador, tablet ou celular - sincronização automática",
    stats: "Multi",
    highlight: "Web + App"
  },
  {
    icon: Map,
    title: "Mapas Mentais",
    description: "Visualize conexões entre temas jurídicos de forma interativa",
    stats: "Novo",
    highlight: "Premium"
  },
  {
    icon: Newspaper,
    title: "Jurisprudência",
    description: "Resumos atualizados dos principais tribunais do Brasil",
    stats: "Diário",
    highlight: "Atualizado"
  },
  {
    icon: Headphones,
    title: "Suporte Prioritário",
    description: "Atendimento exclusivo e rápido para usuários premium",
    stats: "VIP",
    highlight: "Premium"
  },
  {
    icon: Download,
    title: "Atualizações Vitalícias",
    description: "Receba todas as atualizações sem custo adicional, para sempre",
    stats: "Grátis",
    highlight: "Vitalício"
  }
];

const getColorClasses = (index: number) => {
  const colors = [
    "bg-feature-blue/10 border-feature-blue/30 text-feature-blue",
    "bg-feature-green/10 border-feature-green/30 text-feature-green", 
    "bg-feature-orange/10 border-feature-orange/30 text-feature-orange",
    "bg-feature-purple/10 border-feature-purple/30 text-feature-purple"
  ];
  return colors[index % 4];
};

export const FeaturesSection = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });

  return (
    <section id="features-section" className="py-16 px-4 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
          }`}
        >
          <Badge className="mb-4 bg-gold/10 text-gold border-gold/30 text-base px-4 py-2">
            ✨ RECURSOS PREMIUM
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-premium bg-clip-text text-transparent leading-tight">
            Tudo o que você precisa para ser aprovado
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            12 ferramentas poderosas em uma única plataforma. Material completo para estudantes, concurseiros e advogados.
          </p>
        </div>

        {/* Features Grid */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${
            gridInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
          }`}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className={`bg-gradient-card border-2 border-border/50 hover:border-gold/40 transition-all duration-300 group hover:shadow-glow hover:scale-105 ${
                  gridInView ? 'animate-fade-in' : ''
                }`}
                style={{
                  animationDelay: gridInView ? `${index * 50}ms` : '0ms'
                }}
              >
                <CardContent className="p-7">
                  <div className="flex items-start gap-5">
                    <div className={`flex-shrink-0 p-4 rounded-2xl border-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow ${getColorClasses(index)}`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="font-bold text-foreground text-lg">
                          {feature.title}
                        </h3>
                        <Badge variant="outline" className="text-xs border-gold/30 text-gold bg-gold/5 px-2 py-0.5">
                          {feature.highlight}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {feature.description}
                      </p>
                      <div className="text-gold font-bold text-base">
                        {feature.stats}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-3 gap-6 mt-12 transition-all duration-700 delay-500 ${
            statsInView ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`}
        >
          <div className="bg-gradient-card border border-border/50 rounded-xl p-6 hover:border-gold/30 transition-all duration-300 hover:scale-105 hover:shadow-glow">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-premium bg-clip-text text-transparent mb-2">800+</div>
            <div className="text-sm text-foreground/70 font-medium">Livros Jurídicos</div>
          </div>
          <div className="bg-gradient-card border border-border/50 rounded-xl p-6 hover:border-gold/30 transition-all duration-300 hover:scale-105 hover:shadow-glow">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-premium bg-clip-text text-transparent mb-2">30k+</div>
            <div className="text-sm text-foreground/70 font-medium">Modelos de Petições</div>
          </div>
          <div className="bg-gradient-card border border-border/50 rounded-xl p-6 hover:border-gold/30 transition-all duration-300 hover:scale-105 hover:shadow-glow">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-premium bg-clip-text text-transparent mb-2">98%</div>
            <div className="text-sm text-foreground/70 font-medium">Taxa de Aprovação</div>
          </div>
        </div>
      </div>
    </section>
  );
};