'use client';
import Tabs from "@/components/tabs/tabs";
import Hero from "@/containers/onboarding/company/hero";
import { useState } from "react";
import BenefitCard from "@/components/employee-benefit-card";
import { icons } from "@/lib/icons";

export const testBenefits: any = [
  {
    title: 'Retirement Plans',
    description: 'Secure your future with our comprehensive retirement plans. We offer various options that will help you grow your retirement savings for a financially stable retirement.',
    icon: icons.add,
    isPrimary: false,
    howToEnroll: 'Please contact our HR department or visit our website for information on how to enroll.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'All full-time employees are eligible to enroll.',
    integration: null,
    enrolled: false,
    recommneded: true
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
    integration: null,
    enrolled: true,
    recommended: null
  },
  {
    title: 'Vision Insurance',
    description: "Our vision insurance plan provides comprehensive coverage to protect you and your family's eye health.From regular eye check- ups to corrective treatments, gain peace of mind knowing you're covered.",
    icon: icons.add,
    isPrimary: true,
    howToEnroll: 'Please contact our HR department or visit our website for information on how to enroll.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'All full-time employees are eligible to enroll.',
    integration: null,
    enrolled: true,
    recommended: null
  },
  {
    title: 'Dental Insurance',
    description: "Our dental insurance plan provides comprehensive coverage to safeguard the oral health of you and your family. It covers a range of dental services, from routine check-ups and cleanings to more complex procedures. With this coverage, you can maintain good oral health without worrying about the cost.",
    icon: icons.add,
    isPrimary: true,
    howToEnroll: 'Please contact our HR department or visit our website for information on how to enroll.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'All full-time employees are eligible to enroll.',
    integration: null,
    enrolled: true,
    recommended: null
  },
  {
    title: 'Flexible Working',
    description: 'Experience the convenience and work-life balance brought by our flexible working arrangements. Adjust your work schedule to fit your lifestyle and personal commitments.',
    icon: icons.add,
    isPrimary: false,
    howToEnroll: 'Please contact your supervisor or HR department for information on how to request flexible working arrangements.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'All full-time employees are eligible to request flexible working arrangements.',
    integration: null,
    enrolled: false,
    recommended: null
  },
  {
    title: 'Development and Training',
    description: 'Foster your professional growth with our development and training programs. Gain new skills, enhance existing ones, and prepare for future roles within our organization.',
    icon: icons.add,
    isPrimary: false,
    howToEnroll: 'Please contact our HR department or visit our website for information on available training programs and how to enroll.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'All full-time employees are eligible to enroll.',
    integration: null,
    enrolled: false,
    recommended: null
  },
  {
    title: 'EAP',
    description: 'Our Employee Assistance Programs (EAP) provide confidential counseling and support services to help employees navigate through personal or work-related challenges.',
    icon: icons.add,
    isPrimary: false,
    howToEnroll: 'Please contact our HR department or visit our website for information on how to access these services.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'All full-time employees are eligible to use our EAP services.',
    integration: null,
    enrolled: true,
    recommended: true
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
    integration: null,
    enrolled: true,
    recommended: null
  },
  {
    title: 'Wellness Programs',
    description: 'Promote a healthy lifestyle with our Employee Wellness Programs. Join fitness classes, nutritional workshops, and other wellness activities to maintain a healthy work-life balance.',
    icon: icons.add,
    isPrimary: false,
    howToEnroll: 'Please contact our HR department or visit our website for information on current wellness programs and how to participate.',
    howToEnrollLink: 'https://www.google.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'All full-time employees are eligible to participate.',
    integration: null,
    enrolled: false,
    recommended: true
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
    integration: null,
    enrolled: true,
    recommended: null
  },

]

const BenefitsContainer = () => {
  const primaryBenefits = testBenefits.filter((benefit: any) => benefit.isPrimary)
  const voluntaryBenefits = testBenefits.filter((benefit: any) => !benefit.isPrimary)
  const recommendedBenefits = testBenefits.filter((benefit: any) => benefit.recommended)
  const [activeTab, setActiveTab] = useState('primary')

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
  ]

  const benefits: any = {
    primary: primaryBenefits,
    voluntary: voluntaryBenefits,
    recommended: recommendedBenefits,
  }
  const benefitsToRender = benefits[activeTab]

  const renderBenefits = () => {
    return (
      <div className="w-full flex justify-center md:justify-start flex-wrap gap-6">
        {
          benefitsToRender?.map((benefit: any) => {
            return <BenefitCard key={benefit.title} benefit={benefit} />
          })
        }
      </div>
    )
  }

  const renderNullState = () => {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center m-auto mt-[150px]">
        <Hero image="/icons/benefits/benefits-null.svg" title="No benefits available!" description="Your organization did not specified any benefits yet!" />
      </div>
    )
  }

  return (
    <div className="">
      <h2 className="font-medium mb-[20px]">Benefits</h2>
      <Tabs tabs={tabs} />
      <div className="mt-[32px]">
        {benefitsToRender?.length > 0 ? renderBenefits() : renderNullState()}
      </div>
    </div>
  );
}

export default BenefitsContainer;