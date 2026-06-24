import { useThemeLang } from './ThemeLangProvider';
import { labels } from './i18n';
import { Sun, Moon, Globe, Languages } from 'lucide-react';

export function ControlsBar() {
  const { lang, theme, toggleLang, toggleTheme } = useThemeLang();
  const t = labels[lang];

  return (
    <div className="fixed z-50 top-4 right-4 flex items-center gap-2">
      <button
        type="button"
        onClick={toggleTheme}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-900/60 border border-purple-500/15 text-gray-200 hover:bg-gray-900/80 transition-all duration-200 backdrop-blur-sm"
        aria-label={t.themeLabel}
        title={t.themeLabel}
      >
        {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
      </button>

      <button
        type="button"
        onClick={toggleLang}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-900/60 border border-purple-500/15 text-gray-200 hover:bg-gray-900/80 transition-all duration-200 backdrop-blur-sm"
        aria-label={t.langLabel}
        title={t.langLabel}
      >
        <Globe className="w-4 h-4" />
        <span className="text-xs font-medium">{lang === 'en' ? 'EN' : 'ES'}</span>
      </button>
    </div>
  );
}

