import { useState, useEffect } from 'react';
import { deviceService } from '../api/deviceService';

/**
 * Hook to retrieve and manage device system information state
 */
export const useDeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    
    const loadInfo = async () => {
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
