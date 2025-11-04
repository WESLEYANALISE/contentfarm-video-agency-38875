import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useInView } from "@/hooks/use-in-view";

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
      className={`mt-8 transition-all duration-700 ${
        carouselInView ? 'animate-fade-in' : 'opacity-0 translate-y-4'
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
              <div className="h-full">
                <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border hover-scale">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 md:h-80 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 md:left-4" />
        <CarouselNext className="right-0 md:right-4" />
      </Carousel>
    </div>
  );
};