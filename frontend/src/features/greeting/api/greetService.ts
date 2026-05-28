import { Greet } from '@wails/go/main/App';

/**
 * Service to call the greeting API in the Go backend.
 */
export const greetService = {
  fetchGreeting: async (name: string): Promise<string> => {
    try {
      return await Greet(name);
    } catch (error) {
      console.error('Failed to call Go Greet API:', error);
      throw error;
    }
  },
};
