import { Target } from 'lucide-react';

export function AboutMe() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* Efecto de brillo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Título */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
            <Target className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-white">About me</h2>
        </div>

        {/* Tarjeta */}
        <div className="group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
          <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/20">
            <p className="text-gray-300 leading-relaxed">
              My professional goal is to create exceptional digital experiences that combine functionality and aesthetics. I am passionate about user-centered design and creating intuitive interfaces that address real-world problems. I aspire to be part of an innovative team where I can contribute my creativity and technical skills while continuing to learn and grow professionally. I am looking for opportunities in companies that value quality design and multidisciplinary collaboration, where I can contribute to the development of products that make a difference in users' lives.
            </p>
            
            {/* Línea decorativa */}
            <div className="mt-8 h-1 w-24 bg-gradient-to-r from-purple-600 to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
