import { create } from 'zustand';

type Theme = 'light' | 'dark';

interface AppState {
  // State
  theme: Theme;
  sidebarOpen: boolean;

  // Actions
  toggleTheme: () => void;
  setSidebarOpen: (isOpen: boolean) => void;
  toggleSidebar: () => void;
}

/**
 * Global Zustand Store for application-wide settings and UI states.
 */
export const useAppStore = create<AppState>((set) => ({
  // State
  theme: 'dark',
  sidebarOpen: false,

  // Actions
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'dark', // currently dark mode is core, but setup toggle state
    })),

  setSidebarOpen: (isOpen: boolean) => set({ sidebarOpen: isOpen }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));
