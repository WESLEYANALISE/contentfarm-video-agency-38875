import { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const LazyImage = ({ src, alt, className = '' }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden bg-muted/20 rounded-lg">
      <img
        ref={imgRef}
        src={isInView ? src : ''}
        alt={alt}
        className={`transition-all duration-700 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        } ${className}`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />
      {!isLoaded && isInView && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-muted/10 via-muted/20 to-muted/10" />
      )}
    </div>
  );
};
