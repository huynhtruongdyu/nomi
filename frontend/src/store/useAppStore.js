import { create } from 'zustand';

/**
 * Global Zustand Store for application-wide settings and UI states.
 */
export const useAppStore = create((set) => ({
  // State
  theme: 'dark',
  sidebarOpen: false,

  // Actions
  toggleTheme: () => set((state) => ({
    theme: state.theme === 'light' ? 'dark' : 'dark' // currently dark mode is core, but setup toggle state
  })),
  
  setSidebarOpen: (isOpen) => set({ sidebarOpen: isOpen }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen }))
}));
