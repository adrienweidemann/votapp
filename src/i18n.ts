import { initReactI18next } from "react-i18next";
import i18n from "i18next";

const translationEN = await fetch("/locales/en/translation.json");
const translationFR = await fetch("/locales/fr/translation.json");

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false,

    debug: true,

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
