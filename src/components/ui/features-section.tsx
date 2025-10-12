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
    description: "Sempre atualizado",
    highlight: "Novo"
  },
  {
    icon: MessageSquare,
    title: "Assistente IA",
    description: "WhatsApp + App",
    highlight: "IA"
  },
  {
    icon: Monitor,
    title: "Acesso Desktop",
    description: "Computador",
    highlight: "Web"
  },
  {
    icon: Library,
    title: "400+ Livros",
    description: "Biblioteca completa",
    highlight: "Premium"
  },
  {
    icon: FileSignature,
    title: "30k+ Petições",
    description: "Modelos prontos",
    highlight: "Top"
  },
  {
    icon: Play,
    title: "500+ Vídeos",
    description: "Aulas completas",
    highlight: "HD"
  },
  {
    icon: Brain,
    title: "8k+ Flashcards",
    description: "Memorização",
    highlight: "Smart"
  },
  {
    icon: CheckCircle,
    title: "Simulado OAB",
    description: "Aprovação garantida",
    highlight: "OAB"
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
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
          }`}
        >
          <Badge className="mb-3 bg-gold/10 text-gold border-gold/30">
            RECURSOS PREMIUM
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-premium bg-clip-text text-transparent">
            Tudo em uma plataforma
          </h2>
        </div>

        {/* Features Grid */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 delay-200 ${
            gridInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
          }`}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className={`bg-gradient-card border-border/50 hover:border-gold/30 transition-all duration-300 group relative hover-scale ${
                  gridInView ? 'animate-fade-in' : ''
                }`}
                style={{
                  animationDelay: gridInView ? `${index * 100}ms` : '0ms'
                }}
              >
                <CardContent className="p-4 text-center">
                  <Badge className="absolute -top-2 -right-2 text-xs bg-gold text-background">
                    {feature.highlight}
                  </Badge>
                  <div className={`inline-flex p-2 rounded-lg mb-3 border transition-all duration-300 group-hover:scale-110 ${getColorClasses(index)}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-3 gap-4 mt-8 text-center transition-all duration-700 delay-500 ${
            statsInView ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`}
        >
          <div>
            <div className="text-2xl font-bold text-gold">400+</div>
            <div className="text-xs text-muted-foreground">Livros</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gold">30k+</div>
            <div className="text-xs text-muted-foreground">Petições</div>
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