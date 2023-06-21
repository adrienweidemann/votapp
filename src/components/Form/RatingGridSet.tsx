import { FormProvider, useForm } from "react-hook-form";

import { RatingGrid } from "@components/Form/RatingGrid";
import { shuffleArray } from "@helpers/array.helper";
import { RatingGrid as RatingGridType } from "@definitions/models/rating-grids";

export const RatingGridSet = ({ ratingGrids }: { ratingGrids: RatingGridType[] }): JSX.Element => {
  const methods = useForm({ mode: "onChange" });
  const shuffleRatingGrids: RatingGridType[] = shuffleArray<RatingGridType>(ratingGrids);

  const onSubmit = async (_data: unknown): Promise<void> => {
    console.log(_data);
  };

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

  return (
    <FormProvider {...methods}>
      <form className="space-y-6" onSubmit={methods.handleSubmit(onSubmit)}>
        {renderGridsSet()}
      </form>
    </FormProvider>
  );
};
