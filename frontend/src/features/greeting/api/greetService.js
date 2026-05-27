import { Greet } from '@wails/go/main/App';

/**
 * Service to call the greeting API in the Go backend.
 * @param {string} name
 * @returns {Promise<string>}
 */
export const greetService = {
  fetchGreeting: async (name) => {
    try {
      return await Greet(name);
    } catch (error) {
      console.error('Failed to call Go Greet API:', error);
      throw error;
    }
  }
};
