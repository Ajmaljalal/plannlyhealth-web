
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
import { COMAPANY_BASE_URL } from "@/lib/helpers/api-urls";
import { fetcher } from "@/lib/helpers";

const stepContent: Record<number, JSX.Element> = {
  1: <CompanyDetails />,
  2: <EmployeesList />,
};

// Define the fetcher function using axios or the default fetch API.

const Onboarding = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector(currentStepSelector);
  const params = useSearchParams();
  const companyId = params.get('org_id');

  const { data: company, error, isLoading } = useSWR(companyId ? `${COMAPANY_BASE_URL}/${companyId}` : null, fetcher);

  useEffect(() => {
    if (company) {
      dispatch(setCompanyDetails(company));
      dispatch(setStep(2));
    }
  }, [company]);

  return (
    <>
      <OnboardingHeader />
      <div className="flex flex-col items-center justify-center h-full w-full lg:max-w-[1440px]">
        {isLoading ? <div>Loading...</div> : stepContent[currentStep]}
      </div>
    </>
  );
}

export default Onboarding;

