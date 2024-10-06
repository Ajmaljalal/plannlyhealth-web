import { Button } from "@/components/button"
import { CheckBox } from "@/components/checkbox"
import { Input } from "@/components/input"
import { companyDetailsSelector, setCompanyDetails } from "@/store/company"
import { useDispatch, useSelector } from "@/store/store"
import { useState } from "react"


const inputStyle = 'max-w-[340px] min-w-[335px]'

const Company = () => {
  const company = useSelector(companyDetailsSelector)
  const [companyState, setCompanyState] = useState<any>(company)
  const dispatch = useDispatch()

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const updatedCompany = { ...companyState, [name]: checked };
    setCompanyState(updatedCompany)
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    if (name === 'onlyCompanyDomain') return;
    const updatedCompany = { ...companyState, [name]: value };
    setCompanyState(updatedCompany);
  };

  const handleSave = (e: any) => {
    e.preventDefault();
    dispatch(setCompanyDetails(companyState));
  };

  return (
    <form className='max-w-[692px] mt-[56px] flex gap-12 flex-wrap' onChange={handleChange} onSubmit={handleSave}>
      <div className='flex w-full gap-4 flex-wrap'>
        <Input label="Company name" placeholder="company name" name='name' value={companyState?.name} className={inputStyle} />
        {/* <Input label="Federal Tax Identification(EIN)" placeholder="Federal Tax Identification (EIN)" type="password" name='ein' value={companyState?.ein} className={inputStyle} /> */}
        <Input label="Company Size" placeholder="Company Size" name="company_size" value={companyState?.company_size} className={inputStyle} />
        {/* <Input label="SIC Code" placeholder="SIC Code" type='password' name="sic_code" value={companyState?.sic_code} className={inputStyle} /> */}
        <Input label="Website" placeholder="Website" name="website" value={companyState?.website} className={inputStyle} />
        <Input label="Entity type" placeholder="Entity type" name="entity_type" value={companyState?.entity_type} className={inputStyle} />
        <Input label="Address" placeholder="Address" name="address" value={companyState?.address} className={inputStyle} />
        <Input label="Nature of business" placeholder="Nature of business" name="nature_of_business" value={companyState?.nature_of_business} className={inputStyle} />
        <CheckBox label="Limit sign-up to only the employees with the company domain" name="restrict_signup_to_domain_only" value={companyState?.restrict_signup_to_domain_only} checked={companyState?.restrict_signup_to_domain_only} onChange={handleCheckBoxChange} />
      </div>
      <div className='flex w-full justify-end mr-[5px]'>
        <Button text='Save' className='mt-[48px] w-[100px] slef-end' isSmallBtn isPrimary />
      </div>
    </form>
  )

}

export default Company