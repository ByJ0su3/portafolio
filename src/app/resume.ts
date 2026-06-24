import { resumeFiles } from './i18n';
import type { Lang } from './i18n';

export function getResumeHref(lang: Lang) {
  return lang === 'es' ? resumeFiles.es : resumeFiles.en;
}

