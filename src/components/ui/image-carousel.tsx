import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useInView } from "@/hooks/use-in-view";

const carouselImages = [
  { src: "/carousel/image-1.png", alt: "Vade Mecum 2025 atualizado - Direito Premium" },
  { src: "/carousel/image-2.png", alt: "Assistente IA 24/7 - Direito Premium" },
  { src: "/carousel/image-3.png", alt: "800+ Livros de Direito - Direito Premium" },
  { src: "/carousel/image-4.png", alt: "30.000+ Modelos de Petições - Direito Premium" },
  { src: "/carousel/image-5.png", alt: "500+ Videoaulas em HD - Direito Premium" },
  { src: "/carousel/image-6.png", alt: "8.000+ Flashcards inteligentes - Direito Premium" },
  { src: "/carousel/image-7.png", alt: "Simulados OAB completos - Direito Premium" },
  { src: "/carousel/image-8.png", alt: "Acesso Desktop e Mobile - Direito Premium" },
  { src: "/carousel/image-9.png", alt: "Mapas mentais interativos - Direito Premium" },
  { src: "/carousel/image-10.png", alt: "Suporte prioritário 24/7 - Direito Premium" },
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