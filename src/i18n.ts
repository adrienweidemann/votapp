import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "@root/locales/en/translation.json";
import translationFR from "@root/locales/fr/translation.json";

const resources = {
  "en-US": {
    translation: translationEN
  },
  "fr-FR": {
    translation: translationFR
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr-FR",

    debug: false,

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
