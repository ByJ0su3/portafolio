import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 overflow-hidden">
      {/* Unified background */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-purple-600/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-2">
              Josue<span className="text-purple-400"> Domínguez</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Software Development Graduate · Frontend Developer · UI/UX Designer
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-1">
            <h4 className="text-gray-400 text-sm font-medium mb-3">
              Sections
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {['About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'].map(
                (section) => (
                  <a
                    key={section}
                    href={`#${section.toLowerCase()}`}
                    className="text-gray-600 hover:text-purple-400 text-sm transition-colors duration-200"
                  >
                    {section}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Social */}
          <div className="md:col-span-1">
            <h4 className="text-gray-400 text-sm font-medium mb-3">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/ByJ0su3?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-purple-600/20 hover:text-purple-400 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/josue-manuel-dom%C3%ADnguez-de-la-cruz-/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-purple-600/20 hover:text-purple-400 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/by_j0su3/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-purple-600/20 hover:text-purple-400 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-6" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm text-center sm:text-left">
            &copy; {currentYear} Josue Manuel Domínguez de la Cruz. All rights
            reserved.
          </p>
          <p className="text-gray-700 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-purple-400" /> using React
            & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
