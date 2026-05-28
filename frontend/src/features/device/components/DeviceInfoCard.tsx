import React from 'react';
import { useDeviceInfo } from '../hooks/useDeviceInfo';
import styles from './DeviceInfoCard.module.css';

const DeviceInfoCard: React.FC = () => {
  const { deviceInfo, isLoading, error } = useDeviceInfo();

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <span className={styles.loadingText}>Analyzing device...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorCard}>
        <span className={styles.errorIcon}>⚠️</span>
        <span>Failed to load system profile metrics.</span>
      </div>
    );
  }

  if (!deviceInfo) return null;

  // Capitalize OS name
  const formattedOS = deviceInfo.os.charAt(0).toUpperCase() + deviceInfo.os.slice(1);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>System Profile</h2>
      <div className={styles.grid}>
        <div className={styles.item}>
          <span className={styles.label}>OS Platform</span>
          <span className={styles.value}>{formattedOS}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Architecture</span>
          <span className={styles.value}>{deviceInfo.arch}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>CPU Cores</span>
          <span className={styles.value}>{deviceInfo.cpus} Logical Cores</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Host Name</span>
          <span className={styles.value}>{deviceInfo.hostname}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Logged User</span>
          <span className={styles.value}>{deviceInfo.username}</span>
        </div>
      </div>
    </div>
  );
};

export default DeviceInfoCard;
