import { create } from 'zustand';

export interface GreetingHistoryItem {
  id: number;
  name: string;
  response: string;
  timestamp: string;
}

interface GreetingStore {
  // State
  history: GreetingHistoryItem[];

  // Actions
  addGreetingToHistory: (name: string, response: string) => void;
  clearHistory: () => void;
}

/**
 * Zustand Store scoped specifically to the Greeting feature
 */
export const useGreetingStore = create<GreetingStore>((set) => ({
  // State
  history: [],

  // Actions
  addGreetingToHistory: (name: string, response: string) =>
    set((state) => ({
      history: [
        {
          id: Date.now(),
          name,
          response,
          timestamp: new Date().toLocaleTimeString(),
        },
        ...state.history,
      ],
    })),

  clearHistory: () => set({ history: [] }),
}));
