import { RatingGrid } from "@definitions/models/rating-grids";

export interface RatingCriteria {
  id: number;
  label: string;
}

export interface RatingCriteriaResult {
  id: number;
  rating: number;
  ratingCriteria: RatingCriteria;
  ratingGrid: RatingGrid;
}
