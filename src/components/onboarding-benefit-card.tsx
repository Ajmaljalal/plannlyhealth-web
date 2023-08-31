'use client'
import { Button } from "@/components/button";
import { icons } from "@/lib/icons";
import Image from "next/image";
import { useState } from "react";
import { BenefitDetailsModal } from "./benefit-edit-modal";
import { useDispatch } from "@/store/store";
import { toggleBenefitActivation } from "@/store/company";

const BenefitCard = ({ benefit }: any) => {
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const setBenenfitToActive = () => {
    const updatedBenefit = { ...benefit, isActive: !benefit.isActive }
    dispatch(toggleBenefitActivation(updatedBenefit))
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

  const generalStyle = `flex gap-4 w-full min-h-[160px] max-h-[191px] border-2 rounded-[32px] p-[16px] mb-[24px]`
  const bgColor = benefit.isActive ? 'bg-basic_grey_4' : 'transparent'
  const borderColor = benefit.isActive ? 'bg_basic_grey_4 border-basic_grey_4' : 'border-basic_grey_4'
  const textColor = benefit.isActive ? 'text-basic_black' : 'text-basic_grey_2'
  const borderStyle = benefit.isActive ? '' : 'border-2 border-dashed'
  const style = `${generalStyle} ${bgColor} ${borderColor} ${textColor} ${borderStyle}`
  const buttonStyle = benefit.isActive ? 'bg-system_success' : ''
  const eligibilityIcon = benefit.isActive ? icons.howTo : icons.howToLight
  const howToEnrollIcon = benefit.isActive ? icons.question : icons.questionLight
  const detailsIcon = benefit.isActive ? icons.details : icons.detailsLight
  const addBtnIcon = benefit.isActive ? icons.checkWhite : icons.addLight
  const addBtnText = benefit.isActive ? 'Added' : 'Add'

  return (
    <div className={style}>
      <Image src='/illustrations/test-benefit.png' width={105} height={105} alt={""} style={{ borderRadius: '24px', height: '105px' }} />
      <div className="w-full">
        <h4>{benefit.title}</h4>
        <p className="mt-[4px] mb-[24px]">{benefit.description}</p>
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex gap-6">
            {renderIconButton({ image: eligibilityIcon, text: 'Eligibility', onClick: toggleModal })}
            {renderIconButton({ image: howToEnrollIcon, text: 'How to Enroll', onClick: toggleModal })}
            {renderIconButton({ image: detailsIcon, text: 'Details', onClick: toggleModal })}
          </div>
          <Button className={`text-basic_white h-[32px] text-small ${buttonStyle}`} text={addBtnText} isSmallBtn isPrimary icon={addBtnIcon} onClick={setBenenfitToActive} />
        </div>
      </div>
      <BenefitDetailsModal isOpen={isModalOpen} onClose={toggleModal} benefit={benefit} />
    </div>
  )
}

export default BenefitCard