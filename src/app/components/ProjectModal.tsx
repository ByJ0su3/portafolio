import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Lightbulb, Target, CheckCircle2, BookOpen, ArrowUpRight } from 'lucide-react';
import Slider from 'react-slick';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Project } from '../types';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: 'slick-dots custom-dots',
    adaptiveHeight: true,
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl border border-purple-500/20 shadow-2xl shadow-purple-500/10"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero image */}
          <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
            <ImageWithFallback
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-3">
                {project.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            {/* Overview */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">Overview</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {project.longDescription}
              </p>
            </section>

            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/10">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-red-400" />
                  <h3 className="text-base font-semibold text-white">Problem</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-base font-semibold text-white">Solution</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">Key Features</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/40 border border-gray-700/30"
                  >
                    <div className="w-5 h-5 rounded-full bg-purple-500/15 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Technologies */}
            <section>
              <h3 className="text-lg font-semibold text-white mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-300 text-sm border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Image Carousel */}
            {project.images.length > 0 && (
              <section>
                <h3 className="text-lg font-semibold text-white mb-4">Gallery</h3>
                <div className="carousel-container rounded-xl overflow-hidden">
                  <Slider {...settings}>
                    {project.images.map((image, index) => (
                      <div key={index} className="outline-none">
                        <div className="relative bg-gray-800 rounded-lg overflow-hidden">
                          <ImageWithFallback
                            src={image}
                            alt={`${project.title} - Image ${index + 1}`}
                            className="w-full h-auto max-h-[60vh] object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </section>
            )}

            {/* Lessons Learned */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">
                  Lessons Learned
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed bg-gray-800/30 rounded-xl p-5 border border-gray-700/30">
                {project.lessons}
              </p>
            </section>

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-800">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 border border-gray-700/50 transition-all duration-200"
                >
                  <Github className="w-5 h-5" />
                  View Source Code
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 text-white hover:bg-purple-500 transition-all duration-200"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slick carousel custom styles */}
      <style>{`
        .carousel-container .slick-slide {
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }
        .carousel-container .slick-slide.slick-active {
          opacity: 1;
        }
        .custom-dots {
          bottom: -35px;
        }
        .custom-dots li button:before {
          color: #a855f7;
          opacity: 0.4;
          font-size: 10px;
        }
        .custom-dots li.slick-active button:before {
          color: #a855f7;
          opacity: 1;
        }
      `}</style>
    </AnimatePresence>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-purple-600/80 hover:bg-purple-600 flex items-center justify-center text-white transition-colors shadow-lg"
      aria-label="Next"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-purple-600/80 hover:bg-purple-600 flex items-center justify-center text-white transition-colors shadow-lg"
      aria-label="Previous"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}
