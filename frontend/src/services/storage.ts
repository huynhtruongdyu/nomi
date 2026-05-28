const PREFIX = 'nomi_app_';

/**
 * Common Storage Service wrapping localStorage with key prefixing and JSON safety.
 */
export const storage = {
  get: <T>(key: string, defaultValue: T | null = null): T | null => {
    try {
      const item = localStorage.getItem(`${PREFIX}${key}`);
      return item ? (JSON.parse(item) as T) : defaultValue;
    } catch (error) {
      console.error(`Error reading key "${key}" from localStorage:`, error);
      return defaultValue;
    }
  },

  set: (key: string, value: unknown): boolean => {
    try {
      localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error writing key "${key}" to localStorage:`, error);
      return false;
    }
  },

  remove: (key: string): boolean => {
    try {
      localStorage.removeItem(`${PREFIX}${key}`);
      return true;
    } catch (error) {
      console.error(`Error removing key "${key}" from localStorage:`, error);
      return false;
    }
  },

  clear: (): boolean => {
    try {
      Object.keys(localStorage)
        .filter((key) => key.startsWith(PREFIX))
        .forEach((key) => localStorage.removeItem(key));
      return true;
    } catch (error) {
      console.error('Error clearing app namespace in localStorage:', error);
      return false;
    }
  },
};
