import { create } from "zustand";

interface UserStore {
  isSignedIn: boolean;
  setIsSignedIn: (val: boolean) => void;
}

export const useUser = create<UserStore>((set) => ({
  isSignedIn: false,
  setIsSignedIn: (val) => set({ isSignedIn: val }),
}));
