import { Scale, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card/90 backdrop-blur-sm border-t border-border/50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4">
          {/* Brand */}
          <div className="flex items-center justify-center gap-2">
            <div className="p-1.5 bg-gradient-premium rounded-lg">
              <Scale className="h-5 w-5 text-background" />
            </div>
            <span className="text-lg font-bold bg-gradient-premium bg-clip-text text-transparent">
              Direito Premium
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            A plataforma jurídica mais completa do Brasil
          </p>

          {/* Contact */}
          <div className="flex justify-center text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Mail className="h-3 w-3" />
              <span>wn7corporation@gmail.com</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-4 text-xs text-muted-foreground">
            <a href="#privacidade" className="hover:text-gold transition-colors">
              Privacidade
            </a>
            <a href="#termos" className="hover:text-gold transition-colors">
              Termos
            </a>
            <a href="#suporte" className="hover:text-gold transition-colors">
              Suporte
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground pt-4 border-t border-border/50">
            © 2024 Direito Premium. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};