import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useInView } from "@/hooks/use-in-view";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";
import carousel5 from "@/assets/carousel-5.jpg";
import carousel6 from "@/assets/carousel-6.jpg";

const carouselImages = [
  { src: carousel1, alt: "Estudante de direito estudando em biblioteca" },
  { src: carousel2, alt: "Advogado profissional em escritório moderno" },
  { src: carousel3, alt: "Biblioteca jurídica com estudantes em grupo" },
  { src: carousel4, alt: "Advogada trabalhando em escritório elegante" },
  { src: carousel5, alt: "Grupo de estudantes de direito estudando" },
  { src: carousel6, alt: "Advogado sênior em reunião corporativa" },
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
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <div className="bg-card rounded-lg overflow-hidden shadow-card border border-border hover-scale">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};