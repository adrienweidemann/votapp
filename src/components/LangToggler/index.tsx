import { useTranslation } from "react-i18next";
import { Lang } from "@definitions/global";
import { LANG } from "@configs/global";

export const LangToggler = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: Lang): void => {
    i18n.changeLanguage(lang);
  };

  return (
    <ul className="absolute w-full py-2 text-sm text-primary-500">
      <li className="block leading-3 px-4 py-2 hover:bg-gray-100">
        <button type="button" onClick={() => changeLanguage(LANG.FR)}>
          FR
        </button>
      </li>
      <li className="block leading-3 px-4 py-2 hover:bg-gray-100">
        <button type="button" onClick={() => changeLanguage(LANG.EN)}>
          EN
        </button>
      </li>
    </ul>
  );
};
