'use client';
import React, { useEffect } from 'react'
import { Modal } from '../modal';
import { Button } from '../button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from '@/store/store';
import { setAssessmentProgress, userProfileSelector } from '@/store/user';


export default function AssessmentAlertModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const user = useSelector(userProfileSelector)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    if (user?.onboarding_assessment_completed) return
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 10000)
    return () => clearTimeout(timer)
  }, [user])

  const handleStart = async () => {
    setIsOpen(false)
    router.push('/assessment')
  }

  const toggleModal = () => {
    window.localStorage.setItem(`assessment_${user.id}_postponed`, 'true')
    dispatch(setAssessmentProgress(true))
    setIsOpen(!isOpen)
  }

  const ctaButton = <Button text='Start now' isPrimary className='w-full md:w-[200px]' onClick={handleStart} />
  return (
    <Modal isOpen={isOpen} onClose={toggleModal} ctaButton={ctaButton} cancelBtnText='Will do later'>
      <div className='text-center flex flex-col items-center justify-center'>
        <Image src='/illustrations/upload-benefits-illustration.svg' alt='assessment alert' width={150} height={100} />
        <h4 className='font-normal'>Complete your Assessment</h4>
        <p className='text-basic_grey_3 mt-2'>and unlock a ticket for a reward!</p>
      </div>
    </Modal>
  );
}
