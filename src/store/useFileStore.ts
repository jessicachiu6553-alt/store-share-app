// store/useFileStore.ts
import { create } from "zustand";

interface FileState {
  refreshKey: number;
  triggerRefresh: () => void;
}

export const useFileStore = create<FileState>((set) => ({
  refreshKey: 0,
  triggerRefresh: () => set((state) => ({ refreshKey: state.refreshKey + 1 })),
}));
