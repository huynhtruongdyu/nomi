import { create } from 'zustand';

/**
 * Zustand Store scoped specifically to the Greeting feature
 */
export const useGreetingStore = create((set) => ({
  // State
  history: [],

  // Actions
  addGreetingToHistory: (name, response) => set((state) => ({
    history: [
      {
        id: Date.now(),
        name,
        response,
        timestamp: new Date().toLocaleTimeString()
      },
      ...state.history
    ]
  })),

  clearHistory: () => set({ history: [] })
}));
