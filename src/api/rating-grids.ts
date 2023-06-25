import axios from "axios";

import { HTTP_REQUEST_HEADERS } from "@configs/global";
import { GetAll } from "@definitions/global";
import { RatingGrid, RatingCriteriaRating } from "@definitions/models/rating-grids";
import { RatingCriteriaResult } from "@definitions/models/rating-criteria";
import { AuthenticatedUser } from "@definitions/models/user";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: HTTP_REQUEST_HEADERS
});

const wait = (timeout?: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const fetchRatingGrids = async (
  user: AuthenticatedUser | null
): Promise<GetAll<RatingGrid>> => {
  try {
    await wait(2000);
    const { data } = await instance.get<GetAll<RatingGrid>>("/rating-grids", {
      headers: { ...instance.defaults.headers.common, Authorization: `Bearer ${user?.token}` }
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
  user: AuthenticatedUser | null,
  id: number,
  ratings: RatingCriteriaRating[]
): Promise<RatingCriteriaRating[]> => {
  try {
    const { data } = await instance.post<RatingCriteriaRating[]>(
      `/rating-grids/${id}/ratings`,
      ratings,
      {
        headers: { ...instance.defaults.headers.common, Authorization: `Bearer ${user?.token}` }
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

export const fetchRatingGridsResults = async (
  user: AuthenticatedUser | null
): Promise<GetAll<RatingCriteriaResult>> => {
  try {
    const { data } = await instance.get<GetAll<RatingCriteriaResult>>(`/rating-grids/results`, {
      headers: { ...instance.defaults.headers.common, Authorization: `Bearer ${user?.token}` }
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
