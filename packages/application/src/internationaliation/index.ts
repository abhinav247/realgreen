/* eslint-disable no-undef */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import resources from './fallback-translation.json';
export const fallbackLocal = JSON.parse(JSON.stringify(resources));

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend:{
      loadPath: `locales/{{lng}}/{{ns}}.json`,
    },
    resources:fallbackLocal,
    whitelist:['en', 'es'],
    lng: "en",
    fallbackLng: "en",
    debug: process.env.NODE_ENV === 'development',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: '.',
    interpolation: {
      formatSeparator: ',',
    },
    react: {
      wait: true,
    },
  });

export default i18n;
