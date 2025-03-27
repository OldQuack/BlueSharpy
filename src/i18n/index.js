import { createI18n } from 'vue-i18n';
import ptPT from './locales/pt-PT.json';
import enGB from './locales/en-GB.json';
import esES from './locales/es-ES.json';

const i18n = createI18n({
  legacy: false,
  locale: navigator.language || 'pt-PT', 
  fallbackLocale: 'pt-PT',
  messages: { 'en-GB': enGB, 'es-ES': esES, 'pt-PT': ptPT },
});

export default i18n;
