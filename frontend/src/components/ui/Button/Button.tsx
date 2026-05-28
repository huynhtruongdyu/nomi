import React from 'react';
import styles from './Button.module.css';

/**
 * Reusable Button component — extends all native button HTML attributes.
 */
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  className = '',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
