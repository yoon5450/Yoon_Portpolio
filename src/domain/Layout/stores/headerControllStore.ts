import { create } from "zustand";

type Variant = "default" | "transparent" | "light" | "primary";


interface HeaderControllStore {
  variant: "default" | "transparent" | "light" | "primary";
  setVariant: (
    variant: "default" | "transparent" | "light" | "primary"
  ) => void;
}

export const headerControllStore = create<HeaderControllStore>()((set) => ({
  variant: "transparent",
  setVariant: (variant:Variant) => set({ variant }),
}));
