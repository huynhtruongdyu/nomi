import { GetDeviceInfo } from '@wails/go/main/App';

/**
 * Service to retrieve device details from the Go backend.
 */
export const deviceService = {
  fetchDeviceInfo: async () => {
    try {
      return await GetDeviceInfo();
    } catch (error) {
      console.error('Failed to retrieve device info:', error);
      throw error;
    }
  }
};
