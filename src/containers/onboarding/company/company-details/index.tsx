import { Input } from "@/components/input";
import Hero from "../hero";
import { CheckBox } from "@/components/checkbox";
import { Button } from "@/components/button";
import { useState } from "react";
import { useDispatch } from "@/store/store";
import { setCompanyDetails, setStep } from "@/store/company";

const CompanyDetails = () => {
  const dispatch = useDispatch();
  const [company, setCompany] = useState<any>({
    name: 'Grand Mental Health',
    ein: '23d4f5g6h7j8k9l0',
    company_size: '10000',
    sic_code: '232df342',
    website: 'https://www.grandmh.com/',
    entity_type: 'Hostipal',
    address: '1214 S Baltimore Ave, Tulsa OK 74119',
    nature_of_business: 'Mental Health',
    onlyCompanyDomain: false
  });

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCompany({ ...company, [name]: checked });
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    if (name === 'onlyCompanyDomain') return;
    setCompany({ ...company, [name]: value });
  };

  const handleContinue = (e: any) => {
    e.preventDefault();
    dispatch(setStep(2));
    dispatch(setCompanyDetails(company));
  };

  const isBtnDisabled = company.name === '' ||
    company.ein === '' ||
    company.company_size === '' ||
    company.sic_code === '' ||
    company.website === '' ||
    company.entity_type === '' ||
    company.address === '' ||
    company.nature_of_business === '';

  return (
    <>
      <Hero image="/illustrations/company-details-illustration.svg" title="Glad to see you here!" description="Please provide the following details about your company" />
      <form className="w-[720px] flex justify-between gap-4 flex-wrap" onChange={handleChange} onSubmit={handleContinue}>
        <Input label="Company name" placeholder="company name" name='name' value={company.name} className="w-[340px]" />
        <Input label="Federal Tax Identification(EIN)" placeholder="Federal Tax Identification (EIN)" type="password" name='ein' value={company.ein} className="w-[340px]" />
        <Input label="Company Size" placeholder="Company Size" name="company_size" value={company.company_size} className="w-[340px]" />
        <Input label="SIC Code" placeholder="SIC Code" type='password' name="sic_code" value={company.sic_code} className="w-[340px]" />
        <Input label="Website" placeholder="Website" name="website" value={company.website} className="w-[340px]" />
        <Input label="Entity type" placeholder="Entity type" name="entity_type" value={company.entity_type} className="w-[340px]" />
        <Input label="Address" placeholder="Address" name="address" value={company.address} className="w-[340px]" />
        <Input label="Nature of business" placeholder="Nature of business" name="nature_of_business" value={company.nature_of_business} className="w-[340px]" />
        <CheckBox label="Limit sign-up to only the employees with the company domain" name="onlyCompanyDomain" value={company.onlyCompanyDomain} checked={company.onlyCompanyDomain} onChange={handleCheckBoxChange} />
        <Button className="w-[340px] mx-auto mt-[24px]" text="Continue" isPrimary disabled={isBtnDisabled} />
      </form>
    </>
  );
}

export default CompanyDetails;