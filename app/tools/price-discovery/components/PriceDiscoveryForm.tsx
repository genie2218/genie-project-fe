"use client"

import Button from '@/app/components/Button';
import Input from '@/app/components/Input';
import Select from "@/app/components/Select";
import styles from '../styles.module.scss';
import HouseMoney from '@/app/components/LeftArrow copy';

interface IPriceDiscoveryForm {
  heading: string,
  subHeading: string,
  handleChange: () => void,
}

const PriceDiscoveryForm = (props: IPriceDiscoveryForm) => {
  const {
    heading,
    subHeading,
    handleChange,
  } = props;
  return (
    <>
      <div className={styles.headingContainer}>
          <HouseMoney />
          <div className={styles.heading}>
            <p>{heading}</p>
            <p className={styles.subHeading}>{subHeading}</p>
          </div>
        </div>
        <Select label='Builder Type' options={[{ label: 'Luxury', value: 1 }, { label: 'Ultra Luxury', value: 2}]} onChange={null} defaultValue={null} />
        <Select label='Floor' options={[{ label: 'First Floor', value: 1 }, { label: 'Second Floor', value: 2}]} onChange={null} defaultValue={null} />
        <Input label='Min Size' suffixText='sq. yards'/>
        <Input label='Max Size' suffixText='sq. yards'/>
        <Input label='Max Size' prefixText='₹'/>
        <Input label='Max Size' prefixText='₹'/>
        <Button label='Fetch Localities' onClick={handleChange} />
    </>
  )
}

export default PriceDiscoveryForm;