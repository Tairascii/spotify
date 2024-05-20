import { getApiPath } from "@/utils/getApiPath";
import axiosConfig from "./config";

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export const signIn = async (data: {
  email: string;
  password: string;
}): Promise<Tokens> => {
  const response = await axiosConfig({
    data,
    url: getApiPath("/auth/sign-in"),
    method: "POST",
  });

  return response.data;
};

export const signUp = async (data: {
  name: string;
  surname: string;
  password: string;
  email: string;
}): Promise<void> => {
  const response = await axiosConfig({
    data,
    url: getApiPath("/auth/sign-up"),
    method: "POST",
  });

  return;
};

export const refreshToken = async (token: string): Promise<Tokens> => {
  const response = await axiosConfig({
    data: { refresh_token: token },
    url: getApiPath("/auth/refresh"),
    method: "POST",
  });

  return response.data;
};
