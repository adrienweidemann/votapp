import { MainContainer } from "@components/MainContainer";
import { useTranslation } from "react-i18next";

export const Home = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <MainContainer>
      <div className="p-10">
        <p>{t("PAGE.HOME.WELCOME_TEXT")}</p>
      </div>
    </MainContainer>
  );
};
