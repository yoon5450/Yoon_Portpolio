import { create } from "zustand";

type Variant = "default" | "transparent" | "light" | "primary";

interface HeaderControllStore {
  variant: "default" | "transparent" | "light" | "primary";
  setVariant: (
    variant: "default" | "transparent" | "light" | "primary"
  ) => void;
  focusedItem:
    | "about"
    | "skills"
    | "projects"
    | "contact"
    | "peerReview"
    | null;
  setFocusedItem: (
    item: "about" | "skills" | "projects" | "contact" | "peerReview" | null
  ) => void;
  isScrolled: boolean;
  setIsScrolled: (isScrolled: boolean) => void;
}

export const headerControllStore = create<HeaderControllStore>()((set) => ({
  variant: "transparent",
  setVariant: (variant: Variant) => set({ variant }),
  focusedItem: null,
  setFocusedItem: (
    item: "about" | "skills" | "projects" | "contact" | "peerReview" | null
  ) => set({ focusedItem: item }),
  isScrolled: false,
  setIsScrolled: (isScrolled: boolean) => set({ isScrolled }),
}));
