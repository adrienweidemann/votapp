import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";

const translationEN = await fetch("/locales/en/translation.json");
const translationFR = await fetch("/locales/fr/translation.json");

const resources = {
  "en-US": {
    translation: await translationEN.json()
  },
  "fr-FR": {
    translation: await translationFR.json()
  }
};

i18n
  .use(languageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en-US",

    debug: false,

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
