import { motion } from 'framer-motion';
import {
  Code2,
  Palette,
  Server,
  Wrench,
  Brain,
  FileSpreadsheet,
  Sparkles,
} from 'lucide-react';

interface Skill {
  name: string;
}

interface SkillCategory {
  icon: React.ElementType;
  title: string;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: Code2,
    title: 'Frontend Development',
    color: 'purple',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'React' },
    ],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    color: 'pink',
    skills: [
      { name: 'Figma' },
      { name: 'Wireframing' },
      { name: 'Prototyping' },
      { name: 'User Interface Design' },
      { name: 'User Experience Design' },
    ],
  },
  {
    icon: Server,
    title: 'Backend & Development',
    color: 'blue',
    skills: [
      { name: 'API Integration' },
      { name: 'Authentication Systems' },
      { name: 'Database Management' },
      { name: 'Full Stack Concepts' },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools',
    color: 'green',
    skills: [
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Git' },
    ],
  },
  {
    icon: Brain,
    title: 'Professional Skills',
    color: 'yellow',
    skills: [
      { name: 'Problem Solving' },
      { name: 'Teamwork' },
      { name: 'Adaptability' },
      { name: 'Communication' },
      { name: 'Continuous Learning' },
    ],
  },
  {
    icon: FileSpreadsheet,
    title: 'Administrative & Data',
    color: 'cyan',
    skills: [
      { name: 'Data Entry' },
      { name: 'Information Organization' },
      { name: 'Digital Documentation' },
      { name: 'Administrative Support' },
    ],
  },
];

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const colorMap: Record<string, { border: string; bg: string; text: string; glow: string }> = {
  purple: { border: 'border-purple-500/20', bg: 'bg-purple-500/10', text: 'text-purple-300', glow: 'shadow-purple-500/10' },
  pink: { border: 'border-pink-500/20', bg: 'bg-pink-500/10', text: 'text-pink-300', glow: 'shadow-pink-500/10' },
  blue: { border: 'border-blue-500/20', bg: 'bg-blue-500/10', text: 'text-blue-300', glow: 'shadow-blue-500/10' },
  green: { border: 'border-emerald-500/20', bg: 'bg-emerald-500/10', text: 'text-emerald-300', glow: 'shadow-emerald-500/10' },
  yellow: { border: 'border-amber-500/20', bg: 'bg-amber-500/10', text: 'text-amber-300', glow: 'shadow-amber-500/10' },
  cyan: { border: 'border-cyan-500/20', bg: 'bg-cyan-500/10', text: 'text-cyan-300', glow: 'shadow-cyan-500/10' },
};

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden">
      {/* Unified background */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-purple-500/15 bg-purple-500/5 text-purple-300 text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Skills & Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What I Bring
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A diverse skill set spanning development, design, and digital
            management.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const colors = colorMap[category.color];
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                className="group relative"
                custom={index}
                variants={categoryVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r from-${category.color}-600/30 to-${category.color}-400/10 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500`}
                />
                <div
                  className={`relative h-full bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border ${colors.border} transition-all duration-300 hover:bg-gray-900/70`}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center ${colors.text}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-white font-semibold text-base">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1.5 rounded-lg bg-gray-800/60 border border-gray-700/50 text-gray-300 text-sm hover:border-purple-500/30 hover:text-purple-200 transition-all duration-200"
                      >
                        {skill.name}
                      </span>
                    ))}
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
