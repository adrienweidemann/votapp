import { Fragment, useEffect, useState } from "react";
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
            <Fragment key={result.id}>
              <p>{t(result.label)}</p>
              <Rating />
            </Fragment>
          );
        }

        setRatingCriterias(criterias);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [t]);

  return (
    <div className="grid grid-cols-[max-content_auto] gap-x-4 item-center">
      {ratingCriterias.map((ratingCriteria) => {
        return ratingCriteria;
      })}
    </div>
  );
};
