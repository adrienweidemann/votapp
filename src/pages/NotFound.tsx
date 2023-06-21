import { useTranslation } from "react-i18next";

export const NotFound = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-white">{t("PAGES.NOT_FOUND.TEXT")}</p>
    </>
  );
};
