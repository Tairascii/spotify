import { signIn } from "@/api/auth";
import { cookies } from "next/dist/client/components/headers";
import { create } from "zustand";

interface LoginStore {
  email: string;
  password: string;
  setEmail: (val: string) => void;
  setPassword: (val: string) => void;
  onSubmit: (email: string, password: string, cb: Function) => Promise<void>;
}

const useLoginStore = create<LoginStore>((set) => ({
  email: "",
  password: "",
  setEmail: (val) => set({ email: val }),
  setPassword: (val) => set({ password: val }),
  onSubmit: async (email, password, cb) => {
    try {
      const tokens = await signIn({ email, password });
      const cookiesStore = cookies()
      cookiesStore.set("accessToken", tokens.accessToken);
      cookiesStore.set("refreshtoken", tokens.refreshToken);
      cb();
    } catch (err) {
      console.log(err);
    }
  },
}));

export default useLoginStore;
