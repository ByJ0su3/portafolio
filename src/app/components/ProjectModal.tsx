import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  projectDescription: string;
  images: string[];
}

export function ProjectModal({ isOpen, onClose, projectTitle, projectDescription, images }: ProjectModalProps) {
  if (!isOpen) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots custom-dots",
    adaptiveHeight: true
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 w-full max-w-5xl bg-gray-900 rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4 border-b border-purple-500/20">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-white mb-1">{projectTitle}</h3>
              <p className="text-gray-400">{projectDescription}</p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600/20 hover:bg-purple-600/30 flex items-center justify-center text-purple-300 hover:text-white transition-colors duration-200"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="px-8 py-8 carousel-container">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="outline-none">
                <div className="px-4">
                  <div className="relative rounded-xl overflow-hidden bg-gray-800">
                    <ImageWithFallback
                      src={image}
                      alt={`${projectTitle} - Imagen ${index + 1}`}
                      className="w-full h-auto max-h-[70vh] object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Estilos personalizados para el carrusel */}
      <style>{`
        .carousel-container .slick-slide {
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }
        
        .carousel-container .slick-slide.slick-active {
          opacity: 1;
        }
        
        .custom-dots {
          bottom: -40px;
        }
        
        .custom-dots li button:before {
          color: #a855f7;
          opacity: 0.5;
          font-size: 10px;
        }
        
        .custom-dots li.slick-active button:before {
          color: #a855f7;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-purple-600/80 hover:bg-purple-600 flex items-center justify-center text-white transition-colors duration-200 shadow-lg"
      aria-label="Siguiente"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-purple-600/80 hover:bg-purple-600 flex items-center justify-center text-white transition-colors duration-200 shadow-lg"
      aria-label="Anterior"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
}
