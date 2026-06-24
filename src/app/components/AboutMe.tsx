import { motion } from 'framer-motion';
import { Target, GraduationCap, Code, Palette, Zap, Globe2, Rocket } from 'lucide-react';

const facts = [
  { icon: GraduationCap, label: 'ITLA Graduate', sub: 'Software Development' },
  { icon: Code, label: 'Frontend Developer', sub: 'React · TypeScript' },
  { icon: Palette, label: 'UI/UX Designer', sub: 'Figma · Prototyping' },
  { icon: Zap, label: 'Full Stack Enthusiast', sub: 'APIs · Databases' },
  { icon: Globe2, label: 'Dominican Republic', sub: 'Open to remote work' },
  { icon: Rocket, label: 'Open to Opportunities', sub: 'Junior · Freelance · Full-time' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export function AboutMe() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">


      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-purple-500/15 bg-purple-500/5 text-purple-300 text-sm mb-6">
            <Target className="w-4 h-4" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Who I Am
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A Software Development graduate with a passion for building digital
            experiences that make a real impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Bio card */}
          <motion.div
            className="lg:col-span-3 group relative"
            variants={itemVariants}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/40 to-purple-400/20 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
            <div className="relative h-full bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-purple-500/15">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Software Development Graduate
                <br />
                <span className="text-purple-300 text-xl font-normal">
                  Frontend Developer & UI/UX Designer
                </span>
              </h3>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hi! I'm Josue, a Software Development graduate from ITLA with
                  hands-on experience in frontend development, UI/UX design, and
                  full stack concepts. I specialize in building intuitive,
                  user-centered digital solutions using modern technologies like
                  React, TypeScript, and Figma.
                </p>
                <p>
                  My approach combines technical precision with design thinking
                  — I don't just write code, I craft experiences. Whether it's a
                  responsive web app, a UI prototype, or an API integration, I
                  focus on solving real problems with clean, maintainable
                  solutions.
                </p>
                <p>
                  I'm currently seeking junior developer, freelance, and
                  full-time opportunities where I can contribute, learn, and
                  grow alongside experienced professionals.
                </p>
              </div>

              {/* Decorative line */}
              <div className="mt-8 h-0.5 w-20 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
            </div>
          </motion.div>

          {/* Quick facts */}
          <motion.div className="lg:col-span-2 space-y-4" variants={itemVariants}>
            {facts.map((fact) => (
              <motion.div
                key={fact.label}
                className="group relative"
                variants={itemVariants}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-300" />
                <div className="relative flex items-center gap-4 bg-gray-900/40 border border-purple-500/10 rounded-xl p-4 hover:border-purple-500/25 transition-all duration-300 hover:bg-gray-900/60">
                  <div className="w-11 h-11 rounded-lg bg-purple-600/15 flex items-center justify-center text-purple-400 shrink-0">
                    <fact.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{fact.label}</p>
                    <p className="text-gray-500 text-xs">{fact.sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
