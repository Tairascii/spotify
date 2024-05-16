import { signIn } from "@/api/auth";
import cookie from "js-cookie";
import { create } from "zustand";

interface LoginStore {
  login: string;
  password: string;
  setLogin: (val: string) => void;
  setPassword: (val: string) => void;
  onSubmit: (login: string, password: string) => Promise<void>;
}

const useLoginStore = create<LoginStore>((set) => ({
  login: "",
  password: "",
  setLogin: (val) => set({ login: val }),
  setPassword: (val) => set({ password: val }),
  onSubmit: async (login: string, password: string) => {
    try {
      const tokens = await signIn({ login, password });
      cookie.set("accessToken", tokens.accessToken);
      cookie.set("refreshtoken", tokens.refreshToken);
    } catch (err) {
      console.log(err)
    }
  },
}));

export default useLoginStore;
