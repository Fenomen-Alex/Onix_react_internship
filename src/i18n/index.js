import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

import LanguageDetector from 'i18next-browser-languagedetector';
import { ru } from './ru';
import { en } from './en';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru,
      en,
    },
    debug: true,
    detection: {
      order: ['localStorage', 'cookie'],
      cache: ['cookie']
    },
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
