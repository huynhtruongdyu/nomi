import React from 'react';
import styles from './Input.module.css';

/**
 * Reusable Input component — extends all native input HTML attributes.
 */
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
  type = 'text',
  className = '',
  ...props
}) => {
  return (
    <input
      type={type}
      className={`${styles.input} ${className}`}
      {...props}
    />
  );
};

export default Input;
