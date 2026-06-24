import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Lang, Theme } from './i18n';
import { DEFAULT_LANG, DEFAULT_THEME } from './i18n';

type Ctx = {
  lang: Lang;
  theme: Theme;
  setLang: (l: Lang) => void;
  setTheme: (t: Theme) => void;
  toggleLang: () => void;
  toggleTheme: () => void;
};

const ThemeLangContext = createContext<Ctx | null>(null);

export function useThemeLang() {
  const ctx = useContext(ThemeLangContext);
  if (!ctx) throw new Error('useThemeLang must be used within ThemeLangProvider');
  return ctx;
}

export function ThemeLangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    const storedLang = window.localStorage.getItem('lang');
    const storedTheme = window.localStorage.getItem('theme');
    if (storedLang === 'en' || storedLang === 'es') setLang(storedLang);
    if (storedTheme === 'light' || storedTheme === 'dark') setTheme(storedTheme);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('lang', lang);
  }, [lang]);

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
    // Tailwind dark mode: add/remove class on html
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      theme,
      setLang,
      setTheme,
      toggleLang: () => setLang((prev) => (prev === 'en' ? 'es' : 'en')),
      toggleTheme: () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
    }),
    [lang, theme]
  );

  return <ThemeLangContext.Provider value={value}>{children}</ThemeLangContext.Provider>;
}

