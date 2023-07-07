import { Button } from "@/components/button";
import Hero from "../hero";
import { icons } from "@/lib/icons";
import { FileUpload } from "@/components/file-upload";
import { useEffect, useState } from "react";
import TabButton from "./tab-button";
import BenefitCard from "./benefit-card";

const testBenefits: any = [
  {
    title: 'Health Insurance',
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
    title: 'Health Insurance',
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
    title: 'Health Insurance',
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
    title: 'Health Insurance',
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
    title: 'Health Insurance',
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
    title: 'Health Insurance',
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
    title: 'Health Insurance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa volutpat aliquam.',
    icon: icons.add,
    isPrimary: false,
    howToEnroll: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa volutpat aliquam.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue',
  },
  {
    title: 'Health Insurance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa volutpat aliquam.',
    icon: icons.add,
    isPrimary: false,
    howToEnroll: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa volutpat aliquam.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue',
  },
  {
    title: 'Health Insurance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa volutpat aliquam.',
    icon: icons.add,
    isPrimary: false,
    howToEnroll: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue nec massa volutpat aliquam.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Nunc eget augue',
  },
]


const BenefitsMap = () => {
  const [primaryBenefits, setPrimaryBenefits] = useState<any>([])
  const [voluntaryBenefits, setVoluntaryBenefits] = useState<any>([])
  const [activeTab, setActiveTab] = useState<any>('primary')

  useEffect(() => {
    // filter benefits based on active tab
    const filterPrimaryBenefits = testBenefits.filter((benefit: any) => benefit.isPrimary)
    const filteredVoluntryBenefits = testBenefits.filter((benefit: any) => !benefit.isPrimary)
    setPrimaryBenefits(filterPrimaryBenefits)
    setVoluntaryBenefits(filteredVoluntryBenefits)
  }, [activeTab])


  const handleAddBenefit = () => {
    // setBenefits([...benefits, ...testBenefits])
  }

  const handleUploadBenefit = (file: any) => {
    console.log(file)
    // setBenefits([...benefits, ...testBenefits])
  }

  const benefits = activeTab === 'primary' ? primaryBenefits : voluntaryBenefits

  const renderBenefits = () => {
    return (
      <div className="flex flex-col items-strech gap-4 h-full w-full pt-[50px]">
        <h2>Add Benefits to Proceed</h2>
        <div className="flex justify-center items-center min-h-[40px] border border-2 border-basic_grey_10 bg-basic_white rounded-[24px] w-[320px]">
          <TabButton text="Primary" isActive={activeTab === 'primary'} onClick={() => setActiveTab('primary')} />
          <TabButton text="Voluntry" isActive={activeTab === 'voluntry'} onClick={() => setActiveTab('voluntry')} />
        </div>
        <div className="my-[32px] flex flex-wrap justify-between max-h-[75%] max-w-[1440px] overflow-x-scroll">
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
      <>
        <Hero image="/illustrations/upload-benefits-illustration.svg" title="Upload your benefits guide" description="Upload a PDF file of your benefits or start adding manually" />
        <div className="flex gap-4">
          <FileUpload
            onChange={(file) => handleUploadBenefit(file[0])}
            acceptedFileTypes='application/pdf, .docx'
            text='Upload PDF'
          />
          <Button className="w-[200px] text-basic_grey_1" text="Add Benefit" isSmallBtn icon={icons.add} />
        </div>
      </>
    )
  }


  return benefits.length ? renderBenefits() : renderNullState()


}

export default BenefitsMap;