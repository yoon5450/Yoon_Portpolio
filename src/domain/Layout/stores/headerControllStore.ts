import { create } from "zustand";

interface HeaderControllStore {
  variant: "default" | "transparent" | "light" | "primary";
  setVariant: (
    variant: "default" | "transparent" | "light" | "primary"
  ) => void;
}

export const headerControllStore = create<HeaderControllStore>()((set) => ({
  variant: "transparent",
  setVariant: (variant) => set({ variant }),
}));
