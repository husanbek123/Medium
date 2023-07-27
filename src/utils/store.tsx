import defaultLinks from "@/defaults/links";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useToken = create<DataTypes.IUseToken>()(
  persist(
    (set) => ({
      token: "",
      setToken: (token) => set((state) => ({ token })),
    }),
    { name: "access_token" }
  )
);



export const useHeaderData = create<DataTypes.IUseHeaderData>()((set) => ({
  data: defaultLinks,
  setData: (data) =>
    set(() => ({
      data,
    })),
}));
