import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import nl from '../../i18n/nl/translation.json';
import en from '../../i18n/en/translation.json';

i18n.use(initReactI18next).init({
  lng: 'nl', // Default language
  fallbackLng: 'en',
  resources: {
    nl: {
      translation: nl,
    },
    en: {
      translation: en,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
