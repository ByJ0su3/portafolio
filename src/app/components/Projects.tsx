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
    description:
      'Implementation and accessibility of basic React components, focusing on usability and clean component structure.',
    thumbnail: '/images/note4.jpg',
    images: [
      '/images/note4.jpg',
      '/images/note1.jpg',
      '/images/note9.jpg',
      '/images/note2.jpg',
      '/images/note3.jpg',
      '/images/note5.jpg',
      '/images/note6.jpg',
      '/images/note7.jpg',
      '/images/note8.jpg'
    ]
  },
  {
    id: 2,
    title: 'Assessment Test (Improving My Skills)',
    description:
      'Daily assessment project based on tasks designed to strengthen problem-solving skills, logical thinking, and decision-making.',
    thumbnail: '/images/task1.jpg',
    images: ['/images/task1.jpg', '/images/task2.jpg', '/images/task3.jpg', '/images/task4.jpg']
  },
  {
    id: 3,
    title: 'Pet Adoption App',
    description:
      'An easy-to-use app designed to simplify the pet adoption process with an intuitive and accessible interface.',
    thumbnail: '/images/pet1.jpg',
    images: ['/images/pet1.jpg', '/images/pet2.jpg', '/images/pet3.jpg', '/images/pet4.jpg', '/images/pet5.jpg', '/images/pet6.jpg']
  },
  {
    id: 4,
    title: 'Bus Management System',
    description:
      'A management system designed to efficiently organize routes, schedules, and operational data.',
    thumbnail: '/images/bus1.jpg',
    images: [
      '/images/bus1.jpg','/images/bus2.jpg','/images/bus3.jpg','/images/bus4.jpg','/images/bus5.jpg','/images/bus6.jpg',
      '/images/bus7.jpg','/images/bus8.jpg','/images/bus9.jpg','/images/bus10.jpg','/images/bus11.jpg','/images/bus12.jpg',
      '/images/bus13.jpg','/images/bus14.jpg','/images/bus15.jpg','/images/bus16.jpg'
    ]
  },
  {
    id: 5,
    title: 'Delivery Pickup',
    description:
      'Administrative panel focused on the clear visualization of personal data and statistics.',
    thumbnail: '/images/dev1.jpg',
    images: [
      '/images/dev1.jpg','/images/dev2.jpg','/images/dev3.jpg','/images/dev4.jpg','/images/dev5.jpg','/images/dev6.jpg',
      '/images/dev7.jpg','/images/dev8.jpg','/images/dev9.jpg','/images/dev10.jpg','/images/dev11.jpg','/images/dev12.jpg',
      '/images/dev13.jpg','/images/dev14.jpg','/images/dev15.jpg','/images/dev16.jpg'
    ]
  },
  {
    id: 6,
    title: 'Personal account Info and statics',
    description:
      'User experience-focused application for intuitive management and display of personal account.',
    thumbnail: '/images/acc1.jpg',
    images: ['/images/acc1.jpg','/images/acc2.jpg','/images/acc3.jpg']
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-16">
            <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-white">Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div
                key={project.id}
                className="group relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl blur opacity-0 group-hover:opacity-75 transition" />

                <div className="relative bg-gray-900/80 rounded-2xl overflow-hidden border border-purple-500/20 group-hover:scale-[1.02] transition">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-purple-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>

                    <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/60 text-purple-300 text-sm opacity-0 group-hover:opacity-100 transition">
                      {project.images.length} images
                    </div>
                  </div>

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

      <ProjectModal
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        projectTitle={selectedProject?.title ?? ''}
        projectDescription={selectedProject?.description ?? ''}
        images={selectedProject?.images ?? []}
      />
    </>
  );
}
