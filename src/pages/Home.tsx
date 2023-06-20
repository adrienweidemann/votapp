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
  console.log("message:", message);

  const [welcomeTextIndex, setWelcomeTextIndex] = useState<number>(0);
  const welcomeText: string = t("PAGE.HOME.WELCOME_TEXT");
  const welcomeTextSplitted: string[] = welcomeText.split("");

  useEffect(() => {
    const timer = setInterval(() => {
      if (welcomeTextIndex < welcomeTextSplitted.length) {
        setMessage((prevText) => prevText + welcomeTextSplitted[welcomeTextIndex]);
        setWelcomeTextIndex((prevMessageIndex) => prevMessageIndex + 1);
      } else {
        clearInterval(timer);
      }

      //  la vitesse ici
    }, 100);
    // obliger de clean sinon probleme de perf car on a un setinterval qui tourne en boucle (s'accumule) à chaque render
    return () => clearInterval(timer);
  }, [welcomeTextIndex, welcomeTextSplitted]);

  useEffect(() => {
    fetchRatingGrids()
      .then((ratingGrids: GetAll<RatingGrid>) => {
        setRatingGrids(ratingGrids.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       if (welcomeTextIndex === welcomeTextSplitted.length) {
  //         clearInterval(timer);
  //       } else {
  //         setMessage((previous: string): string => previous + welcomeTextSplitted[welcomeTextIndex]);
  //         setWelcomeTextIndex((previous: number): number => previous++);
  //       }
  //     }, 500);

  //     fetchRatingGrids()
  //       .then((ratingGrids: GetAll<RatingGrid>) => {
  //         setRatingGrids(ratingGrids.data);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   }, [welcomeTextIndex, welcomeTextSplitted]);

  return (
    <MainContainer>
      <div className="w-full text-left py-5 md:py-10">
        <div className="group w-full p-5 text-gray-800 border-b border-black/10 bg-gray-50">
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
