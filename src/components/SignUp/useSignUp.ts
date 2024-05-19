import { signUp } from "@/api/auth";
import cookie from "js-cookie";
import { create } from "zustand";

interface SignUpStore {
  login: string;
  password: string;
  name: string;
  setName: (val: string) => void;
  setLogin: (val: string) => void;
  setPassword: (val: string) => void;
  onSubmit: (login: string, password: string, name: string) => Promise<void>;
}

const useSignUpStore = create<SignUpStore>((set) => ({
  login: "",
  password: "",
  name: "",
  setLogin: (val) => set({ login: val }),
  setName: (val) => set({ name: val }),
  setPassword: (val) => set({ password: val }),
  onSubmit: async (login, password, name) => {
    const [finalName, finalSurname] = name.split(" ");
    try {
      await signUp({
        email: login,
        password,
        name: finalName,
        surname: finalSurname,
      });
    } catch (err) {
      console.log(err);
    }
  },
}));

export default useSignUpStore;
