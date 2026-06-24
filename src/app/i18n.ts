export type Lang = 'en' | 'es';
export type Theme = 'light' | 'dark';

export const DEFAULT_LANG: Lang = 'en';
export const DEFAULT_THEME: Theme = 'dark';

export const resumeFiles = {
  en: '/resume_en.pdf',
  es: '/resume_es.pdf',
} as const;

export const labels = {
  en: {
    themeLabel: 'Theme',
    langLabel: 'Language',
    downloadResume: 'Download Resume',
    downloadResumeHint: 'Choose language',
    viewProjects: 'View Projects',
    contactMe: 'Contact Me',
    scroll: 'Scroll',
    openToOpportunities: 'Open to opportunities',
  },
  es: {
    themeLabel: 'Tema',
    langLabel: 'Idioma',
    downloadResume: 'Descargar CV',
    downloadResumeHint: 'Elige idioma',
    viewProjects: 'Ver Proyectos',
    contactMe: 'Contáctame',
    scroll: 'Desliza',
    openToOpportunities: 'Abierto a oportunidades',
  },
} as const;

