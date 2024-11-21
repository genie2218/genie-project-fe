import styles from './styles.module.scss';
import Button from '@/app/components/Button';
import Link from 'next/link';
import PriceDiscoveryTool from './components';

const PriceDiscovery = () => {
  return (
    <>
      <img className={styles.leftBackground} src='/background.svg' />
      <img className={styles.rightBackground} src='/background.svg' />
      <div className={styles.heroText}>
        <h1>Finding you <span className={styles.accent}>Dream Home</span><br/>Made Simple
        with Genie!</h1>
        <Link href="#tool"><Button label='Try the tool' /></Link>
      </div>
      <div id="tool" className={styles.toolContainer}>
        <PriceDiscoveryTool />
      </div>
    </>
  )
}

export default PriceDiscovery;