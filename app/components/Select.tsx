/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState } from 'react';
import styles from './styles.module.scss';

interface ISelect {
  label: string,
  options: any,
  onChange: any,
  defaultValue: any,
}

const Select = ({ label, options=[], onChange, defaultValue }: ISelect) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue || {});
  const [optionsVisiblity, toggleOptionsVisibility] = useState(false);

  const handleSelect = (option: any) => {
    toggleOptionsVisibility(false);
    if (selectedOption.value == option.value)
    {
      return;
    }
    setSelectedOption(option)
    // onChange && onChange(option);
    console.log(onChange);
  }
  
  return (
    <div className={styles.selectContainer}>
      <span>{label}</span>
      <div className={styles.select} role="button">
        <div className={styles.selected} onClick={() => toggleOptionsVisibility(!optionsVisiblity)}>
          {selectedOption.label || 'Select a type'}
          V 
        </div>
        {
          optionsVisiblity && (
            <div className={styles.options}>
              {
                options.map((o: any) => (
                  <div key={o.value} className={styles.option} onClick={() => handleSelect(o)}>
                    {o.label} {selectedOption.value === o.value && '_/'}
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Select;