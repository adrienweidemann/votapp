import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { fetchRatingCriterias } from "@api/rating-criterias";
import { RatingCriteria } from "@definitions/models/rating-criteria";
import { GetAll } from "@definitions/global";
import { Rating } from "./Rating";

export const RatingGrid = ({ ratingGridId }: { ratingGridId: number }): JSX.Element => {
  const { t } = useTranslation();
  const [ratingCriterias, setRatingCriterias] = useState<JSX.Element[]>([]);

  useEffect(() => {
    fetchRatingCriterias()
      .then((ratingCriterias: GetAll<RatingCriteria>) => {
        const criterias: JSX.Element[] = [];

        for (const ratingCriteria of ratingCriterias.data) {
          criterias.push(
            <Fragment key={ratingCriteria.id}>
              <p className="text-white py-5 md:py-0">{t(ratingCriteria.label)}</p>
              <Rating ratingGridId={ratingGridId} ratingCriteriaId={ratingCriteria.id} />
            </Fragment>
          );
        }

        setRatingCriterias(criterias);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [t, ratingGridId]);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-[max-content_auto] gap-x-4 item-center">
      {ratingCriterias.map((ratingCriteria) => {
        return ratingCriteria;
      })}
    </div>
  );
};
