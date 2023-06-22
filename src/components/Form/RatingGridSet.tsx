import { RatingGrid } from "@components/Form/RatingGrid";
import { shuffleArray } from "@helpers/array.helper";
import { RatingGrid as RatingGridType } from "@definitions/models/rating-grids";

import chatbotLogo from "/chatbot.png";

const getLogo = (name: string) => {
  switch (name) {
    case "sun":
      break;
    default:
      return chatbotLogo;
  }
};

export const RatingGridSet = ({ ratingGrids }: { ratingGrids: RatingGridType[] }): JSX.Element => {
  const shuffleRatingGrids: RatingGridType[] = shuffleArray<RatingGridType>(ratingGrids);

  const renderGridsSet = (): JSX.Element[] => {
    const grids: JSX.Element[] = [];

    for (const ratingGrid of shuffleRatingGrids) {
      grids.push(
        <div key={ratingGrid.id} className="py-3">
          <p className="uppercase font-bold text-primary-400">
            <img
              height={44}
              width={44}
              className="inline"
              src={getLogo(ratingGrid.icon1)}
              alt="List logo"
            />
            <span className="inline-block align-text-top">{ratingGrid.label}</span>
            <img
              height={44}
              width={44}
              className="inline"
              src={getLogo(ratingGrid.icon2)}
              alt="List logo"
            />
          </p>
          <RatingGrid ratingGridId={ratingGrid.id} />
        </div>
      );
    }

    return grids;
  };

  return <>{renderGridsSet()}</>;
};
