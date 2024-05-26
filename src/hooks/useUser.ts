import { create } from "zustand";
import cookie from 'js-cookie'

interface UserStore {
  isSignedIn: boolean;
  setIsSignedIn: (val: boolean) => void;
  onLogout: (cb: Function) => void
}

export const useUser = create<UserStore>((set) => ({
  isSignedIn: false,
  setIsSignedIn: (val) => set({ isSignedIn: val }),
  onLogout: (cb) => {
    cookie.remove('accessToken')
    cookie.remove('refreshToken')
    cb()
  }
}));
