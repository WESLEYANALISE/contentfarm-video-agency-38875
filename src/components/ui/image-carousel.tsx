import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useInView } from "@/hooks/use-in-view";
import Autoplay from "embla-carousel-autoplay";

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
  const [carouselRef, carouselInView] = useInView({ threshold: 0.2 });

  return (
    <div 
      ref={carouselRef}
      className={`mt-10 transition-all duration-1000 ${
        carouselInView ? 'animate-fade-in' : 'opacity-0 translate-y-8'
      }`}
    >
      <Carousel 
        className="w-full max-w-4xl mx-auto"
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
          dragFree: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          })
        ]}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] sm:basis-[60%] md:basis-[45%]">
              <div className="h-full group">
                <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border transition-all duration-500 hover:shadow-glow hover:scale-105 hover:border-gold/30 h-[400px] md:h-[450px] flex items-center justify-center p-2">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 md:left-4 transition-all duration-300 hover:scale-110 hover:shadow-glow" />
        <CarouselNext className="right-0 md:right-4 transition-all duration-300 hover:scale-110 hover:shadow-glow" />
      </Carousel>
    </div>
  );
};