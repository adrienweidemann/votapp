import { useTranslation } from "react-i18next";

export const Thanks = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center w-full">
      <p className="text-white py-20">{t("PAGE.THANKS.TEXT")}</p>
    </div>
  );
};
