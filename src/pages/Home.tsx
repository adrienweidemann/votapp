import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { MainContainer } from "@components/MainContainer";
import { RatingGridSet } from "@components/Form/RatingGridSet";
import { fetchRatingGrids } from "@api/rating-grids";
import { GetAll } from "@definitions/global";
import { RatingGrid } from "@definitions/models/rating-grids";

import listLogo from "/list.png";

export const Home = (): JSX.Element => {
  const { t } = useTranslation();
  const [ratingGrids, setRatingGrids] = useState<RatingGrid[]>([]);
  const [message, setMessage] = useState<string>("");
  const welcomeText: string = t("PAGE.HOME.WELCOME_TEXT");

  //const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  /*const setMessageTick = async () => {
    await setMessage((previous: string): string => `${previous}${character}`);
  };*/

  useEffect(() => {
    welcomeText.split("").map((character: string) => {
      setTimeout(function () {
        setMessage((previous: string): string => `${previous}${character}`);
      }, 1000);
    });

    fetchRatingGrids()
      .then((ratingGrids: GetAll<RatingGrid>) => {
        setRatingGrids(ratingGrids.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [welcomeText]);

  return (
    <MainContainer>
      <div className="w-full text-left py-5 md:py-10">
        <div className="group w-full p-5 text-gray-800 dark:text-gray-100 border-b border-black/10 bg-gray-50">
          <span className="w-[30px]">
            <img height={22} width={22} className="inline" src={listLogo} alt="List logo" />
          </span>
          <span aria-label={welcomeText} className="pl-2 inline">
            {message}
          </span>
        </div>

        <div className="px-5 py-5">
          <RatingGridSet ratingGrids={ratingGrids} />
        </div>
      </div>
    </MainContainer>
  );
};
