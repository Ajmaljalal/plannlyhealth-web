'use client'
import { Button } from "@/components/button";
import { icons } from "@/lib/icons";
import Image from "next/image";
import { useState } from "react";
import { IntegrationsModal } from "./integrations-modal";
import { useDispatch } from "@/store/store";
import { removeIntegration, setIntegration } from "@/store/company";

const BenefitCard = ({ benefit }: any) => {
  const dispatch = useDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const addIntegrationToBenefit = (integration: any) => {
    const updatedBenefit = { ...benefit, integration: integration }
    dispatch(setIntegration(updatedBenefit))
  }

  const removeIntegrationFromBenefit = () => {
    dispatch(removeIntegration(benefit))
  }


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const generalStyle = `flex gap-4 w-1/2 max-w-[650px] min-h-[160px] border-2 rounded-[32px] p-[16px] mb-[24px]`
  const bgColor = benefit.integration ? 'bg-basic_grey_4' : 'transparent'
  const borderColor = benefit.integration ? 'bg_basic_grey_4 border-basic_grey_4' : 'border-basic_grey_4'
  const textColor = benefit.integration ? 'text-basic_black' : 'text-basic_grey_2'
  const borderStyle = benefit.integration ? '' : 'border-2 border-dashed'
  const style = `${generalStyle} ${bgColor} ${borderColor} ${textColor} ${borderStyle}`
  const buttonStyle = benefit.integration ? 'bg-system_success' : ''
  const addBtnIcon = icons.addLight
  const addBtnText = benefit.integration ? 'Update Integration' : 'Add Integration'

  return (
    <div className={style}>
      <Image src='/illustrations/test-benefit.png' width={105} height={132} alt={""} style={{ borderRadius: '24px', height: '105px' }} />
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h4>{benefit.title}</h4>
          {
            benefit.integration?.icon && <div className="flex items-center justify-between h-[32px] w-[131px] rounded-[32px] bg-basic_white py-[8px] px-[12px]">
              <Image src={benefit.integration?.icon} width={80} height={30} alt={""} style={{ width: '80px' }} />
              <span className="min-w-[20px] cursor-pointer" onClick={removeIntegrationFromBenefit}>
                <Image src={icons.close} height={20} width={20} style={{ width: '20px', height: '20px' }} alt="close icon" />
              </span>
            </div>
          }
        </div>
        <p className="mt-[4px] mb-[24px]">{benefit.description}</p>
        <div className="flex items-center justify-end flex-wrap">
          <Button className={`text-basic_white h-[32px] text-small ${buttonStyle}`} text={addBtnText} isSmallBtn isPrimary icon={addBtnIcon} onClick={toggleModal} />
        </div>
      </div>
      <IntegrationsModal isOpen={isModalOpen} onClose={toggleModal} benefit={benefit} onAddIntegration={addIntegrationToBenefit} />
    </div>
  )
}

export default BenefitCard