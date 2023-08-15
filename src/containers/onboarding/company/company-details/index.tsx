import { Input } from "@/components/input";
import Hero from "../hero";
import { CheckBox } from "@/components/checkbox";
import { Button } from "@/components/button";
import { useState } from "react";
import { useDispatch } from "@/store/store";
import { setCompanyDetails, setStep } from "@/store/company";
import axios from "axios";

const CompanyDetails = () => {
  const dispatch = useDispatch();
  const [company, setCompany] = useState<any>({
    name: '',
    company_size: '',
    website: '',
    support_email: '',
    entity_type: 'hospital',
    address: '',
    restrict_signup_to_domain_only: false
  });

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCompany({ ...company, [name]: checked });
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    if (name === 'restrict_signup_to_domain_only') return;
    setCompany({ ...company, [name]: value });
  };

  const handleContinue = async (e: any) => {
    e.preventDefault();
    /// TODO: check if current user is a super admin
    const baseUrl = `${process.env.NEXT_PUBLIC_PLANNLY_API_URL}/companies`
    const isEmpty = Object.values(company).some(x => (x === null || x === ''));
    if (isEmpty) return;
    try {
      const newCompany = await axios.post(baseUrl, company);
      console.log(newCompany);
      dispatch(setStep(2));
      dispatch(setCompanyDetails(company));
    } catch (error) {
      console.log(error);
    }
  };

  const isBtnDisabled = company.name === '' ||
    company.company_size === '' ||
    company.website === '' ||
    company.support_email === '' ||
    company.address === ''

  return (
    <>
      <Hero image="/illustrations/company-details-illustration.svg" title="Glad to see you here!" description="Please provide the following details about your hospital" />
      <form className="w-[720px] flex justify-between gap-4 flex-wrap" onChange={handleChange} onSubmit={handleContinue}>
        <Input label="Company name" placeholder="Company name" name='name' value={company.name} className="w-[340px]" />
        <Input label="Company Size" placeholder="Company Size" name="company_size" value={company.company_size} className="w-[340px]" />
        <Input label="Support Email" placeholder="Support Email" name="support_email" value={company.support_email} className="w-[340px]" />
        <Input label="Website" placeholder="Website" name="website" value={company.website} className="w-[340px]" />
        <Input label="Entity type" placeholder="Entity type" name="entity_type" value={company.entity_type} className="w-[340px]" />
        <Input label="Address" placeholder="Address" name="address" value={company.address} className="w-[340px]" />
        <CheckBox label="Limit sign-up to only the employees with the company domain" name="restrict_signup_to_domain_only" value={company.onlyCompanyDomain} checked={company.onlyCompanyDomain} onChange={handleCheckBoxChange} />
        <Button className="w-[340px] mx-auto mt-[24px]" text="Continue" isPrimary disabled={isBtnDisabled} />
      </form>
    </>
  );
}

export default CompanyDetails;