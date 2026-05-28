import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { storage } from '@/services/storage';

/**
 * Reusable React Hook to sync state with localStorage.
 * @param key - Storage namespace key
 * @param initialValue - Default fallback value
 */
export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    return storage.get<T>(key, initialValue) ?? initialValue;
  });

  useEffect(() => {
    storage.set(key, storedValue);
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};
