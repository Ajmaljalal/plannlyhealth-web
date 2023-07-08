'use client';
import OnboardingHeader from "./header";
import CompanyDetails from "./company-details";
import BenefitsMap from "./benefits/benefits-map";
import { useState } from "react";
import Integrations from "./integrations";

const stepContent: any = {
  1: <CompanyDetails />,
  2: <BenefitsMap />,
  3: <Integrations />,
}

const Oboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  }

  return (
    <>
      <OnboardingHeader currentStep={currentStep} handleStepChange={handleStepChange} />
      <div className="flex flex-col items-center justify-center h-full w-full lg:max-w-[1440px]">
        {stepContent[currentStep]}
      </div>
    </>
  );
}

export default Oboarding;


