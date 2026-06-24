import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, Smartphone } from 'lucide-react';

interface Experience {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  tags?: string[];
}

const experiences: Experience[] = [
  {
    role: 'UI/UX Developer (Expo / React Native)',
    company: 'Starsisa',
    period: 'Jun 2025 - Sep 2025',
    responsibilities: [
      'Designed modern and functional user interfaces using Figma',
      'Developed mobile applications with Expo (React Native)',
      'Improved user experience across digital products',
      'Organized and structured digital content',
      'Applied usability principles and best practices',
      'Collaborated on digital product improvements',
    ],
    tags: ['UI Design', 'UX', 'Expo', 'React Native', 'Figma', 'Prototyping'],
  },
  {
    role: 'Data Entry Specialist',
    company: "D' Pimentel Center",
    period: '2023 - 2024',
    responsibilities: [
      'Managed and organized digital information',
      'Processed large amounts of data efficiently',
      'Supported administrative operations',
      'Assisted with technology-related tasks',
      'Ensured data accuracy and integrity',
    ],
    tags: ['Data Entry', 'Documentation', 'Administration'],
  },
];

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden">
      {/* Unified background */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto">
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
            Experience
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Where I've Worked
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Professional experience that has shaped my skills and approach to
            building digital solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="relative pl-10 md:pl-20 pb-16 last:pb-0"
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-8 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600 border-4 border-[#030712] shadow-lg shadow-purple-600/30 z-10" />

              {/* Card */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-purple-400/10 rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-purple-300 text-sm mb-1">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white">
                        {exp.role}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm shrink-0">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Tags */}
                  {exp.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300/80 text-xs border border-purple-500/15"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Responsibilities */}
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-gray-400 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400/50 mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
