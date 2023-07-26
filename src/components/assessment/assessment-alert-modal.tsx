'use client';
import React, { useEffect } from 'react'
import { Modal } from '../modal';
import { Button } from '../button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


export default function AssessmentAlertModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter()

  useEffect(() => {
    setIsOpen(true)
  }, [])

  const handleSave = async () => {
    setIsOpen(false)
    router.push('/assessment')
  }

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const ctaButton = <Button text='Start now' isPrimary className='w-full md:w-[200px]' onClick={handleSave} />
  return (
    <Modal isOpen={isOpen} onClose={toggleModal} ctaButton={ctaButton} cancelBtnText='Will do later'>
      <div className='text-center flex flex-col items-center justify-center'>
        <Image src='/illustrations/upload-benefits-illustration.svg' alt='assessment alert' width={150} height={100} />
        <h4 className='font-normal'>Wellbeing Assessment Alert!</h4>
        <p className='text-basic_grey_3 mt-2'>Complete your wellbeing assessment and get a ticket to win a reward!</p>
      </div>
    </Modal>
  );
}
