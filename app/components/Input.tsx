/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './styles.module.scss';

interface IInputProps {
  label: string,
  prefixText?: string,
  suffixText?: string,
  onChange: (param: any) => void,
  value: any,
}

const Input = (props: IInputProps) => {
  const {
    label,
    prefixText,
    suffixText,
    onChange,
    value,
  } = props;

  return (
    <div className={styles.inputContainer}>
      <span>{label}</span>
      <div className={styles.input}>
        {prefixText && <span className={styles.prefixText}>{prefixText}</span>}
        <input type="number" min={0} onChange={(e) => onChange(e?.target?.value)} value={value} />
        {suffixText && <span className={styles.suffixText}>{suffixText}</span>}
      </div>
    </div>
  )
}

export default Input;