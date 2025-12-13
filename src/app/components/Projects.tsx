import { useState } from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProjectModal } from './ProjectModal';

interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Note Manager',
    description: 'Implementation and accessibility of basic React components, focusing on usability and clean component structure.',
    thumbnail: 'src/public/note4.jpg',
    images: [
      'src/public/note4.jpg',
      'src/public/note1.jpg',
      'src/public/note9.jpg',
      'src/public/note2.jpg',
      'src/public/note3.jpg',
      'src/public/note5.jpg',
      'src/public/note6.jpg',
      'src/public/note7.jpg',
      'src/public/note8.jpg'
    ]
  },
  {
    id: 2,
    title: 'Assessment Test (Improving My Skills)',
    description: 'Proyecto de evaluación diaria basado en tareas diseñado para fortalecer las habilidades de resolución de problemas y su consistencia.',
    thumbnail: 'src/public/task1.jpg',
    images: [
      'src/public/task1.jpg',
      'src/public/task2.jpg',
      'src/public/task3.jpg',
      'src/public/task4.jpg',
    ]
  },
  {
    id: 3,
    title: 'Pet Adoption App',
    description: 'An easy-to-use app designed to simplify the pet adoption process with an intuitive and accessible interface.',
    thumbnail: 'src/public/pet1.jpg',
    images: [
      'src/public/pet1.jpg',
      'src/public/pet2.jpg',
      'src/public/pet3.jpg',
      'src/public/pet4.jpg',
      'src/public/pet5.jpg',
      'src/public/pet6.jpg',
    ]
  },
  {
    id: 4,
    title: 'Bus Management System',
    description: 'A management system designed to efficiently organize routes, schedules, and operational data.',
    thumbnail: 'src/public/bus1.jpg',
    images: [
      'src/public/bus1.jpg',
      'src/public/bus2.jpg',
      'src/public/bus3.jpg',
      'src/public/bus4.jpg',
      'src/public/bus5.jpg',
      'src/public/bus6.jpg',
      'src/public/bus7.jpg',
      'src/public/bus8.jpg',
      'src/public/bus9.jpg',
      'src/public/bus10.jpg',
      'src/public/bus11.jpg',
      'src/public/bus12.jpg',
      'src/public/bus13.jpg',
      'src/public/bus14.jpg',
      'src/public/bus15.jpg',
      'src/public/bus16.jpg',
    ]
  },
  {
    id: 5,
    title: 'Delivery Pickup',
    description: 'Administrative panel for Delivery Pickup focused on the clear visualization of personal data and statistics.',
    thumbnail: 'src/public/dev1.jpg',
    images: [
      'src/public/dev1.jpg',
      'src/public/dev2.jpg',
      'src/public/dev3.jpg',
      'src/public/dev4.jpg',
      'src/public/dev5.jpg',
      'src/public/dev6.jpg',
      'src/public/dev7.jpg',
      'src/public/dev8.jpg',
      'src/public/dev9.jpg',
      'src/public/dev10.jpg',
      'src/public/dev11.jpg',
      'src/public/dev12.jpg',
      'src/public/dev13.jpg',
      'src/public/dev14.jpg',
      'src/public/dev15.jpg',
      'src/public/dev16.jpg',
    ]
  },
  {
    id: 6,
    title: 'Personal account Info and statics',
    description: 'User experience-focused application for intuitive management and display of personal account information and statistics.',
    thumbnail: 'src/public/acc1.jpg',
    images: [
      'src/public/acc1.jpg',
      'src/public/acc2.jpg',
      'src/public/acc3.jpg',
    ]
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-20 px-6 relative overflow-hidden">
        {/* Fondo */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Efectos de brillo */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Título */}
          <div className="flex items-center justify-center gap-3 mb-16">
            <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-white">Projects</h2>
          </div>

          {/* Grid de proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Brillo en hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-300" />
                
                {/* Tarjeta */}
                <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 transition-transform duration-300 group-hover:scale-[1.02]">
                  {/* Imagen */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay en hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    
                    {/* Icono de enlace */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-purple-600/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>

                    {/* Indicador de galería */}
                    <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-purple-500/30 text-purple-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.images.length} images
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <h3 className="text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal del carrusel */}
      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        projectTitle={selectedProject?.title || ''}
        projectDescription={selectedProject?.description || ''}
        images={selectedProject?.images || []}
      />
    </>
  );
}