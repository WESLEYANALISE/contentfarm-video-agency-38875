import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  BookOpen, 
  Scale, 
  Clock, 
  Target, 
  TrendingUp,
  CheckCircle2
} from "lucide-react";

interface QuizProps {
  onComplete: () => void;
}

const questions = [
  {
    id: 1,
    question: "Qual é o seu perfil?",
    options: [
      { icon: GraduationCap, label: "Estudante de Direito", color: "feature-blue" },
      { icon: BookOpen, label: "Concurseiro", color: "feature-green" },
      { icon: Scale, label: "Advogado(a)", color: "feature-purple" }
    ]
  },
  {
    id: 2,
    question: "Qual é o seu maior desafio atualmente?",
    options: [
      { icon: Clock, label: "Falta de tempo para estudar", color: "feature-blue" },
      { icon: Target, label: "Dificuldade em encontrar material atualizado", color: "feature-orange" },
      { icon: TrendingUp, label: "Organizar e memorizar conteúdo", color: "feature-purple" }
    ]
  },
  {
    id: 3,
    question: "O que você mais precisa agora?",
    options: [
      { icon: BookOpen, label: "Material completo e organizado", color: "feature-green" },
      { icon: Scale, label: "Modelos de petições e jurisprudência", color: "feature-purple" },
      { icon: GraduationCap, label: "Videoaulas e métodos de estudo", color: "feature-blue" }
    ]
  }
];

export const InteractiveQuiz = ({ onComplete }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleAnswer = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    
    setTimeout(() => {
      const newAnswers = [...answers, questions[currentQuestion].options[optionIndex].label];
      setAnswers(newAnswers);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setTimeout(onComplete, 800);
      }
    }, 400);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-6">
      <div className="max-w-xl w-full">
        {/* Header */}
        <div className="text-center mb-6 animate-fade-in">
          <Badge className="mb-3 bg-gold/10 text-gold border-gold/30 text-sm px-3 py-1">
            DIREITO PREMIUM
          </Badge>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-premium bg-clip-text text-transparent">
            Descubra como podemos te ajudar
          </h1>
          <p className="text-sm text-foreground/70">
            3 perguntas rápidas
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6 animate-fade-in delay-200">
          <div className="flex justify-between text-xs text-foreground/60 mb-2">
            <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-premium transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card 
          key={currentQuestion}
          className="bg-card/80 backdrop-blur-sm border-border/40 shadow-lg animate-scale-in"
        >
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-center mb-6 text-foreground">
              {question.question}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                const Icon = option.icon;
                const isSelected = selectedOption === index;
                
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedOption !== null}
                    className={`
                      w-full p-4 rounded-xl border-2 transition-all duration-300
                      flex items-center gap-3 group
                      ${isSelected 
                        ? 'bg-gold/10 border-gold scale-[1.02] shadow-glow' 
                        : 'bg-card/50 border-border/50 hover:border-gold/30 hover:scale-[1.02] hover:shadow-md'
                      }
                      ${selectedOption !== null && !isSelected ? 'opacity-40' : ''}
                      disabled:cursor-not-allowed
                    `}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className={`
                      p-3 rounded-lg transition-all duration-300
                      ${isSelected 
                        ? 'bg-gold text-background' 
                        : 'bg-secondary/50 group-hover:bg-gold/20'
                      }
                    `}>
                      <Icon className="h-5 w-5" />
                    </div>
                    
                    <span className="text-base font-medium text-foreground flex-1 text-left">
                      {option.label}
                    </span>

                    {isSelected && (
                      <CheckCircle2 className="h-5 w-5 text-gold animate-scale-in" />
                    )}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-4 text-xs text-foreground/60 animate-fade-in delay-300">
          ✨ Personalizando sua experiência
        </div>
      </div>
    </div>
  );
};