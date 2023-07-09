import { Button } from "@/components/button";
import Hero from "../hero";
import { icons } from "@/lib/icons";
import { FileUpload } from "@/components/file-upload";
import { useEffect, useState } from "react";
import TabButton from "../../../../components/tab-button";
import BenefitCard from "./benefit-card";
import { BenefitAddModal } from "./benefit-add-modal";

const testBenefits: any = [
  {
    title: 'Retirement Plans',
    description: 'Secure your future with our comprehensive retirement plans. We offer various options that will help you grow your retirement savings for a financially stable retirement.',
    icon: icons.add,
    isPrimary: true,
    howToEnroll: 'Please contact our HR department or visit our website for information on how to enroll.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: true,
    logo: '/images/health-insurance.svg',
    eligibility: 'All full-time employees are eligible to enroll.',
    integration: null
  },
  {
    title: 'Health Insurance',
    description: 'Our health insurance plans provide comprehensive medical coverage to protect you and your family against health-related uncertainties. Gain peace of mind knowing you\'re covered.',
    icon: icons.add,
    isPrimary: true,
    howToEnroll: 'Please contact our HR department or visit our website for information on how to enroll.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'All full-time employees are eligible to enroll.',
    integration: null
  },
  {
    title: 'Flexible Working Arrangements',
    description: 'Experience the convenience and work-life balance brought by our flexible working arrangements. Adjust your work schedule to fit your lifestyle and personal commitments.',
    icon: icons.add,
    isPrimary: true,
    howToEnroll: 'Please contact your supervisor or HR department for information on how to request flexible working arrangements.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'All full-time employees are eligible to request flexible working arrangements.',
    integration: null
  },
  {
    title: 'Employee Assistance Programs (EAP)',
    description: 'Our Employee Assistance Programs (EAP) provide confidential counseling and support services to help employees navigate through personal or work-related challenges.',
    icon: icons.add,
    isPrimary: true,
    howToEnroll: 'Please contact our HR department or visit our website for information on how to access these services.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'All full-time employees are eligible to use our EAP services.',
    integration: null
  },
  {
    title: 'Professional Development and Training',
    description: 'Foster your professional growth with our development and training programs. Gain new skills, enhance existing ones, and prepare for future roles within our organization.',
    icon: icons.add,
    isPrimary: false,
    howToEnroll: 'Please contact our HR department or visit our website for information on available training programs and how to enroll.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'All full-time employees are eligible to enroll.',
    integration: null
  },
  {
    title: 'Tuition Reimbursement',
    description: 'Invest in your education without the financial burden. Our tuition reimbursement program provides financial assistance for furthering your education related to your field.',
    icon: icons.add,
    isPrimary: false,
    howToEnroll: 'Please contact our HR department or visit our website for information on how to apply for tuition reimbursement.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'All full-time employees are eligible to apply after six months of service.',
    integration: null
  },
  {
    title: 'Employee Wellness Programs',
    description: 'Promote a healthy lifestyle with our Employee Wellness Programs. Join fitness classes, nutritional workshops, and other wellness activities to maintain a healthy work-life balance.',
    icon: icons.add,
    isPrimary: false,
    howToEnroll: 'Please contact our HR department or visit our website for information on current wellness programs and how to participate.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'All full-time employees are eligible to participate.',
    integration: null
  },
  {
    title: 'Commuter Benefits',
    description: 'Make your daily commute more manageable with our commuter benefits. Save on travel costs and enjoy other perks that will make your commute to work easier and more comfortable.',
    icon: icons.add,
    isPrimary: false,
    howToEnroll: 'Please contact our HR department or visit our website for information on how to enroll in our commuter benefits program.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'All full-time employees are eligible to enroll.',
    integration: null
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
            className="w-[200px]"
          />
          <Button className="w-[200px] text-basic_grey_1" text="Add Benefit" icon={icons.add} onClick={toggleModal} />
        </div>
      </div>
    )
  }


  return (
    <div className="flex flex-col justify-between items-end w-full h-full relative overflow-hidden">
      {benefits.length ? renderBenefits() : renderNullState()}
      {
        benefits.length ? <div className="absolute bottom-0 bg-basic_grey_5 w-full h-[100px] flex justify-end">
          <Button className="w-[200px] max-h-[40px] text-basic_grey_1" text="Continue" isPrimary onClick={() => console.log('conitune')} />
        </div> : null

      }
      <BenefitAddModal isOpen={isModalOpen} onClose={toggleModal} onSave={handleAddBenefit} />
    </div>

  )



}

export default BenefitsMap;