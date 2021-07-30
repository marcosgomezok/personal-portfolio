import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import global_en from './en/global.json';
import global_es from './es/global.json';

i18n
.use(initReactI18next)
  .use(LanguageDetector)
     .init({
        lng: 'es',
        interpolation: {
        escapeValue: false,
        },
        resources: {
        es:{
            global: global_es
            },
        en: {
            global: global_en
            }
        }
    });

export default i18n;