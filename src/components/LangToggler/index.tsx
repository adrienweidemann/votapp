import { useTranslation } from "react-i18next";
import { Lang } from "@definitions/global";
import { LANG } from "@configs/global";

export const LangToggler = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: Lang): void => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <button onClick={() => changeLanguage(LANG.FR)}>FR</button>
      <button onClick={() => changeLanguage(LANG.EN)}>EN</button>
    </div>
  );
};
