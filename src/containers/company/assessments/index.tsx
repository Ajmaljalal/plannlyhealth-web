'use client'
import React from 'react'
import Tabs from '@/components/tabs/tabs'
import { Tab } from '@/lib/types/general'
import Image from 'next/image'
import { icons } from '@/lib/icons'
import Tile from '@/components/tile'

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
  return (
    <div>
      <h2 className='font-normal mb-[20px]'>Assessments</h2>
      {/* TODO: Add filter options based on date, location, and department */}
      <Tabs tabs={tabs} />
      <div className='mt-[37px] mb-[24px] flex gap-4'>
        <div className='px-[16px] py-[8px] bg-system_success_light rounded-[32px] flex gap-2 items-center justify-center'>
          <Image src={icons.checkCircleGreen} width={24} height={24} alt='icon' />
          <p className='text-big'>8% completed</p>
        </div>
        <div className='px-[16px] py-[8px] bg-orange_light rounded-[32px] flex gap-2 items-center justify-center'>
          <Image src={icons.progressCircleOrange} width={24} height={24} alt='icon' />
          <p className='text-big'>80% in porgress</p>
        </div>
        <div className='px-[16px] py-[8px] bg-system_error/[0.15] rounded-[32px] flex gap-2 items-center justify-center'>
          <Image src={icons.closeCircleRed} width={24} height={24} alt='icon' />
          <p className='text-big'>12% not started</p>
        </div>
      </div>
      <div className='flex gap-4'>
        <Tile>
          <h3 className="font-medium mb-[30px]">1. Rate your overall health</h3>
        </Tile>
        <Tile>
          <h3 className="font-medium mb-[30px]">1. Rate your overall health</h3>
        </Tile>
      </div>
    </div>
  )
}

export default AssessmentsContainer
