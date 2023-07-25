'use client';
import OnboardingHeader from "./header";
import CompanyDetails from "./company-details";
import BenefitsMap from "./benefits";
import Integrations from "./integrations";
import EmployeesList from "./employees-upload";
import { useSelector } from "react-redux";
import { currentStepSelector } from "@/store/company";

const stepContent: any = {
  1: <CompanyDetails />,
  2: <BenefitsMap />,
  3: <Integrations />,
  4: <EmployeesList />,
}

const Oboarding = () => {
  const currentStep = useSelector(currentStepSelector);

  return (
    <>
      <OnboardingHeader />
      <div className="flex flex-col items-center justify-center h-full w-full lg:max-w-[1440px]">
        {stepContent[currentStep]}
      </div>
    </>
  );
}

export default Oboarding;


