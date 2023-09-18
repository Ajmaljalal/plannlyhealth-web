'use client';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import OnboardingHeader from "./header";
import CompanyDetails from "./company-details";
import EmployeesList from "./employees-upload";
import { currentStepSelector, setCompanyDetails, setStep } from "@/store/company";

// Static content mapping for steps
const stepContent: Record<number, JSX.Element> = {
  1: <CompanyDetails />,
  2: <EmployeesList />,
};

const baseUrl = `${process.env.NEXT_PUBLIC_PLANNLY_API_URL}/companies`;

// Asynchronous function to fetch company details
const getCompany = async (companyId: string) => {
  const response = await axios.get(`${baseUrl}/${companyId}`);
  return response.data || null;
};

const Onboarding = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector(currentStepSelector);
  const params = useSearchParams();
  const companyId = params.get('company_id');

  useEffect(() => {
    if (companyId) {
      getCompany(companyId).then(company => {
        if (company) {
          dispatch(setCompanyDetails(company));
          dispatch(setStep(2));
        }
      });
    }
  }, [companyId]);

  return (
    <>
      <OnboardingHeader />
      <div className="flex flex-col items-center justify-center h-full w-full lg:max-w-[1440px]">
        {stepContent[currentStep]}
      </div>
    </>
  );
};

export default Onboarding;
