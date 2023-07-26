'use client'
import { Button } from "@/components/button";
import Image from "next/image";
import { useState } from "react";
import { BenefitDetailsModal } from "./benefit-details-modal";

const BenefitCard = ({ benefit }: any) => {
  const [currentBenefit, setCurrentBenefit] = useState(benefit)
  const [isBenefitDetailsModalOpen, setIsBenefitDetailsModalOpen] = useState(false)
  const toggleBenefitDetailsModal = () => {
    setIsBenefitDetailsModalOpen(!isBenefitDetailsModalOpen)
  }

  const handleBenefitEnrollment = () => {
    const updatedBenefit = { ...benefit, enrolled: !benefit.enrolled }
    setCurrentBenefit(updatedBenefit)
  }

  const generalStyle = `flex flex-col items-center gap-4 min-w-[250px] md:max-w-[364px] min-h-[420px] rounded-[32px] bg-basic_grey_5 text-basic_black`
  const bgColor = benefit.isActive ? 'bg-basic_grey_4' : 'transparent'
  const borderColor = benefit.isActive ? 'bg_basic_grey_4 border-basic_grey_4' : 'border-basic_grey_4'
  const style = `${generalStyle} ${bgColor} ${borderColor}`
  const enrollBtnStyle = benefit.enrolled ? 'bg-system_success_light' : ''

  const images: any = {
    'Health Insurance': '/illustrations/insurance.svg',
    'Dental Insurance': '/illustrations/dental.svg',
    'Vision Insurance': '/illustrations/insurance.svg',
    'Retirement Plans': '/illustrations/retirement.svg',
    'Development & Training': '/illustrations/development.svg',
  }

  return (
    <div className={style}>
      <Image src={images[currentBenefit.title] || '/illustrations/allowances.svg'} width={105} height={132} alt={""} className="w-full" />
      <div className="w-full px-[16px] pb-[16px] flex flex-col flex-1 justify-between">
        <div className="flex items-center justify-between">
          <h4>{currentBenefit.title}</h4>
          {currentBenefit.enrolled ? <span className="text-basic_white text-[12px] bg-system_success px-[12px] py-[3px] rounded-[16px]">Enrolled</span> :
            <p className=" text-[12px] px-[10px] py-[3px] rounded-[16px] border border-system_success text-system_success rounded-[16px] bg-system_success_light">
              Recommended
            </p>
          }
        </div>
        <p className="mt-[4px] mb-[24px] text-small">{currentBenefit.description}</p>
        <div className="flex gap-2">
          <Button className="w-full" text="Details" isSmallBtn onClick={toggleBenefitDetailsModal} />
          {!currentBenefit.enrolled ? <Button className={`w-full ${enrollBtnStyle}`} isSmallBtn isPrimary text='Enroll' onClick={handleBenefitEnrollment} /> : null}
        </div>
      </div>
      <BenefitDetailsModal isOpen={isBenefitDetailsModalOpen} onClose={toggleBenefitDetailsModal} benefit={currentBenefit} />
    </div>
  )
}

export default BenefitCard