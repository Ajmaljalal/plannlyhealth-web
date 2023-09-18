
'use client';
import OnboardingHeader from "./header";
import CompanyDetails from "./company-details";
import EmployeesList from "./employees-upload";
import { useSelector } from "react-redux";
import { currentStepSelector, setCompanyDetails, setStep } from "@/store/company";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "@/store/store";
import useSWR from 'swr';

const stepContent: Record<number, JSX.Element> = {
  1: <CompanyDetails />,
  2: <EmployeesList />,
};

// Define the fetcher function using axios or the default fetch API.
const fetcher = (url: string) => fetch(url).then(res => res.json());

const Oboarding = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector(currentStepSelector);
  const params = useSearchParams();
  const companyId = params.get('company_id');

  const { data: company, error, isLoading } = useSWR(companyId ? `${process.env.NEXT_PUBLIC_PLANNLY_API_URL}/companies/${companyId}` : null, fetcher);

  useEffect(() => {
    if (company) {
      dispatch(setCompanyDetails(company));
      dispatch(setStep(2));
    }
    if (error) {
      console.error("Failed to fetch company data:", error);
    }
  }, [company, error]);

  return (
    <>
      <OnboardingHeader />
      <div className="flex flex-col items-center justify-center h-full w-full lg:max-w-[1440px]">
        {isLoading ? <div>Loading...</div> : stepContent[currentStep]}
      </div>
    </>
  );
}

export default Oboarding;

