import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

import { Lang } from "@definitions/global";
import { LANG } from "@configs/global";

export const LangToggler = ({
  toggle,
  setToggleDropdown
}: {
  toggle: boolean;
  setToggleDropdown: Dispatch<SetStateAction<boolean>>;
}) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: Lang): void => {
    i18n.changeLanguage(lang);
  };

  const handleLangSelect = (lang: Lang): void => {
    setToggleDropdown(false);
    changeLanguage(lang);
  };

  return (
    <>
      <ul
        className={`${
          !toggle ? "hidden" : ""
        } absolute z-50 w-20 bg-white border-gray-100 list-none rounded-lg shadow-lg hover:[&>li:first-child]:rounded-t-lg hover:[&>li:last-child]:rounded-b-lg
        hover:[&>li]:bg-primary-500 hover:[&>li]:text-white`}>
        <li className="w-full">
          <button
            type="button"
            className="inline-flex w-full px-4 py-2"
            onClick={() => handleLangSelect(LANG.FR)}>
            FR
          </button>
        </li>
        <li className="w-full">
          <button
            type="button"
            className="inline-flex w-full px-4 py-2"
            onClick={() => handleLangSelect(LANG.EN)}>
            EN
          </button>
        </li>
      </ul>
    </>
  );
};
