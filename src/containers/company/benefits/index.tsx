'use client';
import { Button } from "@/components/button";
import FileUpload from "@/components/file-upload";
import Tabs from "@/components/tabs/tabs";
import { BenefitAddModal } from "@/containers/onboarding/company/benefits/benefit-add-modal";
import Hero from "@/containers/onboarding/company/hero";
import { icons } from "@/lib/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "@/store/store";
import { benefitsSelector, companyDetailsSelector, setBenefits, setCompanyDetails } from "@/store/company";
import { testBenefits } from "@/containers/onboarding/company/benefits";
import BenefitCard from "@/components/company-benefit-card";
import axios from "axios";

const baseUrl = `${process.env.NEXT_PUBLIC_PLANNLY_API_URL}/benefits`

const getCompany = async (companyId: string) => {
  const company = await axios.get(`${process.env.NEXT_PUBLIC_PLANNLY_API_URL}/companies/${companyId}`)
  return company.data
}


const BenefitsContainer = () => {
  const company: any = useSelector(companyDetailsSelector)
  const allBenefits: any = useSelector(benefitsSelector)
  const primaryBenefits = allBenefits?.filter((benefit: any) => benefit.is_primary && !benefit.archived)
  const voluntaryBenefits = allBenefits?.filter((benefit: any) => !benefit.is_primary && !benefit.archived)
  const recommendedBenefits = allBenefits?.filter((benefit: any) => !benefit.is_primary && !benefit.archived)
  const archivedBenefits = allBenefits?.filter((benefit: any) => benefit.archived)
  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState('primary')
  const [isModalOpen, setIsModalOpen] = useState<any>(false)

  const getBenefits = async (companyId: string) => {
    const beneiftsFromDb = await axios.get(`${baseUrl}/company/${companyId}`)
    const { data } = beneiftsFromDb
    dispatch(setBenefits(data))
  }


  useEffect(() => {
    if (!company.id) {
      getCompany('01b9c104-1aff-45fa-82dc-1c647ebb12d6').then((companyData) => {
        dispatch(setCompanyDetails(company))
        getBenefits(companyData.id)
      })
    } else {
      getBenefits(company.id)
    }
  }, [])


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleAddBenefit = async (newBenefit: any) => {
    newBenefit = activeTab === 'primary' ? { ...newBenefit, is_primary: true, company_id: company.id } : { ...newBenefit, is_primary: false, company_id: company.id }
    await axios.post(baseUrl, newBenefit);
    const benefitsData = await axios.get(`${baseUrl}/company/${company.id}`)
    const newBenefits = benefitsData.data
    dispatch(setBenefits([...newBenefits]))
  }

  const handleUploadBenefit = (file: any) => {
    dispatch(setBenefits([...allBenefits, ...testBenefits]))
  }


  const handleTabClick = (text: string) => {
    setActiveTab(text.toLocaleLowerCase())
  }

  const tabs = [
    {
      text: 'Primary',
      count: primaryBenefits?.length || 0,
      isActive: activeTab === 'primary',
      onClick: () => handleTabClick('primary')
    },
    {
      text: 'Voluntary',
      count: voluntaryBenefits?.length || 0,
      isActive: activeTab === 'voluntary',
      onClick: () => handleTabClick('voluntary')
    },
    // {
    //   text: 'Recommended',
    //   count: recommendedBenefits?.length || 0,
    //   isActive: activeTab === 'recommended',
    //   onClick: () => handleTabClick('recommended'),
    // },
    {
      text: 'Archived',
      count: archivedBenefits?.length || 0,
      isActive: activeTab === 'archived',
      onClick: () => handleTabClick('archived'),
    }
  ]

  const benefits: any = {
    primary: primaryBenefits,
    voluntary: voluntaryBenefits,
    recommended: recommendedBenefits,
    archived: archivedBenefits
  }
  const benefitsToRender = benefits[activeTab]

  const renderBenefits = () => {
    return (
      <div className="w-full flex justify-between flex-wrap gap-4">
        {
          benefitsToRender?.map((benefit: any) => {
            return <BenefitCard key={benefit.title} benefit={benefit} />
          })
        }
      </div>
    )
  }



  const renderNullState = () => {
    if (activeTab === 'archived') {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center m-auto mt-[200px]">
          <Hero image="/icons/benefits/benefits-null.svg" title="No archived benefits" description="Archived benefits will appear here" />
        </div>
      )
    } else {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center m-auto mt-[200px]">
          <Hero image="/icons/benefits/benefits-null.svg" title="Upload your benefits guide" description="Upload a PDF file or start adding manually" />
          <div className="flex gap-4">
            <FileUpload
              onChange={(file) => handleUploadBenefit(file[0])}
              acceptedFileTypes='application/pdf, .docx'
              text='Upload PDF'
              className="w-[200px]"
            />
            <Button className="w-[200px]" text="Add Benefit" icon={icons.add} onClick={toggleModal} />
          </div>
        </div>
      )
    }
  }

  return (
    <div className="">
      <h2 className="font-medium mb-[20px]">Benefits</h2>
      <Tabs tabs={tabs} />
      <div className="mt-[32px]">
        {benefitsToRender?.length > 0 ? renderBenefits() : renderNullState()}
      </div>
      <BenefitAddModal isOpen={isModalOpen} onClose={toggleModal} onSave={handleAddBenefit} />
    </div>
  );
}

export default BenefitsContainer;