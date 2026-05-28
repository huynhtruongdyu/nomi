import { useState, ChangeEvent } from 'react';
import { greetService } from '../api/greetService';
import { useGreetingStore } from '../store/useGreetingStore';
import type { GreetingHistoryItem } from '../store/useGreetingStore';

interface UseGreetingReturn {
  name: string;
  resultText: string;
  isLoading: boolean;
  history: GreetingHistoryItem[];
  handleNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  executeGreeting: () => Promise<void>;
  clearHistory: () => void;
}

/**
 * Hook to manage greeting business logic and state
 */
export const useGreeting = (): UseGreetingReturn => {
  const [name, setName] = useState('');
  const [resultText, setResultText] = useState('Please enter your name below 👇');
  const [isLoading, setIsLoading] = useState(false);

  // Bind Zustand Store selectors
  const history = useGreetingStore((state) => state.history);
  const addGreetingToHistory = useGreetingStore((state) => state.addGreetingToHistory);
  const clearHistory = useGreetingStore((state) => state.clearHistory);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const executeGreeting = async (): Promise<void> => {
    if (!name.trim()) {
      setResultText('Please enter a valid name first! ⚠️');
      return;
    }

    setIsLoading(true);
    try {
      const response = await greetService.fetchGreeting(name);
      setResultText(response);
      addGreetingToHistory(name.trim(), response);
    } catch {
      setResultText('An error occurred. Check backend logs. ❌');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    name,
    resultText,
    isLoading,
    history,
    handleNameChange,
    executeGreeting,
    clearHistory,
  };
};
