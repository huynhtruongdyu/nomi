import React from 'react';
import styles from './Input.module.css';

/**
 * Reusable Input component
 * @param {Object} props
 * @param {string} [props.type]
 * @param {string} [props.value]
 * @param {Function} [props.onChange]
 * @param {string} [props.placeholder]
 * @param {boolean} [props.disabled]
 * @param {string} [props.className]
 */
const Input = ({
  type = 'text',
  value,
  onChange,
  placeholder = '',
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`${styles.input} ${className}`}
      {...props}
    />
  );
};

export default Input;
