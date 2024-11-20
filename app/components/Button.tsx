/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './styles.module.scss';

interface IInputProps {
  label: string,
}

const Button = (props: IInputProps) => {
  const {
    label,
  } = props;

  return (
    <div className={styles.inputContainer}>
      <button>{label}</button>
    </div>
  )
}

export default Button;