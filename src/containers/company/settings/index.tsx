'use client'
import React, { useMemo } from 'react'
import Tabs from '@/components/tabs/tabs'
import { Tab } from '@/lib/types/general'
import Company from './company'
import Profile from './profile'
import Billing from './billing'

const SettingsContainer = () => {
  const [activeTab, setActiveTab] = React.useState('profile')

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }

  const tabs: Tab[] = useMemo(() => [
    {
      text: 'Profile',
      isActive: activeTab === 'profile',
      onClick: () => handleTabClick('profile')
    },
    {
      text: 'Company',
      isActive: activeTab === 'company',
      onClick: () => handleTabClick('company')
    },
    {
      text: 'Billing',
      isActive: activeTab === 'billing',
      onClick: () => handleTabClick('billing')
    }
  ], [activeTab])


  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <Profile />
      case 'company':
        return <Company />
      case 'billing':
        return <Billing />
      default:
        return <Profile />
    }
  }

  return (
    <div>
      <h2 className='font-normal mb-[20px]'>Settings</h2>
      <Tabs tabs={tabs} />
      {renderTabContent()}
    </div>
  )
}

export default SettingsContainer

