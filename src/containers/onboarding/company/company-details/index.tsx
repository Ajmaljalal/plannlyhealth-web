import { Input } from "@/components/input";
import Hero from "../hero";
import { CheckBox } from "@/components/checkbox";
import { Button } from "@/components/button";
import { useState } from "react";
import { useDispatch, useSelector } from "@/store/store";
import { selectCompanyDetails, setCompanyDetails, setStep } from "@/store/company";
import axios from "axios";
import { useRouter } from "next/navigation";

const CompanyDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const company = useSelector(selectCompanyDetails)
  const [companyData, setCompany] = useState<any>(company || {
    name: '',
    company_size: '',
    website: '',
    support_email: '',
    entity_type: 'hospital',
    address: '',
    restrict_signup_to_domain_only: false,
    integrations: null,
  });

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCompany({ ...companyData, [name]: checked });
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    if (name === 'restrict_signup_to_domain_only') return;
    setCompany({ ...companyData, [name]: value });
  };

  const handleContinue = async (e: any) => {
    e.preventDefault();
    /// TODO: check if current user is a super admin
    const baseUrl = `${process.env.NEXT_PUBLIC_PLANNLY_API_URL}/companies`
    const isEmpty = Object.values(companyData).some(x => (x === null || x === ''));
    if (isEmpty) return;
    try {
      const newCompanyData = await axios.post(baseUrl, companyData);
      const newCompany = newCompanyData.data;
      dispatch(setCompanyDetails(newCompany));
      router.push(`/onboarding/company?company_id=${newCompany.id}`);
      dispatch(setStep(2));
    } catch (error) {
      console.log(error);
    }
  };

  const isBtnDisabled = companyData.name === '' ||
    companyData.company_size === '' ||
    companyData.website === '' ||
    companyData.support_email === '' ||
    companyData.address === ''

  return (
    <>
      <Hero image="/illustrations/company-details-illustration.svg" title="Glad to see you here!" description="Please provide the following details about your hospital" />
      <form className="w-[720px] flex justify-between gap-4 flex-wrap" onChange={handleChange} onSubmit={handleContinue}>
        <Input label="Company name" placeholder="Company name" name='name' value={companyData.name} className="w-[340px]" />
        <Input label="Company Size" placeholder="Company Size" name="company_size" value={companyData.company_size} className="w-[340px]" />
        <Input label="Support Email" placeholder="Support Email" name="support_email" value={companyData.support_email} className="w-[340px]" />
        <Input label="Website" placeholder="Website" name="website" value={companyData.website} className="w-[340px]" />
        <Input label="Entity type" placeholder="Entity type" name="entity_type" value={companyData.entity_type} className="w-[340px]" />
        <Input label="Address" placeholder="Address" name="address" value={companyData.address} className="w-[340px]" />
        <CheckBox label="Limit sign-up to only the employees with the company domain" name="restrict_signup_to_domain_only" value={companyData.onlyCompanyDomain} checked={companyData.onlyCompanyDomain} onChange={handleCheckBoxChange} />
        <Button className="w-[340px] mx-auto mt-[24px]" text="Continue" isPrimary disabled={isBtnDisabled} />
      </form>
    </>
  );
}

export default CompanyDetails;