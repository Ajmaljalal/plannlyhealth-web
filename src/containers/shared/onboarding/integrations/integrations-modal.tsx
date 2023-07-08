import React, { useState } from 'react'
import { Modal } from '@/components/modal'
import { Button } from '@/components/button'
import Image from 'next/image'
import { icons } from '@/lib/icons'
import { integrations } from '@/lib/integrations'




const modalContentStyles = `
  flex 
  flex-col 
  gap-4
`

export const IntegrationsModal = ({
  isOpen,
  onClose,
  benefit,
  onAddIntegration
}: {
  isOpen: boolean,
  onClose: () => void,
  onAddIntegration: (integration: any) => void,
  benefit: any
}) => {
  const [currentBenefit, setCurrentBenefit] = useState<any>(benefit)

  const addIntegration = (integration: any) => {
    onAddIntegration(integration)
    setCurrentBenefit({ ...currentBenefit, integration: integration })
  }


  const handleSave = async () => {
    onClose()
  }

  const handleCancel = () => {
    onClose()
  }

  const renderIntegrations = () => {
    return integrations.map((integration: any) => {
      const isIntegrationActive = currentBenefit.integration?.name === integration.name
      const addBtnText = isIntegrationActive ? 'Current' : 'Add'
      const addBtnIcon = isIntegrationActive ? icons.checkWhite : icons.add
      const addBtnStyle = isIntegrationActive ? 'bg-system_success text-basic_white' : ''
      const integrationBorderStyle = isIntegrationActive ? 'border-brand_voilet border-solid' : 'border-basic_grey_4 border-dashed'
      const integrationStyle = `w-[240px] max-w-[240px] h-[202px] max-h-[202px] py-[40px] rounded-[32px] border-2 flex flex-col items-center justify-between ${integrationBorderStyle}`

      return (
        <div key={integration.name} className={integrationStyle}>
          <Image src={integration.icon} width={180} height={80} alt='integration logo' style={{ height: 'auto' }} />
          {/* <p className='w-[180px] text-center text-small mb-[20px]'>{integration.shortDescription}</p> */}
          <Button text={addBtnText} className={`w-[180px] ${addBtnStyle}`} isSmallBtn icon={addBtnIcon} onClick={() => addIntegration(integration)} />
        </div>
      )
    })
  }

  const ctaButton = <Button text='Save' isPrimary className='w-[160px]' onClick={handleSave} />

  return (
    <Modal isOpen={isOpen} onClose={handleCancel} ctaButton={ctaButton} size='large'>
      <div className={modalContentStyles}>
        <h4>{`Choose your ${currentBenefit.title} integration:`}</h4>
        <div className='my-[24px] flex gap-6 flex-wrap justify-center'>
          {renderIntegrations()}
        </div>
      </div>
    </Modal>
  );
}
