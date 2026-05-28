import { GetDeviceInfo } from '@wails/go/main/App';
import type { main } from '@wails/go/models';

/**
 * Service to retrieve device details from the Go backend.
 */
export const deviceService = {
  fetchDeviceInfo: async (): Promise<main.DeviceInfo> => {
    try {
      return await GetDeviceInfo();
    } catch (error) {
      console.error('Failed to retrieve device info:', error);
      throw error;
    }
  },
};
