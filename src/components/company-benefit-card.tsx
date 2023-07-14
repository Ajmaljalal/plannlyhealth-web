'use client'
import { Button } from "@/components/button";
import { icons } from "@/lib/icons";
import Image from "next/image";
import { useState } from "react";
import { IntegrationsModal } from "./integrations-modal";
import { useDispatch } from "@/store/store";
import { removeIntegration, setIntegration, toggleBenefitActivation, updateBenefit } from "@/store/company";
import { FlatIconButton } from "./flat-icon-button";
import { BenefitDetailsModal } from "./benefit-edit-modal";

const BenefitCard = ({ benefit }: any) => {
  const dispatch = useDispatch()

  const [isIntegrationsModalOpen, setIsIntegrationsModalOpen] = useState(false)
  const [isBenefitDetailsModalOpen, setIsBenefitDetailsModalOpen] = useState(false)

  const addIntegrationToBenefit = (integration: any) => {
    const updatedBenefit = { ...benefit, integration: integration }
    dispatch(setIntegration(updatedBenefit))
  }

  const removeIntegrationFromBenefit = () => {
    dispatch(removeIntegration(benefit))
  }

  const setBenenfitToActive = () => {
    const updatedBenefit = { ...benefit, isActive: !benefit.isActive }
    dispatch(toggleBenefitActivation(updatedBenefit))
  }

  const archiveBenefit = () => {
    const updatedBenefit = { ...benefit, archived: true }
    dispatch(updateBenefit(updatedBenefit))
  }

  const restoreBenefit = () => {
    const updatedBenefit = { ...benefit, archived: false }
    dispatch(updateBenefit(updatedBenefit))
  }

  const toggleIntegrationsModal = () => {
    setIsIntegrationsModalOpen(!isIntegrationsModalOpen)
  }

  const toggleBenefitDetailsModal = () => {
    setIsBenefitDetailsModalOpen(!isBenefitDetailsModalOpen)
  }

  const generalStyle = `flex gap-4 w-full min-h-[160px] border-2 rounded-[32px] p-[16px]`
  const bgColor = benefit.isActive ? 'bg-basic_grey_4' : 'transparent'
  const borderColor = benefit.isActive ? 'bg_basic_grey_4 border-basic_grey_4' : 'border-basic_grey_4'
  const textColor = benefit.isActive ? 'text-basic_black' : 'text-basic_grey_2'
  const borderStyle = benefit.isActive ? '' : 'border-2 border-dashed'
  const style = `${generalStyle} ${bgColor} ${borderColor} ${textColor} ${borderStyle}`
  const integrationsBtnStyle = benefit.integration ? 'bg-system_success' : ''
  const addBtnStyle = benefit.isActive ? 'bg-system_success' : ''
  const addBtnIcon = benefit.isActive ? icons.checkWhite : icons.addLight
  const integrationIcon = benefit.integration ? icons.checkWhite : icons.addLight
  const addBtnText = benefit.isActive ? 'Added' : 'Add'
  const integrationBtnText = benefit.integration ? 'Update Integration' : 'Add Integration'
  const eligibilityIcon = benefit.isActive ? icons.howTo : icons.howToLight
  const howToEnrollIcon = benefit.isActive ? icons.question : icons.questionLight
  const detailsIcon = benefit.isActive ? icons.details : icons.detailsLight
  const archiveBtnText = benefit.archived ? 'Restore' : 'Archive'
  const archiveBtnIcon = benefit.archived ? icons.addLight : icons.deleteFlat
  const archiveBtnStyle = benefit.archived ? 'bg-system_success text-basic_white' : 'bg-system_error/[0.09] text-system_error'


  const renderIntegrationsButton = () => {
    if (!benefit.isActive && !benefit.archived) {
      return <Button className={`text-basic_white h-[32px] text-small ${addBtnStyle}`} text='Add' isSmallBtn isPrimary icon={addBtnIcon} onClick={setBenenfitToActive} />
    } else if (benefit.isActive && !benefit.archived) {
      return <Button className={`text-basic_white h-[32px] text-small ${integrationsBtnStyle}`} text={integrationBtnText} isSmallBtn isPrimary icon={integrationIcon} onClick={toggleIntegrationsModal} />
    }
  }

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
        <div className="flex items-center justify-between gap-4">
          <div className="flex gap-6 mr-[16px]">
            <FlatIconButton icon={eligibilityIcon} text="Eligibility" onClick={toggleBenefitDetailsModal} />
            <FlatIconButton icon={howToEnrollIcon} text="How to Enroll" onClick={toggleBenefitDetailsModal} />
            <FlatIconButton icon={detailsIcon} text="Details" onClick={toggleBenefitDetailsModal} />
          </div>
          <div className="flex gap-4">
            <Button icon={archiveBtnIcon} className={archiveBtnStyle} isSmallBtn text={archiveBtnText} onClick={benefit.archived ? restoreBenefit : archiveBenefit} />
            {benefit.isActive && !benefit.archived ? <Button className={addBtnStyle} text={addBtnText} isPrimary isSmallBtn icon={addBtnIcon} /> : null}
            {renderIntegrationsButton()}
          </div>
        </div>

      </div>
      <IntegrationsModal isOpen={isIntegrationsModalOpen} onClose={toggleIntegrationsModal} benefit={benefit} onAddIntegration={addIntegrationToBenefit} />
      <BenefitDetailsModal isOpen={isBenefitDetailsModalOpen} onClose={toggleBenefitDetailsModal} benefit={benefit} />
    </div>
  )
}

export default BenefitCard