"use client";

import { useUser } from "@/hooks/useUser";
import cookie from 'js-cookie'
import { useEffect } from "react";

interface UserProviderProps {}

const UserProvider = ({}: UserProviderProps): JSX.Element => {
  const { setIsSignedIn } = useUser();

  useEffect(() => {
    setIsSignedIn(Boolean(cookie.get("accessToken")));
  }, []);

  return <></>;
};
export default UserProvider;
