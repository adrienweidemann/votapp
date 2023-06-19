import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { MainContainer } from "@components/MainContainer";
import { RatingGridSet } from "@components/Form/RatingGridSet";
import { fetchRatingGrids } from "@api/rating-grids";
import { GetAll } from "@definitions/global";
import { RatingGrid } from "@definitions/models/rating-grids";

export const Home = (): JSX.Element => {
  const { t } = useTranslation();
  const [ratingGrids, setRatingGrids] = useState<RatingGrid[]>([]);

  useEffect(() => {
    fetchRatingGrids()
      .then((ratingGrids: GetAll<RatingGrid>) => {
        setRatingGrids(ratingGrids.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <MainContainer>
      <div className="text-left py-5 md:py-10 md:px-20">
        <p className="py-5">{t("PAGE.HOME.WELCOME_TEXT")}</p>

        <RatingGridSet ratingGrids={ratingGrids} />
      </div>
    </MainContainer>
  );
};
