import axios from "axios";

import { HTTP_REQUEST_HEADERS } from "@configs/global";
import { AuthenticatedUser } from "@definitions/models/user";

const instance = axios.create({
  baseURL: process.env.API_URL,
  headers: HTTP_REQUEST_HEADERS
});

export const login = async ({
  email,
  password
}: {
  email: string;
  password: string;
}): Promise<AuthenticatedUser> => {
  try {
    const { data } = await instance.post<AuthenticatedUser>(
      "/users/login",
      { email, password },
      {}
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

export const adminLogin = async ({
  email,
  password
}: {
  email: string;
  password: string;
}): Promise<AuthenticatedUser> => {
  try {
    const { data } = await instance.post<AuthenticatedUser>(
      "/users/admin-login",
      { email, password },
      {}
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
