import { ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fondo con degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Efectos de brillo morado */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      
      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        {/* Foto de perfil */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300" />
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-purple-500/50">
              <ImageWithFallback
                src="src/public/me 4k.png"
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Nombre */}
        <h1 className="text-white mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Josue Manuel Domínguez de la Cruz
        </h1>

        {/* Descripción profesional */}
        <p className="text-purple-300 mb-6">
          UI/UX Designer | Mobile App Designer | Web Developer
        </p>

        {/* Habilidades */}
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          REACT, Figma, HTML, CSS, JavaScript and responsive design
        </p>

        {/* Botón CTA */}
        <button
          onClick={scrollToProjects}
          className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
        >
          <span className="relative z-10">View my projects</span>
          <ArrowDown className="relative z-10 w-5 h-5 group-hover:animate-bounce" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </section>
  );
}
