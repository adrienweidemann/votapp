import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { fetchRatingCriterias } from "@api/rating-criterias";
import { RatingCriteria } from "@definitions/models/rating-criteria";
import { GetAll } from "@definitions/global";
import { Rating } from "./Rating";

export const RatingGrid = (): JSX.Element => {
  const { t } = useTranslation();
  const [ratingCriterias, setRatingCriterias] = useState<JSX.Element[]>([]);

  useEffect(() => {
    fetchRatingCriterias()
      .then((results: GetAll<RatingCriteria>) => {
        const criterias: JSX.Element[] = [];

        for (const result of results.data) {
          criterias.push(
            <span
              key={result.id}
              className="grid grid-cols-2 grid-flow-col gap-4 item-center overflow-hidden	">
              <p>{t(result.label)}</p>
              <Rating />
            </span>
          );
        }

        setRatingCriterias(criterias);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [t]);

  return (
    <>
      {ratingCriterias.map((ratingCriteria) => {
        return ratingCriteria;
      })}
    </>
  );
};
