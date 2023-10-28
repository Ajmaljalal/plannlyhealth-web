'use client';
import React, { useEffect } from 'react'
import { Modal } from '../modal';
import { Button } from '../button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from '@/store/store';
import { assessmentsTrackerSelector, setAssessmentPostponed, userAssessmentProgressSelector, userProfileSelector } from '@/store/user';
import { get_month_year } from '@/lib/helpers';


const MonthlyAssessmentAlertModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const user = useSelector(userProfileSelector)
  const assessmentsTracker = useSelector(assessmentsTrackerSelector)
  const userAseessmentPostponed = useSelector(userAssessmentProgressSelector)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (assessmentsTracker?.monthly_assessment_completed || userAseessmentPostponed) {
        return false // if assessment is completed or postponed, don't show the modal
      } else {
        setIsOpen(true)
      }
    }, 10000)
    return () => clearTimeout(timer)
  }, [user, userAseessmentPostponed, assessmentsTracker])


  const handleStart = async () => {
    setIsOpen(false)
    router.push('/assessment/monthly')
  }

  const toggleModal = () => {
    window.localStorage.setItem(`assessment-postponded-${get_month_year()}`, 'true')
    dispatch(setAssessmentPostponed(true))
    setIsOpen(!isOpen)
  }

  const ctaButton = <Button text='Start now' isPrimary className='w-full md:w-[200px]' onClick={handleStart} />
  return (
    <Modal isOpen={isOpen} onClose={toggleModal} ctaButton={ctaButton} cancelBtnText='Will do later' key='MonthlyAssessmentAlertModal'>
      <div className='text-center flex flex-col items-center justify-center'>
        <Image src='/illustrations/upload-benefits-illustration.svg' alt='assessment alert' width={150} height={100} />
        <h4 className='font-normal'>Complete Monthly Assessment</h4>
        <p className='text-basic_grey_3 mt-2'>and unlock a ticket for a reward!</p>
      </div>
    </Modal>
  );
}

export default MonthlyAssessmentAlertModal
