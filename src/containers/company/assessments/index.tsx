'use client'
import React from 'react'
import Tabs from '@/components/tabs/tabs'
import { Tab } from '@/lib/types/general'
import Image from 'next/image'
import { icons } from '@/lib/icons'
import Tile from '@/components/tile'
import ProgressChart from '@/components/progress-chart'
import ProgressChartDouble from '@/components/progress-chart-double'
import ColoredDot from '@/components/colored-dot'
import DonutChart from '@/components/donut-chart'

const questionOne = {
  question: 'Rate your overall health.',
  options: [
    {
      title: 'Great',
      percentage: 52,
      color: 'bg-brand_dark_blue',
    },
    {
      title: 'Nice',
      percentage: 28,
      color: 'bg-brand_voilet',
    },
    {
      title: 'Bad',
      percentage: 20,
      color: 'bg-brand_voilet_light',
    },
  ],
}

const questionTwo = {
  question: 'How stressed are you?',
  options: [
    {
      title: 'High',
      percentage: 50,
      color: 'bg-brand_dark_blue',
    },
    {
      title: 'Medium',
      percentage: 30,
      color: 'bg-brand_voilet',
    },
    {
      title: 'Low',
      percentage: 20,
      color: 'bg-brand_voilet_light',
    },
  ]
}

const questionThree = {
  question: 'If you had the option to choose, which would you consider more beneficial?',
  options: [
    {
      title: 'Tuition Reimbursement',
      percentage: 90,
      color: 'bg-brand_dark_blue',
    },
    {
      title: 'Employee Assistance Programs (EAP)',
      percentage: 74,
      color: 'bg-brand_voilet',
    },
    {
      title: 'Commuter Benefits',
      percentage: 67,
      color: 'bg-brand_voilet_light',
    },
    {
      title: 'Flexible Working Arrangements',
      percentage: 48,
      color: 'bg-brand_voilet_lighter',
    }
  ],
}

const AssessmentsContainer = () => {
  const [activeTab, setActiveTab] = React.useState('onboarding')

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }

  const tabs: Tab[] = [
    {
      text: 'Onboarding',
      isActive: activeTab === 'onboarding',
      onClick: () => handleTabClick('onboarding'),
      count: 1,
    },
    {
      text: 'Wellbeing',
      isActive: activeTab === 'wellbeing',
      onClick: () => handleTabClick('wellbeing'),
      count: 12,
    }
  ]

  const renderQuestionOne = () => {
    return (
      <Tile>
        <h3 className="font-medium mb-[18px]">1. {questionOne.question}</h3>
        <div className='gap-4'>
          {questionOne.options.map((option, index) => (
            <ProgressChart key={index} data={option} containerClass='bg-basic_grey_3/[0.22]' graphClass={option.color} />
          ))}
        </div>
      </Tile>
    )
  }

  const renderQuestionTwo = () => {
    return (
      <Tile>
        <h3 className="font-medium mb-[18px]">2. {questionTwo.question}</h3>
        <ProgressChartDouble data={questionTwo.options} />
      </Tile>
    )
  }

  const renderQuestionThree = () => {
    return (
      <Tile>
        <h3 className="font-medium mb-[18px]">3. {questionThree.question}</h3>
        <div className='gap-4'>
          {questionThree.options.map((option, index) => (
            <ProgressChart key={index} data={option} containerClass='bg-basic_grey_3/[0.22]' graphClass={option.color} />
          ))}
        </div>
      </Tile>
    )
  }

  const legenStyle = 'flex items-center gap-2 text-small';
  const benefitUtilization = () => {
    return (
      <Tile>
        <h3 className="font-medium mb-[30px]">4. What benefits do you use less of all?</h3>
        <div className='flex items-center justify-evenly'>
          <div className="w-[224px] h-[224px]">
            <DonutChart segments={[
              { value: 20, title: 'Mental Health Benefits', color: '#42C76F' },
              { value: 15, title: 'Life Insurance', color: '#161517' },
              { value: 10, title: 'PTO Benefits', color: '#FFB92E' },
              { value: 5, title: 'Dental Insurance', color: '#FF9139' },
              { value: 50, title: 'Retirement Benefits', color: '#F03771' },
            ]} />
          </div>
          <div className="flex flex-col gap-2">
            <p className={legenStyle}>
              <ColoredDot className="bg-system_error" />
              Retirement Benefits - 50%
            </p>
            <p className={legenStyle}>
              <ColoredDot className="bg-system_success" />
              Mental Health Benefits - 20%
            </p>
            <p className={legenStyle}>
              <ColoredDot className="bg-basic_black" />
              Life Insurance - 15%
            </p>
            <p className={legenStyle}>
              <ColoredDot className="bg-basic_orange" />
              Dental Insurance - 5%
            </p>
            <p className={legenStyle}>
              <ColoredDot className="bg-basic_yellow" />
              PTO Benefits - 10%
            </p>
          </div>
        </div>
      </Tile>
    );
  }

  return (
    <div>
      <h2 className='font-normal mb-[20px]'>Assessments</h2>
      {/* TODO: Add filter options based on date, location, and department */}
      <Tabs tabs={tabs} />
      <div className='mt-[37px] mb-[24px] flex gap-4'>
        <div className='px-[16px] py-[8px] bg-system_success_light rounded-[32px] flex gap-2 items-center justify-center'>
          <Image src={icons.checkCircleGreen} width={24} height={24} alt='icon' />
          <p className='text-big'>80% completed</p>
        </div>
        <div className='px-[16px] py-[8px] bg-orange_light rounded-[32px] flex gap-2 items-center justify-center'>
          <Image src={icons.progressCircleOrange} width={24} height={24} alt='icon' />
          <p className='text-big'>8% in porgress</p>
        </div>
        <div className='px-[16px] py-[8px] bg-system_error/[0.15] rounded-[32px] flex gap-2 items-center justify-center'>
          <Image src={icons.closeCircleRed} width={24} height={24} alt='icon' />
          <p className='text-big'>12% not started</p>
        </div>
      </div>
      <div className='flex gap-4 flex-wrap'>
        {renderQuestionOne()}
        {renderQuestionTwo()}
        {renderQuestionThree()}
        {benefitUtilization()}
      </div>
    </div>
  )
}

export default AssessmentsContainer
