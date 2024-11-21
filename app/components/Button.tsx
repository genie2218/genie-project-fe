/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import styles from './styles.module.scss';

interface IInputProps {
  label: string,
  onClick?: () => void;
}

const Button = (props: IInputProps) => {
  const {
    label,
    onClick,
  } = props;

  return (
    <div className={styles.inputContainer}>
      <button onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button;