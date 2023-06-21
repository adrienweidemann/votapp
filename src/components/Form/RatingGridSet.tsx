import { RatingGrid } from "@components/Form/RatingGrid";
import { shuffleArray } from "@helpers/array.helper";
import { RatingGrid as RatingGridType } from "@definitions/models/rating-grids";

export const RatingGridSet = ({ ratingGrids }: { ratingGrids: RatingGridType[] }): JSX.Element => {
  const shuffleRatingGrids: RatingGridType[] = shuffleArray<RatingGridType>(ratingGrids);

  const renderGridsSet = (): JSX.Element[] => {
    const grids: JSX.Element[] = [];

    for (const ratingGrid of shuffleRatingGrids) {
      grids.push(
        <div key={ratingGrid.id}>
          <p className="uppercase font-bold text-primary-500">{ratingGrid.label}</p>
          <RatingGrid />
        </div>
      );
    }

    return grids;
  };

  return <>{renderGridsSet()}</>;
};
