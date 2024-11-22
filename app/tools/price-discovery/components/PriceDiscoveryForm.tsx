"use client"

import Button from '@/app/components/Button';
import Input from '@/app/components/Input';
import Select from "@/app/components/Select";
import styles from '../styles.module.scss';
import HouseMoney from '@/app/components/LeftArrow copy';
import { useEffect, useState } from 'react';

interface IPriceDiscoveryForm {
  heading: string,
  subHeading: string,
  handleChange: () => void,
  handleFormUpdate: (key: string, value: any) => void,
  error: string,
  formData: any,
}

const PriceDiscoveryForm = (props: IPriceDiscoveryForm) => {
  const {
    heading,
    subHeading,
    handleChange,
    handleFormUpdate,
    error,
    formData,
  } = props;

  const [options, setOptions] = useState({
    floor: [],
    builder: [],
  })

  const fetchFormOptions = () => {
    fetch('https://genie-service-latest.onrender.com/genieservice/api/calculator/getAllFilters')
    .then(res => res.json())
    .then(res => {
      setOptions(res);
    });
  }

  useEffect(() => {
    fetchFormOptions();
  }, []);

  return (
    <>
      <div className={styles.headingContainer}>
          <HouseMoney />
          <div className={styles.heading}>
            <p>{heading}</p>
            <p className={styles.subHeading}>{subHeading}</p>
          </div>
        </div>
        <Select label='Builder Type' options={options?.builder} onChange={(val) => handleFormUpdate('builder', val)} value={formData?.builder} />
        <Select label='Floor' options={options?.floor} onChange={(val) => handleFormUpdate('floor', val)} value={formData?.floor} />
        <Input label='Min Size' suffixText='sq. yards' onChange={(val) => handleFormUpdate('minSize', val)} value={formData?.minSize} />
        <Input label='Max Size' suffixText='sq. yards' onChange={(val) => handleFormUpdate('maxSize', val)} value={formData?.maxSize} />
        <Input label='Min Budget' prefixText='₹ (in crores)' onChange={(val) => handleFormUpdate('minBudget', val)} value={formData?.minBudget} />
        <Input label='Max Budget' prefixText='₹ (in crores)' onChange={(val) => handleFormUpdate('maxBudget', val)} value={formData?.maxBudget} />
        <Button label='Fetch Localities' onClick={handleChange} />
        <p className={styles.error}><center>{error}</center></p>
    </>
  )
}

export default PriceDiscoveryForm;