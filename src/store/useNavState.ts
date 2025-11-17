import { create } from "zustand";

/* -----------------------------
   PAGE TYPES & ENUM
------------------------------ */
export enum Page {
  HOME = "home",
  DASHBOARD = "dashboard",
  ALL_FILES = "allfiles",
  SHARED_WITH_ME = "sharedwithme",
  TRASH = "trash",
  SETTINGS = "settings",
  LOGIN = "login",
}

/* -----------------------------
   INTERFACES FOR STORE
------------------------------ */
export interface NavigationState {
  currentPage: Page;
  history: Page[];
}

export interface NavigationActions {
  navigate: (page: Page) => void;
  goBack: () => void;
  setCurrentPage: (page: Page) => void;
  getCurrentPage: () => Page; 
}

export type NavigationStore = NavigationState & NavigationActions;

/* -----------------------------
   ZUSTAND STORE
------------------------------ */
export const useNavigationStore = create<NavigationStore>((set, get) => ({
  currentPage: Page.HOME,
  history: [Page.HOME],

  // Navigate to a new page
  navigate: (page) =>
    set((state) => ({
      currentPage: page,
      history: [...state.history, page],
    })),

  // Directly set current page without history
  setCurrentPage: (page) =>
    set(() => ({
      currentPage: page,
    })),

  // Go back to previous page based on history
  goBack: () =>
    set((state) => {
      if (state.history.length <= 1) return state;

      const newHistory = [...state.history];
      newHistory.pop();
      const previous = newHistory[newHistory.length - 1];

      return {
        currentPage: previous,
        history: newHistory,
      };
    }),

  getCurrentPage: () => {
    return get().currentPage;
  },

}));
