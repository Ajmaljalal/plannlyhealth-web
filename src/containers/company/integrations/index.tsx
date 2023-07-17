'use client'
import Tabs from "@/components/tabs/tabs";
import { icons } from "@/lib/icons";
import { integrations } from "@/lib/integrations";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/button";
import { useDispatch, useSelector } from "@/store/store";
import { addIntegrations, integrationsSelector } from "@/store/company";




const IntegrationsContainer = () => {
  const [activeTab, setActiveTab] = useState('all')
  const dispatch = useDispatch()
  const allIntegrations = useSelector(integrationsSelector)
  const HRISIntegrations = allIntegrations.filter((i: any) => i.category.includes('HRIS'))
  const benAdminIntegrations = allIntegrations.filter((i: any) => i.category.includes('Ben Admin'))





  useEffect(() => {
    if (allIntegrations.length > 0) return
    dispatch(addIntegrations(integrations))
  }, [])



  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }

  const handleAddIntegration = (integration: any) => {
    const updatedIntegrations = allIntegrations.map((i: any) => {
      if (i.name === integration.name) {
        return {
          ...i,
          isActive: true
        }
      }

      return i
    })
    dispatch(addIntegrations(updatedIntegrations))

  }

  const tabs = [
    {
      text: 'All',
      count: 0,
      isActive: activeTab === 'all',
      onClick: () => handleTabClick('all')
    },
    {
      text: 'HRIS',
      count: 0,
      isActive: activeTab === 'HRIS',
      onClick: () => handleTabClick('HRIS')
    },
    {
      text: 'Ben Admin',
      count: 0,
      isActive: activeTab === 'ben admin',
      onClick: () => handleTabClick('ben admin')
    }
  ]


  const currentIntegrations = activeTab === 'all' ? allIntegrations : activeTab === 'HRIS' ? HRISIntegrations : benAdminIntegrations

  const renderIntegrations = () => {
    return currentIntegrations.map((integration: any) => {
      const isIntegrationActive = integration.isActive
      const addBtnText = isIntegrationActive ? 'Added' : 'Add'
      const addBtnIcon = isIntegrationActive ? icons.checkWhite : icons.add
      const addBtnStyle = isIntegrationActive ? 'bg-system_success text-basic_white' : ''
      const integrationBorderStyle = isIntegrationActive ? 'border-brand_voilet border-solid' : 'border-basic_grey_4 border-dashed'
      const integrationStyle = `w-[250px] max-w-[240px] h-[202px] max-h-[202px] py-[40px] rounded-[32px] border-2 flex flex-col items-center justify-between ${integrationBorderStyle}`

      return (
        <div key={integration.name} className={integrationStyle}>
          <Image src={integration.icon} width={180} height={80} alt='integration logo' style={{ height: 'auto' }} />
          {/* <p className='w-[180px] text-center text-small mb-[20px]'>{integration.shortDescription}</p> */}
          <Button text={addBtnText} className={`w-[180px] ${addBtnStyle}`} isSmallBtn icon={addBtnIcon} onClick={() => handleAddIntegration(integration)} />
        </div>
      )
    })
  }

  return (
    <div>
      <h2 className="font-normal mb-[20px]">Integrations</h2>
      <Tabs tabs={tabs} />
      <div className='my-[32px] flex gap-6 flex-wrap'>
        {renderIntegrations()}
      </div>
    </div>
  );
}

export default IntegrationsContainer;