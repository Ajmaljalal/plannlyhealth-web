'use client';
import Tabs from "@/components/tabs/tabs";
import Hero from "@/containers/onboarding/company/hero";
import { useState } from "react";
import BenefitCard from "@/components/employee-benefit-card";
import { icons } from "@/lib/icons";

export const testBenefits: any = [
  {
    title: 'Medical Plan',
    description: 'Offers two comprehensive medical plans with prescription drug coverage. The HealthSmart PPO plans allow you to choose any provider but benefits are maximized with in-network providers. It includes an annual deductible, coinsurance, and an out-of-pocket maximum. Tools are available online to manage your health and claims.',
    icon: icons.add,
    isPrimary: true,
    howToEnroll: 'After registering, you can access MyDecision and Healthcare Bluebook online, or call 844.289.9963 and speak with a Referral Coordinator.',
    howToEnrollLink: 'http://myhealth.healthsmart.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'Refer to the Summary Plan Description (SPD) for complete coverage details.',
    integration: null,
    enrolled: false,
    recommended: false
  },
  {
    title: 'Vision Plan',
    description: 'The vision plan offers flexibility to choose your care provider, with maximized benefits and reduced costs for in-network (VSP) providers. Two coverage options are available: Vision Basic and Vision Enhanced Plan. Both plans offer varying coverage details for eye exams, lenses, frames, and contact lenses.',
    icon: icons.add,
    isPrimary: true,
    howToEnroll: 'Choose between the Vision Basic and Vision Enhanced Plan based on your needs. The Enhanced Plan offers the option of two pairs of glasses or two pairs of contact lenses annually.',
    howToEnrollLink: 'http://www.guardiananytime.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'Available to all eligible employees. Coverage details vary by plan and network choice.',
    integration: null,
    enrolled: false,
    recommended: false
  },
  {
    title: 'Dental Plan',
    description: 'The plan provides freedom to choose your dentist with better benefits for in-network dentists. It features a dental maximum rollover allowing unused annual benefits to be used in future years. In-network services can lead to increased rollover amounts. Coverage spans across diagnostic, preventive, basic, major, and orthodontic services with varied coverage percentages based on in-network or out-of-network providers.',
    icon: icons.add,
    isPrimary: true,
    howToEnroll: 'Employees and dependents can view their annual MRA statements and register online to locate a participating dentist or review your claims.',
    howToEnrollLink: 'http://www.guardiananytime.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/health-insurance.svg',
    eligibility: 'Refer to the benefit certificate for complete coverage details.',
    integration: null,
    enrolled: false,
    recommended: false
  },
  {
    title: 'Healthcare Flexible Spending Account',
    description: 'The Healthcare FSA allows you to set aside up to $3,050 of your income before taxes for qualified healthcare expenses for yourself, your spouse, and your children up to age 26. By utilizing this account, you save on federal income, Social Security, and Medicare taxes.',
    icon: icons.add,
    isPrimary: false,
    howToEnroll: 'You must enroll each year to participate. Rollover limits apply.',
    howToEnrollLink: 'www.isolvedbenefitservices.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: icons.benefitsPlacholder,
    eligibility: 'Available for qualified healthcare expenses. You may roll over $610 of unused funds to the next plan year. Any amount over $610 will be lost.',
    integration: null,
    enrolled: false,
    recommended: true
  },
  {
    title: 'Dependent Care Flexible Spending Account',
    description: 'The Dependent Care FSA allows you to set aside up to $5,000 (per family) of your income before taxes for qualified dependent care expenses ($2,500 if filing separate tax returns).',
    icon: icons.add,
    isPrimary: false,
    howToEnroll: 'You must enroll each year to participate. Expenses can be incurred through May 13, 2024, with claims filed by May 29, 2024.',
    howToEnrollLink: 'www.isolvedbenefitservices.com',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: icons.benefitsPlacholder,
    eligibility: 'Available for eligible dependent care expenses such as care of a dependent child under 13 or a household member who qualifies as a federal tax dependent.',
    integration: null,
    enrolled: false,
    recommended: false
  },

  {
    title: 'Life & AD&D Insurance',
    description: 'Life Insurance provides a benefit in the event of your death. AD&D Insurance offers benefits for covered accidental injuries causing dismemberment and for accidental deaths.',
    icon: icons.add,
    isPrimary: false,
    howToEnrollLink: '', // No link provided
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: icons.benefitsPlacholder,
    eligibility: 'GLMHC provides these benefits to you at NO COST through Guardian.',
    integration: null,
    enrolled: false,
    recommended: false
  },
  {
    title: 'Disability Insurance',
    description: 'Offers benefits to replace a portion of your lost income if you cannot work due to a covered injury or illness.',
    icon: icons.add,
    isPrimary: false,
    howToEnrollLink: '', // No link provided
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: icons.benefitsPlacholder,
    eligibility: 'GLMHC provides Long-Term Disability to you at NO COST through Guardian.',
    integration: null,
    enrolled: false,
    recommended: true
  },
  {
    title: 'Employee Assistance Program (EAP)',
    description: 'Offers confidential support for personal or professional problems that may interfere with work or family responsibilities.',
    icon: icons.add,
    isPrimary: false,
    howToEnrollLink: 'portal.BHSonline.com',
    howToEnrollLinkText: 'Visit MyBHS Portal',
    isActive: false,
    logo: icons.benefitsPlacholder,
    eligibility: 'Free and confidential service provided 24/7 by BHS. Help is just a phone call or text away at 800-327-2251.',
    integration: null,
    enrolled: false,
    recommended: false
  },
  {
    title: 'Work Life Services',
    description: 'BHS provides resources and referrals for childcare, eldercare, legal matters, financial counseling, and more.',
    icon: icons.add,
    isPrimary: false,
    howToEnrollLink: '', // No link provided
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: icons.benefitsPlacholder,
    eligibility: 'Contact BHS for assistance on various life needs.',
    integration: null,
    enrolled: false,
    recommended: false
  },
  {
    title: 'Telehealth',
    description: 'Access to Board Certified U.S. physicians anytime via phone and online video consultations with $0 copay.',
    icon: icons.add,
    isPrimary: false,
    howToEnrollLink: 'www.mybenefitswork.com',
    howToEnrollLinkText: 'Register & Access Tools',
    isActive: false,
    logo: icons.benefitsPlacholder,
    eligibility: 'All full-time employees and their legal dependents (up to age 26) are eligible.',
    integration: null,
    enrolled: false,
    recommended: true
  },
  {
    title: 'Voluntary Life / AD&D',
    description: 'Additional coverage through Guardian for yourself and eligible family members. Provides a one-time true open enrollment and varying levels of guaranteed issue amounts.',
    icon: icons.benefitsPlacholder,
    isPrimary: false,
    howToEnroll: 'Fill out an Evidence of Insurability form for amounts over the guaranteed issue.',
    howToEnrollLink: '/enroll/voluntary-life',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/voluntary-life.svg',
    eligibility: 'All full-time benefit eligible employees and their dependents.',
    integration: null,
    enrolled: false,
    recommended: false
  },
  {
    title: 'TransElite® Universal Life Insurance',
    description: 'Permanent life insurance offering flexibility, cash value build-up, and financial relief in the case of chronic conditions.',
    icon: icons.benefitsPlacholder,
    isPrimary: false,
    howToEnroll: 'Fill out an Evidence of Insurability form for amounts over the guaranteed issue.',
    howToEnrollLink: '/enroll/universal-life',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/universal-life.svg',
    eligibility: 'All full-time benefit eligible employees.',
    integration: null,
    enrolled: false,
    recommended: false
  },
  {
    title: 'Accident Insurance',
    description: 'Coverage for out-of-pocket expenses that medical insurance will not cover in case of accidents.',
    icon: icons.benefitsPlacholder,
    isPrimary: false,
    howToEnroll: 'Enroll directly with Guardian for accident coverage.',
    howToEnrollLink: '/enroll/accident-insurance',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/accident-insurance.svg',
    eligibility: 'All full-time benefit eligible employees and their dependents.',
    integration: null,
    enrolled: false,
    recommended: true
  },
  {
    title: 'Critical Illness Insurance',
    description: 'Coverage for unexpected expenses that arise from a major diagnosis.',
    icon: icons.benefitsPlacholder,
    isPrimary: false,
    howToEnroll: 'Enroll directly with the insurance provider for critical illness coverage.',
    howToEnrollLink: '/enroll/critical-illness',
    howToEnrollLinkText: 'Learn More',
    isActive: false,
    logo: '/images/critical-illness.svg',
    eligibility: 'All full-time benefit eligible employees. Children covered at no extra cost.',
    integration: null,
    enrolled: false,
    recommended: true
  }
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
    {
      text: 'Recommended',
      count: recommendedBenefits?.length || 0,
      isActive: activeTab === 'recommended',
      onClick: () => handleTabClick('recommended')
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
      <div className="w-full flex justify-center xl:justify-start flex-wrap gap-6">
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
      <div className='flex flex-col items-center md:items-start'>
        <h2 className="font-medium mb-[20px]">Benefits</h2>
        <Tabs tabs={tabs} />
      </div>
      <div className="mt-[32px]">
        {benefitsToRender?.length > 0 ? renderBenefits() : renderNullState()}
      </div>
    </div>
  );
}

export default BenefitsContainer;