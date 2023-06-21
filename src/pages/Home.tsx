import { useState, useEffect, useRef } from "react";
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
  const [welcomeTextIndex, setWelcomeTextIndex] = useState<number>(0);
  const welcomeText: string = t("PAGE.HOME.WELCOME_TEXT");
  const welcomeTextSplitted: string[] = welcomeText.split("");
  let mustRender = useRef<boolean>(false);

  useEffect(() => {
    fetchRatingGrids()
      .then(async (ratingGrids: GetAll<RatingGrid>) => {
        setRatingGrids(ratingGrids.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [mustRender.current]);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(welcomeTextIndex);
      if (welcomeTextIndex < welcomeTextSplitted.length) {
        setMessage(
          (previous: string): string => `${previous}${welcomeTextSplitted[welcomeTextIndex]}`
        );
        setWelcomeTextIndex((previous: number): number => previous + 1);
      } else {
        mustRender.current = true;
        clearInterval(timer);
      }
    }, 15);

    return () => {
      clearInterval(timer);
    };
  }, [welcomeTextIndex]);

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

        {mustRender.current === true && (
          <div className="px-5 py-5">
            <RatingGridSet ratingGrids={ratingGrids} />
          </div>
        )}
      </div>
    </MainContainer>
  );
};
