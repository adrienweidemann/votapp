export interface RatingGrid {
  id: number;
  label: string;
}

export interface RatingCriteriaRating {
  ratingCriteriaId: number;
  rating: number;
}

export type RatingGridRating = { ratingGridId: number; ratings: RatingCriteriaRating[] };
