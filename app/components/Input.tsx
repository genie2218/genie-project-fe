/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './styles.module.scss';

interface IInputProps {
  label: string,
  prefixText?: string,
  suffixText?: string,
}

const Input = (props: IInputProps) => {
  const {
    label,
    prefixText,
    suffixText,
  } = props;

  return (
    <div className={styles.inputContainer}>
      <span>{label}</span>
      <div className={styles.input}>
        {prefixText && <span className={styles.prefixText}>{prefixText}</span>}
        <input />
        {suffixText && <span className={styles.suffixText}>{suffixText}</span>}
      </div>
    </div>
  )
}

export default Input;