import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, Code, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProjectModal } from './ProjectModal';
import type { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: 'Note Manager',
    description:
      'Implementation and accessibility of basic React components, focusing on usability and clean component structure.',
    longDescription:
      'A full-featured note-taking application built with React that demonstrates clean component architecture, state management, and accessibility best practices.',
    problem:
      'Users needed a simple yet powerful tool for managing notes with an intuitive interface that follows accessibility standards.',
    solution:
      'Built a React-based note manager with a focus on component reusability, keyboard navigation, and screen reader support.',
    features: [
      'Create, edit, and delete notes',
      'Search and filter functionality',
      'Responsive design for all devices',
      'Keyboard shortcuts for power users',
      'Dark mode support',
    ],
    lessons:
      'Deepened understanding of React component lifecycle, accessibility patterns, and the importance of semantic HTML.',
    thumbnail: 'images/note4.jpg',
    images: [
      'images/note4.jpg',
      'images/note1.jpg',
      'images/note9.jpg',
      'images/note2.jpg',
      'images/note3.jpg',
      'images/note5.jpg',
      'images/note6.jpg',
      'images/note7.jpg',
      'images/note8.jpg',
    ],
    technologies: ['React', 'TypeScript', 'CSS'],
    category: 'Frontend',
  },
  {
    id: 2,
    title: 'Assessment Test',
    description:
      'Daily assessment project based on tasks designed to strengthen problem-solving skills, logical thinking, and decision-making.',
    longDescription:
      'A structured daily assessment platform that presents challenges to sharpen problem-solving abilities and logical reasoning through hands-on tasks.',
    problem:
      'Need for a platform that provides consistent daily challenges to build problem-solving skills and track improvement over time.',
    solution:
      'Developed a task-based assessment system with progressive difficulty levels and immediate feedback mechanisms.',
    features: [
      'Daily challenges with varying difficulty',
      'Progress tracking and statistics',
      'Instant feedback on solutions',
      'Time-based assessments',
    ],
    lessons:
      'Improved understanding of algorithm design, time complexity analysis, and building educational tools.',
    thumbnail: 'images/task1.jpg',
    images: [
      'images/task1.jpg',
      'images/task2.jpg',
      'images/task3.jpg',
      'images/task4.jpg',
    ],
    technologies: ['React', 'TypeScript', 'Algorithms'],
    category: 'Problem Solving',
  },
  {
    id: 3,
    title: 'Pet Adoption App',
    description:
      'An easy-to-use app designed to simplify the pet adoption process with an intuitive and accessible interface.',
    longDescription:
      'A user-centered mobile application that streamlines the pet adoption journey, connecting shelters with potential adopters through an engaging interface.',
    problem:
      'Pet adoption processes are often fragmented and intimidating for potential adopters, reducing successful adoptions.',
    solution:
      'Created an intuitive app with a focus on emotional connection and ease of use, featuring detailed pet profiles and a simple application flow.',
    features: [
      'Browse pets with detailed profiles',
      'Filter by species, age, size',
      'Favorites list for comparing pets',
      'Direct shelter contact',
      'Adoption application tracking',
    ],
    lessons:
      'Learned about user research in emotional contexts and designing for empathy-driven experiences.',
    thumbnail: 'images/pet1.jpg',
    images: [
      'images/pet1.jpg',
      'images/pet2.jpg',
      'images/pet3.jpg',
      'images/pet4.jpg',
      'images/pet5.jpg',
      'images/pet6.jpg',
    ],
    technologies: ['React', 'Figma', 'UI Design', 'Prototyping'],
    category: 'UI/UX',
  },
  {
    id: 4,
    title: 'Bus Management System',
    description:
      'A management system designed to efficiently organize routes, schedules, and operational data.',
    longDescription:
      'A comprehensive administrative system for managing bus fleet operations, including route planning, scheduling, and real-time data visualization.',
    problem:
      'Transportation companies struggle with manual route and schedule management, leading to inefficiencies and errors.',
    solution:
      'Built a centralized management dashboard that automates route planning, schedule optimization, and provides actionable operational insights.',
    features: [
      'Route planning and optimization',
      'Schedule generation and management',
      'Driver assignment system',
      'Real-time operational dashboard',
      'Data export and reporting',
    ],
    lessons:
      'Gained experience with complex form management, data visualization, and designing for administrative workflows.',
    thumbnail: 'images/bus1.jpg',
    images: [
      'images/bus1.jpg',
      'images/bus2.jpg',
      'images/bus3.jpg',
      'images/bus4.jpg',
      'images/bus5.jpg',
      'images/bus6.jpg',
      'images/bus7.jpg',
      'images/bus8.jpg',
      'images/bus9.jpg',
      'images/bus10.jpg',
      'images/bus11.jpg',
      'images/bus12.jpg',
      'images/bus13.jpg',
      'images/bus14.jpg',
      'images/bus15.jpg',
      'images/bus16.jpg',
    ],
    technologies: ['React', 'Data Visualization', 'Dashboard'],
    category: 'Full Stack',
  },
  {
    id: 5,
    title: 'Delivery Pickup',
    description:
      'Administrative panel focused on the clear visualization of personal data and statistics.',
    longDescription:
      'An administrative control panel designed for tracking delivery operations, visualizing key metrics, and managing user data efficiently.',
    problem:
      'Delivery services needed a centralized dashboard to monitor operations, track performance metrics, and manage user information.',
    solution:
      'Developed a clean, data-rich admin panel with interactive charts, real-time updates, and intuitive data management tools.',
    features: [
      'Interactive statistics dashboard',
      'User management system',
      'Real-time delivery tracking',
      'Performance analytics',
      'Customizable data views',
    ],
    lessons:
      'Strengthened skills in data visualization libraries, responsive table design, and dashboard UX patterns.',
    thumbnail: 'images/dev1.jpg',
    images: [
      'images/dev1.jpg',
      'images/dev2.jpg',
      'images/dev3.jpg',
      'images/dev4.jpg',
      'images/dev5.jpg',
      'images/dev6.jpg',
      'images/dev7.jpg',
      'images/dev8.jpg',
      'images/dev9.jpg',
      'images/dev10.jpg',
      'images/dev11.jpg',
      'images/dev12.jpg',
      'images/dev13.jpg',
      'images/dev14.jpg',
      'images/dev15.jpg',
      'images/dev16.jpg',
    ],
    technologies: ['React', 'Charts', 'Admin Panel'],
    category: 'Full Stack',
  },
  {
    id: 6,
    title: 'Personal Account Info & Statistics',
    description:
      'User experience-focused application for intuitive management and display of personal account information.',
    longDescription:
      'A user-centric application that provides a clear and intuitive interface for managing personal accounts, viewing financial statistics, and tracking activity.',
    problem:
      'Users often find financial dashboards overwhelming and difficult to navigate, leading to poor engagement.',
    solution:
      'Designed a simplified account management experience with visual data representation and clear information hierarchy.',
    features: [
      'Account overview dashboard',
      'Transaction history with filters',
      'Visual spending analytics',
      'Profile management',
      'Security settings',
    ],
    lessons:
      'Deepened understanding of data presentation, information architecture, and designing for financial interfaces.',
    thumbnail: 'images/acc1.jpg',
    images: ['images/acc1.jpg', 'images/acc2.jpg', 'images/acc3.jpg'],
    technologies: ['React', 'UI/UX', 'Data Visualization'],
    category: 'UI/UX',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

const categoryColors: Record<string, string> = {
  Frontend: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  'UI/UX': 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  'Full Stack': 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  'Problem Solving': 'bg-amber-500/10 text-amber-300 border-amber-500/20',
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="relative py-28 px-6 overflow-hidden">
        {/* Unified background */}
        <div className="absolute inset-0 bg-[#030712]" />
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-purple-500/15 bg-purple-500/5 text-purple-300 text-sm mb-6">
              <Briefcase className="w-4 h-4" />
              Projects
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Work
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A collection of projects that showcase my skills in development,
              design, and problem-solving.
            </p>
          </motion.div>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative cursor-pointer"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500" />

                <div className="relative bg-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/10 transition-all duration-300 group-hover:border-purple-500/30 group-hover:bg-gray-900/80">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <ImageWithFallback
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${
                          categoryColors[project.category] || ''
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Image count */}
                    <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-full bg-black/50 text-purple-300/70 text-xs backdrop-blur-sm opacity-0 group-hover:opacity-100 transition">
                      {project.images.length} images
                    </div>

                    {/* View details overlay */}
                    <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/60 backdrop-blur-sm text-white text-sm translate-y-4 group-hover:translate-y-0 transition duration-300">
                        <Code className="w-4 h-4" />
                        View Details
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-purple-500/8 text-purple-300/60 text-xs border border-purple-500/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-gray-600 text-xs self-center">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProjectModal
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  );
}
