import { useState, useEffect } from 'react';
import { deviceService } from '../api/deviceService';
import type { main } from '@wails/go/models';

interface UseDeviceInfoReturn {
  deviceInfo: main.DeviceInfo | null;
  isLoading: boolean;
  error: unknown;
}

/**
 * Hook to retrieve and manage device system information state
 */
export const useDeviceInfo = (): UseDeviceInfoReturn => {
  const [deviceInfo, setDeviceInfo] = useState<main.DeviceInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let active = true;

    const loadInfo = async (): Promise<void> => {
      try {
        const info = await deviceService.fetchDeviceInfo();
        if (active) {
          setDeviceInfo(info);
          setIsLoading(false);
        }
      } catch (err) {
        if (active) {
          setError(err);
          setIsLoading(false);
        }
      }
    };

    loadInfo();

    return () => {
      active = false;
    };
  }, []);

  return { deviceInfo, isLoading, error };
};
