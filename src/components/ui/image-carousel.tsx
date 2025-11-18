import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useInView } from "@/hooks/use-in-view";
import { useState } from "react";

const carouselImages = [
  { src: "https://i.imgur.com/WdP210U.png", alt: "Vade Mecum 2025 atualizado - Direito Premium" },
  { src: "https://i.imgur.com/4Vf057o.png", alt: "Assistente IA 24/7 - Direito Premium" },
  { src: "https://i.imgur.com/YU58tf1.png", alt: "800+ Livros de Direito - Direito Premium" },
  { src: "https://i.imgur.com/iDI069M.png", alt: "30.000+ Modelos de Petições - Direito Premium" },
  { src: "https://i.imgur.com/FIyDNcN.png", alt: "500+ Videoaulas em HD - Direito Premium" },
  { src: "https://i.imgur.com/G5jftqy.png", alt: "8.000+ Flashcards inteligentes - Direito Premium" },
  { src: "https://i.imgur.com/8Mmfq25.png", alt: "Simulados OAB completos - Direito Premium" },
  { src: "https://i.imgur.com/vkdv3u9.png", alt: "Acesso Desktop e Mobile - Direito Premium" },
  { src: "https://i.imgur.com/jVfLsvU.png", alt: "Mapas mentais interativos - Direito Premium" },
  { src: "https://i.imgur.com/FEQZRnc.png", alt: "Suporte prioritário 24/7 - Direito Premium" },
];

export const ImageCarousel = () => {
  const [carouselRef, carouselInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  return (
    <div 
      ref={carouselRef}
      className={`mt-10 transition-all duration-1000 ${
        carouselInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Carousel 
        className="w-full max-w-4xl mx-auto"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-[45%] md:basis-[40%]">
              <div className="h-full group">
                <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border transition-all duration-500 hover:shadow-glow hover:scale-105 hover:border-gold/30 relative">
                  {!loadedImages.has(index) && (
                    <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-muted/10 via-muted/20 to-muted/10 z-10" />
                  )}
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    loading="lazy"
                    className={`w-full h-64 md:h-80 object-cover transition-all duration-700 group-hover:scale-110 ${
                      loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(index)}
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                      handleImageLoad(index);
                    }}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 md:left-4 transition-all duration-300 hover:scale-110 hover:shadow-glow bg-card/80 backdrop-blur-sm" />
        <CarouselNext className="right-0 md:right-4 transition-all duration-300 hover:scale-110 hover:shadow-glow bg-card/80 backdrop-blur-sm" />
      </Carousel>
    </div>
  );
};