import styles from './styles.module.scss';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <img src="/loader.svg" alt="fetching data" />
    </div>
  )
}
export default Loader;