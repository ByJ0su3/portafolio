import { motion } from 'framer-motion';
import { ArrowDown, Download, Eye, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useThemeLang } from '../ThemeLangProvider';
import { labels } from '../i18n';
import { getResumeHref } from '../resume';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const { lang } = useThemeLang();
  const t = labels[lang];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Unified dark background */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Large ambient purple glows */}
      <div className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-700/5 rounded-full blur-[150px]" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile image with premium glow */}
        <motion.div className="mb-10 flex justify-center" variants={itemVariants}>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-all duration-700 group-hover:scale-110" />
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-300 rounded-full blur-lg opacity-80" />
            <div className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-purple-500/40 shadow-2xl shadow-purple-600/30">
              <ImageWithFallback
                src="me.png"
                alt="Josue Manuel Domínguez de la Cruz"
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
              />
            </div>
            {/* Status dot */}
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-emerald-500 rounded-full border-2 border-[#030712] shadow-lg shadow-emerald-500/50">
              <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-50" />
            </div>
          </div>
        </motion.div>

        {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-300 text-sm mb-8"
            variants={itemVariants}
          >
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            {t.openToOpportunities}
          </motion.div>


        {/* Name */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
            Josue Manuel
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-white bg-clip-text text-transparent">
            Domínguez de la Cruz
          </span>
        </motion.h1>

        {/* Professional title */}
        <motion.div
          className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6"
          variants={itemVariants}
        >
          {[
            'Software Development Graduate',
            'Frontend Developer',
            'UI/UX Designer',
          ].map((title) => (
            <span
              key={title}
              className="text-lg sm:text-xl text-purple-200/80 font-light"
            >
              {title}
            </span>
          ))}
        </motion.div>

        {/* Introduction */}
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed"
          variants={itemVariants}
        >
          Software Development graduate passionate about creating exceptional
          digital experiences. I combine frontend development with UI/UX design
          to build intuitive, user-centered solutions that solve real-world
          problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={itemVariants}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 active:scale-[1.02]"
          >
            <Eye className="w-5 h-5" />
            {t.viewProjects}

            <ArrowDown className="w-4 h-4 group-hover:animate-bounce" />
          </button>

          <a
            href={getResumeHref(lang)}
            download
            className="group inline-flex items-center gap-2 px-8 py-3.5 border border-purple-500/30 text-purple-300 rounded-xl font-medium transition-all duration-300 hover:bg-purple-500/10 hover:border-purple-400/50 hover:text-purple-200 hover:scale-105 active:scale-[1.02]"
            aria-label={t.downloadResume}
          >
            <Download className="w-5 h-5" />
            {t.downloadResume}
          </a>


          <button
            onClick={() => scrollToSection('contact')}
            className="group inline-flex items-center gap-2 px-8 py-3.5 border border-gray-700 text-gray-300 rounded-xl font-medium transition-all duration-300 hover:bg-gray-800 hover:border-gray-600 hover:text-white hover:scale-105 active:scale-[1.02]"
          >
            <MessageCircle className="w-5 h-5" />
            {t.contactMe}
          </button>
        </motion.div>

        {/* Scroll indicator — positioned lower */}
        <motion.div
          className="absolute bottom-2 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <div className="flex flex-col items-center gap-1.5 text-gray-600">
            <span className="text-[10px] tracking-[0.15em] uppercase">{t.scroll}</span>

            <div className="w-3.5 h-6 border-2 border-gray-700 rounded-full flex justify-center">
              <div className="w-1 h-1.5 bg-purple-400/60 rounded-full mt-1.5 animate-bounce" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
