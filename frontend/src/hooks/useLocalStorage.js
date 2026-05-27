import { useState, useEffect } from 'react';
import { storage } from '@/services/storage';

/**
 * Reusable React Hook to sync state with localStorage.
 * @param {string} key - Storage namespace key
 * @param {*} initialValue - Default fallback value
 */
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    return storage.get(key, initialValue);
  });

  useEffect(() => {
    storage.set(key, storedValue);
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};
