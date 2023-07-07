'use client'
import { Button } from "@/components/button";
import { icons } from "@/lib/icons";
import Image from "next/image";
import { useState } from "react";
import { BenefitDetailsModal } from "./benefit-edit-modal";

const BenefitCard = ({ benefit }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentBenefit, setBenefit] = useState({ ...benefit })

  const setBenenfitToActive = () => {
    setBenefit({ ...currentBenefit, isActive: !currentBenefit.isActive })
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const renderIconButton = ({ image, text, onClick }: { image: any, text: string, onClick: () => void }) => {
    return (
      <div onClick={onClick} className="flex justify-center items-center gap-2 h-[32px] cursor-pointer">
        <Image src={image} width={20} height={20} alt={""} />
        <span className="text-small-bold">{text}</span>
      </div>
    )
  }

  const generalStyle = `flex gap-4 w-1/2 max-w-[650px] min-h-[160px] border-2 rounded-[32px] p-[16px] mb-[24px]`
  const bgColor = currentBenefit.isActive ? 'bg-basic_grey_4' : 'transparent'
  const borderColor = currentBenefit.isActive ? 'bg_basic_grey_4 border-basic_grey_4' : 'border-basic_grey_4'
  const textColor = currentBenefit.isActive ? 'text-basic_black' : 'text-basic_grey_2'
  const borderStyle = currentBenefit.isActive ? '' : 'border-2 border-dashed'
  const style = `${generalStyle} ${bgColor} ${borderColor} ${textColor} ${borderStyle}`
  const buttonStyle = currentBenefit.isActive ? 'bg-system_success' : 'bg-brand_dark_blue'
  const eligibilityIcon = currentBenefit.isActive ? icons.howTo : icons.howToLight
  const howToEnrollIcon = currentBenefit.isActive ? icons.question : icons.questionLight
  const detailsIcon = currentBenefit.isActive ? icons.details : icons.detailsLight
  const addBtnIcon = currentBenefit.isActive ? icons.checkWhite : icons.addLight
  const addBtnText = currentBenefit.isActive ? 'Added' : 'Add'

  return (
    <div className={style}>
      <Image src='/illustrations/test-benefit.png' width={105} height={105} alt={""} style={{ borderRadius: '24px', height: '105px' }} />
      <div className="w-full">
        <h4>{currentBenefit.title}</h4>
        <p className="mt-[4px] mb-[24px]">{currentBenefit.description}</p>
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex gap-6">
            {renderIconButton({ image: eligibilityIcon, text: 'Eligibility', onClick: toggleModal })}
            {renderIconButton({ image: howToEnrollIcon, text: 'How to Enroll', onClick: toggleModal })}
            {renderIconButton({ image: detailsIcon, text: 'Details', onClick: toggleModal })}
          </div>
          <Button className={`text-basic_white h-[32px] text-small ml-[40px] ${buttonStyle}`} text={addBtnText} isSmallBtn icon={addBtnIcon} onClick={setBenenfitToActive} />
        </div>
      </div>
      <BenefitDetailsModal isOpen={isModalOpen} onClose={toggleModal} benefit={currentBenefit} />
    </div>
  )
}

export default BenefitCard