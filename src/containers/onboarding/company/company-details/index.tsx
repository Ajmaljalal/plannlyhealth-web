import { Input } from "@/components/input";
import Hero from "../hero";
import { CheckBox } from "@/components/checkbox";
import { Button } from "@/components/button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "@/store/store";
import { selectCompanyDetails, setCompanyDetails, setStep } from "@/store/company";
import axios from "axios";
import { useRouter } from "next/navigation";
import { isObjectsEqual } from "@/lib/helpers";

const DEFAULT_COMPANY_DATA = {
  name: '',
  company_size: '',
  website: '',
  support_email: '',
  address: '',
  entity_type: 'hospital',
  restrict_signup_to_domain_only: false
};

const CompanyDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push: navigate } = useRouter();
  const company: any = useSelector(selectCompanyDetails);
  const [companyData, setCompanyData] = useState<any>(company);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!company.id) {
      setCompanyData(DEFAULT_COMPANY_DATA);
    }
  }, [company]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name !== 'restrict_signup_to_domain_only') {
      setCompanyData((prev: any) => ({ ...prev, [name]: value }));
    }
  };

  const handleCheckBoxChange = (e: any) => {
    const { name, checked } = e.target;
    setCompanyData((prev: any) => ({ ...prev, [name]: checked }));
  };

  const isFormValid = () => {
    return !Object.entries(companyData).some(([key, value]) => {
      if (key === 'restrict_signup_to_domain_only') return false; // ignore this field
      return !value?.toString().trim();
    });
  };

  const handleContinue = async (e: any) => {
    e.preventDefault();
    if (company && isObjectsEqual(company, companyData)) {
      navigate(`/onboarding/company?company_id=${company.id}`)
      dispatch(setStep(2));
      return
    }
    setIsLoading(true);

    if (isFormValid()) {
      const baseUrl = `${process.env.NEXT_PUBLIC_PLANNLY_API_URL}/companies`;
      try {
        const { data: newCompany } = await axios.post(baseUrl, companyData);
        dispatch(setCompanyDetails(newCompany));
        navigate(`/onboarding/company?company_id=${newCompany.id}`);
        dispatch(setStep(2));
      } catch (error) {
        console.error("Failed to submit company data:", error);
      }
    }

    setIsLoading(false);
  };

  const isBtnDisabled = !isFormValid();


  return (
    <>
      <Hero image="/illustrations/company-details-illustration.svg" title="Glad to see you here!" description="Please provide the following details about your hospital" />
      <form className="w-[720px] flex justify-between gap-4 flex-wrap" onChange={handleChange} onSubmit={handleContinue}>
        <Input label="Company name" placeholder="Company name" name='name' value={companyData?.name} className="w-[340px]" />
        <Input label="Company Size" placeholder="Company Size" name="company_size" value={companyData?.company_size} className="w-[340px]" />
        <Input label="Support Email" placeholder="Support Email" name="support_email" value={companyData?.support_email} className="w-[340px]" />
        <Input label="Website" placeholder="Website" name="website" value={companyData?.website} className="w-[340px]" />
        <Input label="Entity type" placeholder="Entity type" name="entity_type" value={companyData?.entity_type} className="w-[340px]" />
        <Input label="Address" placeholder="Address" name="address" value={companyData?.address} className="w-[340px]" />
        <CheckBox label="Limit sign-up to only the employees with the company domain" name="restrict_signup_to_domain_only" value={companyData?.restrict_signup_to_domain_only} checked={companyData?.restrict_signup_to_domain_only} onChange={handleCheckBoxChange} />
        <Button className="w-[340px] mx-auto mt-[24px]" text="Continue" isPrimary disabled={isBtnDisabled} isLoading={isLoading} />
      </form>
    </>
  );
}

export default CompanyDetails;
