import Input from '@/app/components/Input';
import styles from './styles.module.scss';
import Select from '@/app/components/Select';
import Button from '@/app/components/Button';
import Link from 'next/link';

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
        <div className={styles.headingContainer}>
          <p className={styles.heading}>Price Discovery Calculator</p>
          <p className={styles.subHeading}>Find the dream home in your budget</p>
        </div>
        <Select label='Builder Type' options={[{ label: 'Luxury', value: 1 }, { label: 'Ultra Luxury', value: 2}]} onChange={null} defaultValue={null} />
        <Select label='Floor' options={[{ label: 'First Floor', value: 1 }, { label: 'Second Floor', value: 2}]} onChange={null} defaultValue={null} />
        <Input label='Min Size' suffixText='sq. yards'/>
        <Input label='Max Size' suffixText='sq. yards'/>
        <Input label='Max Size' prefixText='₹'/>
        <Input label='Max Size' prefixText='₹'/>
        <Button label='Fetch Localities' />
      </div>
    </>
  )
}

export default PriceDiscovery;