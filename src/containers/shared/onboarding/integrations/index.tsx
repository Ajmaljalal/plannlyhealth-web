import { icons } from "@/lib/icons"
import { useState } from "react"
import BenefitCard from "./benefit-card"
import TabButton from "@/components/tab-button"
import { Button } from "@/components/button"

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

const Integrations = () => {
  const [primaryBenefits, setPrimaryBenefits] = useState<any>(filterPrimaryBenefits)
  const [voluntaryBenefits, setVoluntaryBenefits] = useState<any>(filteredVoluntryBenefits)
  const [activeTab, setActiveTab] = useState<any>('primary')



  const benefits = activeTab === 'primary' ? primaryBenefits : voluntaryBenefits
  const renderIntegrations = () => {
    return (
      <div className="flex flex-col items-strech gap-4 w-full pt-[50px]">
        <h2>Add Integrations to Chosen Benefits</h2>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center min-h-[40px] max-h-[40px] border border-2 border-basic_grey_10 bg-basic_white rounded-[24px] w-[320px]">
            <TabButton text="Primary" count={primaryBenefits.length} isActive={activeTab === 'primary'} onClick={() => setActiveTab('primary')} />
            <TabButton text="Voluntry" count={voluntaryBenefits.length} isActive={activeTab === 'voluntry'} onClick={() => setActiveTab('voluntry')} />
          </div>
        </div>
        <div className="mt-[32px] pb-[300px] flex flex-wrap justify-between max-w-[1440px] overflow-x-scroll">
          {
            benefits.map((benefit: any) => {
              return <BenefitCard key={benefit.title} benefit={benefit} />
            })
          }
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-col justify-between items-end w-full h-full relative overflow-hidden">
      {renderIntegrations()}
      <div className="absolute bottom-0 bg-basic_grey_5 w-full h-[100px] flex justify-end gap-4">
        <Button className="w-[200px] max-h-[40px]" text="Skip" onClick={() => console.log('conitune')} />
        {
          benefits?.length && <Button className="w-[200px] max-h-[40px]" isPrimary text="Continue" onClick={() => console.log('conitune')} />
        }
      </div>
    </div>
  );
}

export default Integrations;