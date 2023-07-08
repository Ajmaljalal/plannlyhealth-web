'use client'
import { Button } from "@/components/button";
import { icons } from "@/lib/icons";
import Image from "next/image";
import { useState } from "react";
import { IntegrationsModal } from "./integrations-modal";

const BenefitCard = ({ benefit }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentBenefit, setBenefit] = useState(benefit)

  const addIntegrationToBenefit = (integration: any) => {
    setBenefit({ ...currentBenefit, integration: integration })
  }

  const removeIntegrationFromBenefit = () => {
    setBenefit({ ...currentBenefit, integration: null })
  }


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const generalStyle = `flex gap-4 w-1/2 max-w-[650px] min-h-[160px] border-2 rounded-[32px] p-[16px] mb-[24px]`
  const bgColor = currentBenefit.integration ? 'bg-basic_grey_4' : 'transparent'
  const borderColor = currentBenefit.integration ? 'bg_basic_grey_4 border-basic_grey_4' : 'border-basic_grey_4'
  const textColor = currentBenefit.integration ? 'text-basic_black' : 'text-basic_grey_2'
  const borderStyle = currentBenefit.integration ? '' : 'border-2 border-dashed'
  const style = `${generalStyle} ${bgColor} ${borderColor} ${textColor} ${borderStyle}`
  const buttonStyle = currentBenefit.integration ? 'bg-system_success' : ''
  const addBtnIcon = icons.addLight
  const addBtnText = currentBenefit.integration ? 'Update Integration' : 'Add Integration'

  return (
    <div className={style}>
      <Image src='/illustrations/test-benefit.png' width={105} height={132} alt={""} style={{ borderRadius: '24px', height: '105px' }} />
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h4>{currentBenefit.title}</h4>
          {
            currentBenefit.integration?.icon && <div className="flex items-center justify-between h-[32px] w-[131px] rounded-[32px] bg-basic_white py-[8px] px-[12px]">
              <Image src={currentBenefit.integration?.icon} width={80} height={30} alt={""} style={{ width: '80px' }} />
              <span className="min-w-[20px] cursor-pointer" onClick={removeIntegrationFromBenefit}>
                <Image src={icons.close} height={20} width={20} style={{ width: '20px', height: '20px' }} alt="close icon" />
              </span>
            </div>
          }
        </div>
        <p className="mt-[4px] mb-[24px]">{currentBenefit.description}</p>
        <div className="flex items-center justify-end flex-wrap">
          <Button className={`text-basic_white h-[32px] text-small ${buttonStyle}`} text={addBtnText} isSmallBtn isPrimary icon={addBtnIcon} onClick={toggleModal} />
        </div>
      </div>
      <IntegrationsModal isOpen={isModalOpen} onClose={toggleModal} benefit={currentBenefit} onAddIntegration={addIntegrationToBenefit} />
    </div>
  )
}

export default BenefitCard