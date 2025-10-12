import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

interface AutoVideoProps {
  videoId: string;
}

export const AutoVideo = ({ videoId }: AutoVideoProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      // Tenta enviar comando de play para o iframe
      iframeRef.current.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        '*'
      );
      setIsPlaying(true);
      setShowPlayButton(false);
    }
  };

  useEffect(() => {
    // Tenta autoplay após um pequeno delay
    const timer = setTimeout(() => {
      playVideo();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full">
      <iframe
        ref={iframeRef}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&origin=${window.location.origin}`}
        title="Apresentação do App"
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      {showPlayButton && !isPlaying && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer z-10 backdrop-blur-sm"
          onClick={playVideo}
        >
          <div className="bg-gold/90 hover:bg-gold rounded-full p-6 transition-all hover:scale-110 shadow-glow">
            <Play className="h-12 w-12 text-background fill-background" />
          </div>
        </div>
      )}
    </div>
  );
};
