import axios from "axios";

import { HTTP_REQUEST_HEADERS } from "@configs/global";
import { GetAll } from "@definitions/global";
import { RatingCriteria } from "@definitions/models/rating-criteria";
import { AuthenticatedUser } from "@definitions/models/user";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: HTTP_REQUEST_HEADERS
});

export const fetchRatingCriterias = async (
  user: AuthenticatedUser | null
): Promise<GetAll<RatingCriteria>> => {
  try {
    const { data } = await instance.get<GetAll<RatingCriteria>>("/rating-criterias", {
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
