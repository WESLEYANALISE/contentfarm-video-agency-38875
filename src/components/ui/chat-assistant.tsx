import { useState, useEffect, useRef } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import assistantAvatar from "@/assets/assistant-avatar.jpg";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  buttons?: { text: string; action: string }[];
}

type UserType = "advogado" | "estudante" | "concurseiro" | "outros" | null;
type ConversationStep = "initial" | "userType" | "benefits" | "questions" | "faq";

export const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<ConversationStep>("initial");
  const [userType, setUserType] = useState<UserType>(null);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Show bubble after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const addMessage = (text: string, isUser: boolean = false, buttons?: { text: string; action: string }[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      buttons,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const addMessageWithTyping = async (text: string, isUser: boolean = false, buttons?: { text: string; action: string }[], delay: number = 800) => {
    if (!isUser) {
      setIsTyping(true);
      await new Promise(resolve => setTimeout(resolve, delay));
      setIsTyping(false);
    }
    addMessage(text, isUser, buttons);
  };

  const handleOpenChat = async () => {
    setIsOpen(true);
    setShowBubble(false);
    if (messages.length === 0) {
      await addMessageWithTyping("Olá! 👋 Sou a assistente do Direito Premium.", false, undefined, 500);
      await addMessageWithTyping("Gostaria de ver as vantagens do Premium?", false, [
        { text: "🎁 Ver vantagens Premium", action: "benefits" },
        { text: "💬 Não, quero conversar", action: "chat" },
      ], 1000);
      setCurrentStep("initial");
    }
  };

  const handleStartChat = async () => {
    addMessage("💬 Não, quero conversar", true);
    await addMessageWithTyping("Antes de começar, me conta: você é o quê?", false, [
      { text: "👨‍⚖️ Advogado", action: "advogado" },
      { text: "📚 Estudante", action: "estudante" },
      { text: "📝 Concurseiro", action: "concurseiro" },
      { text: "🔍 Outros", action: "outros" },
    ], 800);
    setCurrentStep("userType");
  };

  const handleUserTypeSelection = async (type: UserType) => {
    setUserType(type);
    
    const userTypeLabels = {
      advogado: "👨‍⚖️ Advogado",
      estudante: "📚 Estudante",
      concurseiro: "📝 Concurseiro",
      outros: "🔍 Outros",
    };
    
    addMessage(userTypeLabels[type!], true);

    let responseText = "";
    let painPoint = "";
    let solution = "";

    switch (type) {
      case "advogado":
        painPoint = "Sabemos que como advogado, você precisa de acesso rápido a legislações, jurisprudências e doutrinas para fundamentar suas petições e pareceres. Perder tempo procurando informações pode custar casos importantes.";
        solution = "Com o Direito Premium, você tem acesso ILIMITADO a mais de 800 livros jurídicos, todas as leis atualizadas, jurisprudências organizadas e ferramentas de busca avançada. Tudo isso no seu bolso, disponível offline!";
        responseText = `Perfeito! ${painPoint}\n\n✨ ${solution}`;
        break;
      case "estudante":
        painPoint = "Como estudante de Direito, você sabe que o material de estudo é caro e muitas vezes difícil de acessar. Livros custam centenas de reais e nem sempre estão disponíveis na biblioteca.";
        solution = "O Direito Premium te dá acesso a uma biblioteca completa com mais de 800 livros dos melhores autores, resumos, mapas mentais e conteúdo organizado por disciplina. Por menos que o preço de UM livro, você tem TODOS!";
        responseText = `Entendi! ${painPoint}\n\n📚 ${solution}`;
        break;
      case "concurseiro":
        painPoint = "Sabemos que a preparação para concursos exige acesso constante a legislações atualizadas, questões comentadas e materiais de revisão. Carregar vários livros é impraticável.";
        solution = "Com o Direito Premium, você estuda em qualquer lugar com acesso offline a toda legislação, doutrinas dos principais autores, questões comentadas e materiais otimizados para concursos. Sua aprovação na palma da mão!";
        responseText = `Ótimo! ${painPoint}\n\n🎯 ${solution}`;
        break;
      case "outros":
        painPoint = "Seja qual for sua área de atuação no Direito, ter acesso rápido e confiável a informações jurídicas é essencial para tomar decisões corretas.";
        solution = "O Direito Premium oferece uma plataforma completa com legislação, doutrina, jurisprudência e ferramentas práticas que vão facilitar seu dia a dia jurídico, tudo em um só lugar!";
        responseText = `Entendo! ${painPoint}\n\n💼 ${solution}`;
        break;
    }

    await addMessageWithTyping(responseText, false, undefined, 1200);
    await addMessageWithTyping("O que você gostaria de saber?", false, [
      { text: "🎁 Ver vantagens Premium", action: "benefits" },
      { text: "💰 Quanto custa?", action: "pricing" },
      { text: "❓ Tirar dúvidas", action: "faq" },
    ], 1000);
    setCurrentStep("benefits");
  };

  const handleBenefitsView = async () => {
    addMessage("🎁 Ver vantagens Premium", true);
    
    await addMessageWithTyping("Perfeito! Vou te mostrar todas as vantagens do Premium. 🚀", false, undefined, 800);
    
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const featuresSection = document.getElementById("features-section");
    if (featuresSection) {
      setIsOpen(false);
      // Small delay to ensure chat closes before scrolling
      await new Promise(resolve => setTimeout(resolve, 300));
      featuresSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePricingView = async () => {
    addMessage("💰 Quanto custa?", true);
    
    await addMessageWithTyping("Ótima pergunta! Vou te mostrar nosso investimento único. 💎", false, undefined, 800);
    
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const priceSection = document.getElementById("price-section");
    if (priceSection) {
      setIsOpen(false);
      // Small delay to ensure chat closes before scrolling
      await new Promise(resolve => setTimeout(resolve, 300));
      priceSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const showFAQ = async () => {
    addMessage("❓ Tirar dúvidas", true);
    
    await addMessageWithTyping("Claro! Aqui estão as principais dúvidas:", false, [
      { text: "💰 Qual o valor?", action: "price" },
      { text: "📱 Funciona offline?", action: "offline" },
      { text: "📚 Quantos livros tem?", action: "books" },
      { text: "🔄 Tem mensalidade?", action: "subscription" },
      { text: "✅ Como funciona a garantia?", action: "guarantee" },
      { text: "⬅️ Voltar", action: "back" },
    ], 800);
    setCurrentStep("faq");
  };

  const handleFAQAnswer = async (question: string) => {
    const faqButtons = [
      { text: "💰 Qual o valor?", action: "price" },
      { text: "📱 Funciona offline?", action: "offline" },
      { text: "📚 Quantos livros tem?", action: "books" },
      { text: "🔄 Tem mensalidade?", action: "subscription" },
      { text: "✅ Como funciona a garantia?", action: "guarantee" },
    ];
    
    const selectedButton = faqButtons.find(b => b.action === question);
    if (selectedButton) {
      addMessage(selectedButton.text, true);
    }

    let answer = "";
    
    switch (question) {
      case "price":
        answer = "O Direito Premium custa apenas R$ 39,90 em pagamento ÚNICO! 🎉\n\nIsso mesmo, você paga UMA VEZ e usa para sempre. Sem mensalidades, sem taxas extras. É menos que o preço de um único livro jurídico!";
        break;
      case "offline":
        answer = "SIM! ✅ Funciona 100% OFFLINE!\n\nVocê baixa todo o conteúdo e pode acessar em qualquer lugar, mesmo sem internet. Perfeito para estudar no metrô, em áreas sem sinal ou economizar dados móveis.";
        break;
      case "books":
        answer = "São mais de 800 LIVROS dos melhores autores! 📚\n\nIncluindo obras de:\n• Direito Civil\n• Direito Penal\n• Direito Constitucional\n• Direito Administrativo\n• Direito do Trabalho\n• E muito mais!\n\nTudo organizado por área para você encontrar facilmente.";
        break;
      case "subscription":
        answer = "NÃO tem mensalidade! 🚫💳\n\nÉ pagamento ÚNICO de R$ 39,90 e você tem acesso VITALÍCIO. Pague uma vez e use para sempre. Sem surpresas na fatura!";
        break;
      case "guarantee":
        answer = "Você tem 7 DIAS DE GARANTIA! ✅\n\nSe por qualquer motivo você não gostar, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. Testamos nossa confiança no produto!";
        break;
      case "back":
        addMessage("⬅️ Voltar", true);
        await addMessageWithTyping("O que mais posso te ajudar?", false, [
          { text: "🎁 Ver vantagens Premium", action: "benefits" },
          { text: "❓ Tirar dúvidas", action: "faq" },
        ], 800);
        return;
    }

    await addMessageWithTyping(answer, false, undefined, 1200);
    await addMessageWithTyping("Posso te ajudar com mais alguma coisa?", false, [
      { text: "❓ Outra dúvida", action: "faq" },
      { text: "🎁 Ver vantagens", action: "benefits" },
      { text: "📲 Quero o Premium!", action: "download" },
    ], 1000);
  };

  const handleDownload = async () => {
    addMessage("📲 Quero o Premium!", true);
    
    await addMessageWithTyping("Excelente decisão! 🎉 Você está a um passo de ter toda biblioteca jurídica no seu bolso!", false, undefined, 800);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    window.open('https://play.google.com/store/apps/details?id=br.com.app.gpu2994564.gpub492f9e6db037057aaa93d7adfa9e3e0', '_blank');
  };

  const handleButtonClick = (action: string) => {
    if (action === "chat") {
      handleStartChat();
    } else if (action === "advogado" || action === "estudante" || action === "concurseiro" || action === "outros") {
      handleUserTypeSelection(action as UserType);
    } else if (action === "benefits") {
      handleBenefitsView();
    } else if (action === "pricing") {
      handlePricingView();
    } else if (action === "faq") {
      showFAQ();
    } else if (action === "download") {
      handleDownload();
    } else {
      handleFAQAnswer(action);
    }
  };

  return (
    <>
      {/* Floating message bubble */}
      {showBubble && !isOpen && (
        <div
          className="fixed bottom-32 right-6 z-50 animate-fade-in cursor-pointer"
          onClick={handleOpenChat}
        >
          <div className="bg-white dark:bg-white border border-gray-200 rounded-2xl p-4 shadow-glow max-w-xs relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowBubble(false);
              }}
              className="absolute -top-2 -right-2 bg-gray-100 border border-gray-200 rounded-full p-1 hover:bg-gray-200 transition-colors"
            >
              <X className="h-3 w-3 text-gray-600" />
            </button>
            <p className="text-sm text-gray-800 font-medium">
              Você tem alguma dúvida sobre a versão Premium? 💬
            </p>
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45" />
          </div>
        </div>
      )}

      {/* Chat Avatar Button */}
      {!isOpen && (
        <button
          onClick={handleOpenChat}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full overflow-hidden shadow-glow border-2 border-gold hover:scale-110 transition-transform duration-300 animate-fade-in"
          aria-label="Abrir chat de atendimento"
        >
          <img
            src={assistantAvatar}
            alt="Assistente Premium"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-6 md:right-6 z-50 md:w-96 md:h-[600px] bg-card border-0 md:border md:border-border md:rounded-2xl shadow-glow flex flex-col animate-scale-in overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-premium p-4 flex items-center gap-3">
            <img
              src={assistantAvatar}
              alt="Assistente"
              className="w-12 h-12 rounded-full border-2 border-background object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-background">Assistente Premium</h3>
              <p className="text-xs text-background/80">Online agora</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-background hover:text-background/80 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.isUser
                      ? "bg-gradient-premium text-background"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  {message.buttons && (
                    <div className="mt-3 space-y-2">
                      {message.buttons.map((button, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleButtonClick(button.action)}
                          className="w-full text-left px-3 py-2 bg-background/20 hover:bg-background/30 rounded-lg text-sm transition-colors"
                        >
                          {button.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-muted rounded-2xl p-3 max-w-[80%]">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input (disabled for now as we use buttons) */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-4 py-2 bg-muted rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                disabled
              />
              <Button
                size="icon"
                className="rounded-full bg-gradient-premium hover:bg-gradient-premium/90"
                disabled
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
