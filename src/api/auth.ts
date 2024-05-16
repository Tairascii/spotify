import { getApiPath } from "@/utils/getApiPath";
import axiosConfig from "./config";

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export const signIn = async (data: {
  login: string;
  password: string;
}): Promise<Tokens> => {
  const response = await axiosConfig({
    data,
    url: getApiPath("/auth/sign-in"),
    method: "POST",
  });

  console.log(response);
  return response;
};

export const signUp = async (data: {
  name: string;
  surname: string;
  password: string;
  email: string;
}): Promise<void> => {
  const response = await axiosConfig({
    data,
    url: getApiPath("/auth/sign-in"),
    method: "POST",
  });

  console.log(response);
  return;
};

export const refreshToken = async (token: string): Promise<Tokens> => {
  const response = await axiosConfig({
    data: { refresh_token: token },
    url: getApiPath("/auth/refresh"),
    method: "POST",
  });

  console.log(response);
  return;
};
