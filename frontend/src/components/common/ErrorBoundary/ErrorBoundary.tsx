import React, { Component, ErrorInfo } from 'react';
import Button from '@/components/ui/Button/Button';
import styles from './ErrorBoundary.module.css';
import { logger } from '@/services/logger';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    logger.error('ErrorBoundary caught an unhandled rendering crash:', error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.container}>
          <div className={styles.card}>
            <h1 className={styles.title}>Something went wrong ⚙️</h1>
            <p className={styles.description}>
              The application encountered an unexpected rendering error.
            </p>
            {this.state.error && (
              <pre className={styles.errorLogs}>
                {this.state.error.toString()}
              </pre>
            )}
            <Button onClick={this.handleReset} className={styles.resetBtn}>
              Reload Application
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
