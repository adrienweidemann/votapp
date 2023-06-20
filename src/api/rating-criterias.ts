import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

import { HTTP_REQUEST_HEADERS } from "@configs/global";
import { GetAll } from "@definitions/global";
import { RatingCriteria } from "@definitions/models/rating-criteria";

const instance = axios.create();
const mock = new AxiosMockAdapter(instance);

mock.onGet("/rating-criterias").reply<GetAll<RatingCriteria>>(200, {
  count: 5,
  data: [
    { id: 1, label: "FORM.RATING_CRITERIA.GLOBAL.LABEL" },
    { id: 2, label: "FORM.RATING_CRITERIA.QUALITY.LABEL" },
    { id: 3, label: "FORM.RATING_CRITERIA.TIME_MANAGEMENT.LABEL" },
    { id: 4, label: "FORM.RATING_CRITERIA.ANIMATION.LABEL" }
  ]
});

export const fetchRatingCriterias = async (): Promise<GetAll<RatingCriteria>> => {
  try {
    const { data } = await instance.get<GetAll<RatingCriteria>>("/rating-criterias", {
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
