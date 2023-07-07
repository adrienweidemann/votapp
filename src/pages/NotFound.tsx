import { useTranslation } from "react-i18next";

export const NotFound = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-white p-20">{t("PAGE.NOT_FOUND.TEXT")}</p>
    </>
  );
};
