import { Input } from "@/components/input";
import Hero from "./hero";
import { CheckBox } from "@/components/checkbox";
import { Button } from "@/components/button";

const CompanyDetails = () => {
  return (
    <>
      <Hero image="/illustrations/company-details-illustration.svg" title="Glad to see you here!" description="Please provide the following details about your company" />
      <form className="w-[720px] flex justify-between gap-4 flex-wrap">
        <Input label="Company name" placeholder="company name" name={""} value={""} className="w-[340px]" />
        <Input label="Federal Tax Idea (EIN)" placeholder="Federal Tax Idea (EIN)" type="password" name={""} value={""} className="w-[340px]" />
        <Input label="Company Size" placeholder="Company Size" name={""} value={""} className="w-[340px]" />
        <Input label="SIC Code" placeholder="SIC Code" type='password' name={""} value={""} className="w-[340px]" />
        <Input label="Website" placeholder="Website" name={""} value={""} className="w-[340px]" />
        <Input label="Entity type" placeholder="Entity type" name={""} value={""} className="w-[340px]" />
        <Input label="Address" placeholder="Address" name={""} value={""} className="w-[340px]" />
        <Input label="Nature of business" placeholder="Nature of business" name={""} value={""} className="w-[340px]" />
        <CheckBox label="Limit sign-up to only the Users with the domain" name={""} value={1} currentValue={1} onChange={() => console.log('checkbox')} />
        <Button className="w-[340px] mx-auto mt-[24px]" text="Continue" isPrimary disabled />
      </form>
    </>
  );
}

export default CompanyDetails;