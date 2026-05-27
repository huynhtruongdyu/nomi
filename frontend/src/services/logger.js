const isDev = import.meta.env.DEV;

/**
 * Core Application Logger
 */
export const logger = {
  info: (message, ...args) => {
    if (isDev) {
      console.log(`%c[INFO] ${message}`, 'color: #3b82f6; font-weight: bold;', ...args);
    }
  },
  warn: (message, ...args) => {
    console.warn(`[WARN] ${message}`, ...args);
  },
  error: (message, ...args) => {
    console.error(`[ERROR] ${message}`, ...args);
    // Here you would hook into Go backend logs or sentry telemetry in production
  }
};
