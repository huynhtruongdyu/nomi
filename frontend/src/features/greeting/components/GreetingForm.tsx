import React from 'react';
import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input/Input';
import { useGreeting } from '../hooks/useGreeting';
import styles from './GreetingForm.module.css';

const GreetingForm: React.FC = () => {
  const {
    name,
    resultText,
    isLoading,
    history,
    handleNameChange,
    executeGreeting,
    clearHistory,
  } = useGreeting();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      executeGreeting();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.result} role="status">
        {resultText}
      </div>
      <div className={styles.inputWrapper}>
        <Input
          value={name}
          onChange={handleNameChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter your name"
          disabled={isLoading}
          className={styles.inputField}
          autoComplete="off"
        />
        <Button
          onClick={executeGreeting}
          disabled={isLoading}
          className={styles.actionBtn}
        >
          {isLoading ? 'Greeting...' : 'Greet'}
        </Button>
      </div>

      {history.length > 0 && (
        <div className={styles.historySection}>
          <div className={styles.historyHeader}>
            <span className={styles.historyTitle}>Greeting History</span>
            <button onClick={clearHistory} className={styles.clearBtn}>
              Clear
            </button>
          </div>
          <ul className={styles.historyList}>
            {history.map((item) => (
              <li key={item.id} className={styles.historyItem}>
                <span className={styles.historyTime}>{item.timestamp}</span>
                <span>
                  Greeted <strong>{item.name}</strong>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GreetingForm;
