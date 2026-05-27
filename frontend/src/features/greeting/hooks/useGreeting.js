import { useState } from 'react';
import { greetService } from '../api/greetService';
import { useGreetingStore } from '../store/useGreetingStore';

/**
 * Hook to manage greeting business logic and state
 */
export const useGreeting = () => {
  const [name, setName] = useState('');
  const [resultText, setResultText] = useState('Please enter your name below 👇');
  const [isLoading, setIsLoading] = useState(false);

  // Bind Zustand Store selectors
  const history = useGreetingStore((state) => state.history);
  const addGreetingToHistory = useGreetingStore((state) => state.addGreetingToHistory);
  const clearHistory = useGreetingStore((state) => state.clearHistory);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const executeGreeting = async () => {
    if (!name.trim()) {
      setResultText('Please enter a valid name first! ⚠️');
      return;
    }

    setIsLoading(true);
    try {
      const response = await greetService.fetchGreeting(name);
      setResultText(response);
      addGreetingToHistory(name.trim(), response);
    } catch (error) {
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
    clearHistory
  };
};

