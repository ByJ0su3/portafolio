import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, ImageIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Education {
  degree: string;
  institution: string;
  period: string;
  status: string;
  description: string;
  icon: React.ElementType;
  tags?: string[];
  certificate?: string;
}

const educationList: Education[] = [
  {
    degree: 'Software Development Technologist',
    institution: 'ITLA (Instituto Tecnológico de Las Américas)',
    period: '2023 - 2025',
    status: 'Graduated',
    description:
      'Comprehensive program covering software development, programming fundamentals, web technologies, database management, and system design.',
    icon: GraduationCap,
    tags: ['Software Development', 'Web Technologies', 'Databases'],
    certificate: 'images/certificates/certificate_itla.jpg',
  },
  {
    degree: 'Full Stack Web Development',
    institution: 'INFOTEP',
    period: 'Certified',
    status: 'Completed',
    description:
      'Professional certification in Full Stack development covering frontend and backend technologies, API development, and modern web frameworks.',
    icon: Award,
    tags: ['Full Stack', 'Frontend', 'Backend', 'APIs'],
    certificate: 'images/certificates/certificate_infotep.jpg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' as const },
  }),
};

export function Education() {
  return (
    <section id="education" className="relative py-28 px-6 overflow-hidden">
      {/* Unified background */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-purple-500/15 bg-purple-500/5 text-purple-300 text-sm mb-6">
            <BookOpen className="w-4 h-4" />
            Education
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My Learning Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Formal education and certifications that provide the foundation for
            my technical expertise.
          </p>
        </motion.div>

        {/* Education cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {educationList.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.degree}
                className="group relative"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-purple-400/10 rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500" />
                <div className="relative h-full bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-purple-600/15 flex items-center justify-center text-purple-400 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-purple-300/70 text-sm">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.institution}
                      </div>
                    </div>
                  </div>

                  {/* Status & Period */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'Graduated'
                          ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                          : edu.status === 'In Progress'
                          ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                          : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                      }`}
                    >
                      {edu.status}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-xs">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  {/* Tags */}
                  {edu.tags && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {edu.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-gray-800/60 text-gray-400 text-xs border border-gray-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Certificate image placeholder */}
                  <div className="rounded-xl overflow-hidden border border-dashed border-gray-700/60 bg-gray-800/30">
                    {edu.certificate ? (
                      <ImageWithFallback
                        src={edu.certificate}
                        alt={`${edu.degree} Certificate`}
                        className="w-full h-auto object-contain"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center py-8 px-4 text-gray-600">
                        <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
                        <p className="text-xs text-center">
                          Certificate image
                        </p>
                        <p className="text-[10px] text-gray-700 mt-1">
                          Add file to public/images/certificates/
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
