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

const PriceDiscoveryTool = () => {
  const [step, setStep] = useState(STEP.RESULT);
  
  const handleChange = () => {
    if (step === STEP.RESULT) {
      setStep(STEP.INPUT);
    } else if (step === STEP.INPUT) {
      setStep(STEP.LOADING);
      setTimeout(() => {
        setStep(STEP.RESULT);
      }, 4000);
    }
  }

  if (step === STEP.INPUT)
    return (
      <PriceDiscoveryForm
        heading="Price Discovery Calculator"
        subHeading="Find the dream home in your budget"
        handleChange={handleChange}
      />
    )
  
  if (step === STEP.RESULT)
    return (
      <PriceDiscoveryResult
        heading="Estimated localities mathing your budget"
        subHeading="Find the best locality for your budget"
        handleChange={handleChange}
      />
    )
  
  if (step === STEP.LOADING) {
    return (
      <Loader />
    )
  }
}

export default PriceDiscoveryTool;