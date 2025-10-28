import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useInView } from "@/hooks/use-in-view";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";
import carousel5 from "@/assets/carousel-5.jpg";
import carousel6 from "@/assets/carousel-6.jpg";
import carousel7 from "@/assets/carousel-7.jpg";
import carousel8 from "@/assets/carousel-8.jpg";
import carousel9 from "@/assets/carousel-9.jpg";
import carousel10 from "@/assets/carousel-10.jpg";

const carouselImages = [
  { src: carousel1, alt: "Funcionalidade 1 do aplicativo Direito Premium" },
  { src: carousel2, alt: "Funcionalidade 2 do aplicativo Direito Premium" },
  { src: carousel3, alt: "Funcionalidade 3 do aplicativo Direito Premium" },
  { src: carousel4, alt: "Funcionalidade 4 do aplicativo Direito Premium" },
  { src: carousel5, alt: "Funcionalidade 5 do aplicativo Direito Premium" },
  { src: carousel6, alt: "Funcionalidade 6 do aplicativo Direito Premium" },
  { src: carousel7, alt: "Funcionalidade 7 do aplicativo Direito Premium" },
  { src: carousel8, alt: "Funcionalidade 8 do aplicativo Direito Premium" },
  { src: carousel9, alt: "Funcionalidade 9 do aplicativo Direito Premium" },
  { src: carousel10, alt: "Funcionalidade 10 do aplicativo Direito Premium" },
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