import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useToken = create<DataTypes.IUseToken>()(
  persist(
    (set) => ({
      token: "",
      setToken: (token) => set((state) => ({ token: state.token })),
    }),
    { name: "access_token" }
  )
);

export const useUserData = create<DataTypes.IUserData>()((set) => ({
  email: "",
  password: "",
  confirmPassword: "",
  username: "",
  setData: (key, value) =>
    set((state) => ({
      email: state.email,
      password: state.password,
      confirmPassword: state.confirmPassword,
      username : state.username,
      [key] : value
    })),
}));
