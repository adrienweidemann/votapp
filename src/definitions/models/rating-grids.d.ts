export interface RatingGrid {
  id: number;
  label: string;
  icon1: string;
  icon2: string;
}

export interface RatingCriteriaRating {
  ratingCriteriaId: number;
  rating: number;
}

export type RatingGridRating = { ratingGridId: number; ratings: RatingCriteriaRating[] };
