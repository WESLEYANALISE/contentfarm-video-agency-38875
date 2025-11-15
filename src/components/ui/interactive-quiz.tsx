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
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <Badge className="mb-4 bg-gold/10 text-gold border-gold/30 text-lg px-4 py-1">
            DIREITO PREMIUM
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-premium bg-clip-text text-transparent">
            Descubra como podemos te ajudar
          </h1>
          <p className="text-foreground/70">
            Responda 3 perguntas rápidas para personalizar sua experiência
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 animate-fade-in delay-200">
          <div className="flex justify-between text-sm text-foreground/60 mb-2">
            <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-premium transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card 
          key={currentQuestion}
          className="bg-gradient-card border-border/50 shadow-card animate-scale-in"
        >
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
              {question.question}
            </h2>

            <div className="space-y-4">
              {question.options.map((option, index) => {
                const Icon = option.icon;
                const isSelected = selectedOption === index;
                
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedOption !== null}
                    className={`
                      w-full p-6 rounded-xl border-2 transition-all duration-300
                      flex items-center gap-4 group
                      ${isSelected 
                        ? `bg-${option.color}/20 border-${option.color} scale-105 shadow-glow` 
                        : 'bg-card border-border/50 hover:border-gold/30 hover:scale-105 hover:shadow-glow'
                      }
                      ${selectedOption !== null && !isSelected ? 'opacity-50' : ''}
                      disabled:cursor-not-allowed
                    `}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className={`
                      p-4 rounded-lg transition-all duration-300
                      ${isSelected 
                        ? `bg-${option.color} text-background` 
                        : 'bg-secondary group-hover:bg-gold/20'
                      }
                    `}>
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <span className="text-lg font-medium text-foreground flex-1 text-left">
                      {option.label}
                    </span>

                    {isSelected && (
                      <CheckCircle2 className="h-6 w-6 text-gold animate-scale-in" />
                    )}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-foreground/60 animate-fade-in delay-300">
          ✨ Suas respostas nos ajudam a personalizar sua experiência
        </div>
      </div>
    </div>
  );
};