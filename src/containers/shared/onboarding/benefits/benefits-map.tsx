import { Button } from "@/components/button";
import Hero from "../hero";
import { icons } from "@/lib/icons";
import { FileUpload } from "@/components/file-upload";
import { useEffect, useState } from "react";
import TabButton from "./tab-button";
import BenefitCard from "./benefit-card";
import { BenefitAddModal } from "./benefit-add-modal";

const testBenefits: any = [
  {
    title: 'Retirement Plans',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa volutpat aliquam.',
    icon: icons.add,
    isPrimary: true,
    howToEnroll: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa volutpat aliquam.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: true,
    logo: '/images/health-insurance.svg',
    eligibility: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa',
  },
  {
    title: 'Health Insurance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa volutpat aliquam.',
    icon: icons.add,
    isPrimary: true,
    howToEnroll: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa volutpat aliquam.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa',
  },
  {
    title: 'Flexible Working Arrangements',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa volutpat aliquam.',
    icon: icons.add,
    isPrimary: true,
    howToEnroll: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa volutpat aliquam.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa',
  },
  {
    title: 'Employee Assistance Programs (EAP)',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa volutpat aliquam.',
    icon: icons.add,
    isPrimary: true,
    howToEnroll: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa volutpat aliquam.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa',

  },
  {
    title: 'Professional Development and Training',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa volutpat aliquam.',
    icon: icons.add,
    isPrimary: false,
    howToEnroll: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa volutpat aliquam.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa',
  },
  {
    title: 'Tuition Reimbursement',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa volutpat aliquam.',
    icon: icons.add,
    isPrimary: false,
    howToEnroll: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa volutpat aliquam.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa',
  },
  {
    title: 'Employee Wellness Programs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa volutpat aliquam.',
    icon: icons.add,
    isPrimary: false,
    howToEnroll: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa volutpat aliquam.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa',
  },
  {
    title: 'Commuter Benefits',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa volutpat aliquam.',
    icon: icons.add,
    isPrimary: false,
    howToEnroll: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa volutpat aliquam.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa',
  },

]

const filterPrimaryBenefits = testBenefits.filter((benefit: any) => benefit.isPrimary)
const filteredVoluntryBenefits = testBenefits.filter((benefit: any) => !benefit.isPrimary)

const BenefitsMap = () => {
  const [primaryBenefits, setPrimaryBenefits] = useState<any>([])
  const [voluntaryBenefits, setVoluntaryBenefits] = useState<any>([])
  const [activeTab, setActiveTab] = useState<any>('primary')
  const [isModalOpen, setIsModalOpen] = useState<any>(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }


  const handleAddBenefit = (newBenefit: any) => {
    // add newBenefit to primaryBenefits or voluntaryBenefits
    if (activeTab === 'primary') {
      setPrimaryBenefits([...primaryBenefits, newBenefit])
    }
    else {
      setVoluntaryBenefits([...voluntaryBenefits, newBenefit])
    }

  }

  const handleUploadBenefit = (file: any) => {
    console.log(file)
    setPrimaryBenefits([...primaryBenefits, ...filterPrimaryBenefits])
    setVoluntaryBenefits([...voluntaryBenefits, ...filteredVoluntryBenefits])
  }

  const benefits = activeTab === 'primary' ? primaryBenefits : voluntaryBenefits
  const addBenefitBtnText = activeTab === 'primary' ? 'Add Primary Benefit' : 'Add Voluntary Benefit'

  const renderBenefits = () => {
    return (
      <div className="flex flex-col items-strech gap-4 w-full pt-[50px]">
        <h2>Add Benefits to Proceed</h2>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center min-h-[40px] max-h-[40px] border border-2 border-basic_grey_10 bg-basic_white rounded-[24px] w-[320px]">
            <TabButton text="Primary" count={primaryBenefits.length} isActive={activeTab === 'primary'} onClick={() => setActiveTab('primary')} />
            <TabButton text="Voluntry" count={voluntaryBenefits.length} isActive={activeTab === 'voluntry'} onClick={() => setActiveTab('voluntry')} />
          </div>
          <div className="flex justify-center items-center mt-[16px]">
            <Button className="" text={addBenefitBtnText} isPrimary icon={icons.addLight} onClick={toggleModal} />
          </div>
        </div>
        <div className="mt-[32px] pb-[300px] flex flex-wrap justify-between max-h-[60%] max-w-[1440px] overflow-x-scroll">
          {
            benefits.map((benefit: any) => {
              return <BenefitCard key={benefit.title} benefit={benefit} />
            })
          }
        </div>
      </div>
    )
  }

  const renderNullState = () => {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <Hero image="/illustrations/upload-benefits-illustration.svg" title="Upload your benefits guide" description="Upload a PDF file of your benefits or start adding manually" />
        <div className="flex gap-4">
          <FileUpload
            onChange={(file) => handleUploadBenefit(file[0])}
            acceptedFileTypes='application/pdf, .docx'
            text='Upload PDF'
          />
          <Button className="w-[200px] text-basic_grey_1" text="Add Benefit" isSmallBtn icon={icons.add} onClick={toggleModal} />
        </div>
      </div>
    )
  }


  return (
    <div className="flex flex-col justify-between items-end w-full h-full relative overflow-hidden">
      {benefits.length ? renderBenefits() : renderNullState()}
      <div className="absolute bottom-0 bg-basic_grey_5 w-full h-[100px] flex justify-end">
        <Button className="w-[200px] max-h-[40px] text-basic_grey_1" text="Continue" isPrimary onClick={() => console.log('conitune')} />
      </div>
      <BenefitAddModal isOpen={isModalOpen} onClose={toggleModal} onSave={handleAddBenefit} />
    </div>

  )



}

export default BenefitsMap;