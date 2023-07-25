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
