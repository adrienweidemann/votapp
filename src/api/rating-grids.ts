import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

import { HTTP_REQUEST_HEADERS } from "@configs/global";
import { GetAll } from "@definitions/global";
import { RatingGrid, RatingCriteriaRating } from "@definitions/models/rating-grids";

const instance = axios.create();
const mock = new AxiosMockAdapter(instance);

mock.onGet("/rating-grids").reply<GetAll<RatingGrid>>(200, {
  count: 5,
  data: [
    { id: 1, label: "team1" },
    { id: 2, label: "team2" },
    { id: 3, label: "team3" },
    { id: 4, label: "team4" },
    { id: 5, label: "team5" }
  ]
});

mock.onPost("/rating-grids/:id/ratings").reply<RatingCriteriaRating[]>(200, [
  { ratingCriteriaId: 1, rating: 5 },
  { ratingCriteriaId: 2, rating: 5 },
  { ratingCriteriaId: 3, rating: 5 },
  { ratingCriteriaId: 4, rating: 5 },
  { ratingCriteriaId: 5, rating: 5 }
]);

export const fetchRatingGrids = async (): Promise<GetAll<RatingGrid>> => {
  try {
    const { data } = await instance.get<GetAll<RatingGrid>>("/rating-grids", {
      headers: HTTP_REQUEST_HEADERS
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("error message: ", error.message);
    } else {
      console.error("unexpected error: ", error);
    }

    throw error;
  }
};

export const postRatingGridRatings = async (
  id: number,
  ratings: RatingCriteriaRating[]
): Promise<RatingCriteriaRating[]> => {
  try {
    const { data } = await instance.post<RatingCriteriaRating[]>(
      `/rating-grids/${id}/ratings`,
      ratings,
      {
        headers: HTTP_REQUEST_HEADERS
      }
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("error message: ", error.message);
    } else {
      console.error("unexpected error: ", error);
    }

    throw error;
  }
};
