"use client"

import { useState } from "react";
import PriceDiscoveryForm from "./PriceDiscoveryForm";
import PriceDiscoveryResult from "./PriceDiscoveryResult";
import Loader from "@/app/components/Loader";

enum STEP {
  'INPUT',
  'RESULT',
  'LOADING'
}

interface IFormData {
  builder: any,
  floor: any,
  minSize: number,
  maxSize: number,
  minBudget: number,
  maxBudget: number,
}

const PriceDiscoveryTool = () => {
  const [step, setStep] = useState(STEP.INPUT);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<IFormData>({
    builder: '',
    floor: '',
    minSize: 0,
    maxSize: 0,
    minBudget: 0,
    maxBudget: 0,
  });
  const [results, setResults] = useState([]);

  const handleFormUpdate = (key: string, value: any) => {
    setError('');
    setFormData(prevFormData => (
      {
        ...prevFormData,
        [key]: value,
      }
    ))
  }
  
  const handleChange = () => {
    if (step === STEP.RESULT) {
      setStep(STEP.INPUT);
    } else if (step === STEP.INPUT) {
      setStep(STEP.LOADING);
      if (
        formData?.minBudget > formData?.maxBudget || 
        formData?.minSize > formData?.maxSize
      ) {
        setError('Please fill all the details correctly');
        setStep(STEP.INPUT);
        return;
      }
      fetch('https://genie-service-latest.onrender.com/genieservice/api/calculator/getDataBasedOnFilters', {
        method: 'POST',
        body: JSON.stringify({
          builder: formData?.builder || null,
          floor: formData?.floor || null,
          maxBudget: formData?.maxBudget || null,
          maxSize:  formData?.maxSize || null,
          minBudget: formData?.minBudget || null,
          minSize: formData?.minSize || null,
        }),
        headers: new Headers({'content-type': 'application/json'}),
      })
      .then(res => res.json())
      .then(res => {
        if (!res.localities) {
          setError('Some error occured. Please try again later');
          setStep(STEP.INPUT);
          return;
        }
        setResults(res);
        setStep(STEP.RESULT);
      })
      .catch(err => {
        setError('Some error occured. Please try again later');
        setStep(STEP.INPUT);
      });
    }
  }

  if (step === STEP.INPUT)
    return (
      <PriceDiscoveryForm
        heading="Price Discovery Calculator"
        subHeading="Find the dream home in your budget"
        handleChange={handleChange}
        handleFormUpdate={handleFormUpdate}
        error={error}
        formData={formData}
      />
    )
  
  if (step === STEP.RESULT)
    return (
      <PriceDiscoveryResult
        heading="Estimated localities mathing your budget"
        subHeading="Find the best locality for your budget"
        handleChange={handleChange}
        results={results}
      />
    )
  
  if (step === STEP.LOADING) {
    return (
      <Loader />
    )
  }
}

export default PriceDiscoveryTool;