import React, { Component } from 'react';
import Button from '@/components/ui/Button/Button';
import styles from './ErrorBoundary.module.css';
import { logger } from '@/services/logger';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    logger.error('ErrorBoundary caught an unhandled rendering crash:', error, errorInfo);
  }

  handleReset = () => {
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
