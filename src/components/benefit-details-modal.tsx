import React from 'react'
import { Modal } from '@/components/modal'
import { Button } from '@/components/button'
import Link from 'next/link'
import Image from 'next/image'
import { icons } from '@/lib/icons'


const modalContentStyles = `
  flex 
  flex-col 
`

export const BenefitDetailsModal = ({ isOpen, onClose, benefit }: { isOpen: boolean, onClose: () => void, benefit: any }) => {

  const handleSave = async () => {
    onClose()
  }

  const handleCancel = () => {
    onClose()
  }

  const ctaButton = <Button text='Got It!' isPrimary className='min-w-[160px]' onClick={handleSave} />

  return (
    <Modal isOpen={isOpen} onClose={handleCancel} ctaButton={ctaButton}>
      <div className={modalContentStyles}>
        <h2 className="font-normal">{benefit.title}</h2>
        {/* enrrelled green tag */}
        <p className="text-small mt-[12px]">{benefit.description}</p>
        <h4 className="font-normal mt-[16px]">How to apply</h4>
        <p className="text-small mt-[6px] flex gap-2 items-start">
          <Image src={icons.goldenStar} alt='golden star' width={24} height={24} className='min-w-[24px]' />
          {benefit.howToEnroll}
        </p>
        <h4 className="font-normal mt-[16px]">Eligibility</h4>
        <p className="text-small mt-[6px] flex gap-2 items-start">
          <Image src={icons.goldenStar} alt='golden star' width={24} height={24} />
          {benefit.eligibility}</p>

        <h5 className='font-normal text-basic_grey_3 mt-[16px]' >{benefit.howToEnrollLinkText}</h5>
        <Link href={benefit.howToEnrollLink} target='_blank'>{benefit.howToEnrollLink}</Link>
      </div>
    </Modal>
  );
}