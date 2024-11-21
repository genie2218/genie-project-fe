import styles from './styles.module.scss';

const LeftArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className={styles.arrowContainer} onClick={onClick}>
      <img src="/leftArrow.svg" alt="back" />
    </div>
  )
}
export default LeftArrow;