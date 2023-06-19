import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

import { HTTP_REQUEST_HEADERS } from "@configs/global";
import { AuthenticatedUser } from "@definitions/models/user";

const instance = axios.create();
const mock = new AxiosMockAdapter(instance);

mock
  .onPost("/users/login")
  .reply<AuthenticatedUser>(200, { id: 1, name: "John Doe", token: "abcdetoken", role: "user" });

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
