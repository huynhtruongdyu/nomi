import React from 'react';
import styles from './Button.module.css';

/**
 * Reusable Button component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {Function} [props.onClick]
 * @param {string} [props.type]
 * @param {boolean} [props.disabled]
 * @param {string} [props.className]
 */
const Button = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.btn} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
