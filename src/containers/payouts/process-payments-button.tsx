'use client'
import { Button } from '@/components/button'
import { ConfirmationModal } from '@/components/confirm-modal'
import { useState } from 'react'


export const ProcessPaymentsButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const handleProcessPayments = () => {
    console.log('process payments')
    // TODO: Add logic to process payments
    toggleModal()
  }

  const text = `Are you sure you want to process selected payouts?`
  const ctaButton = <Button text='Yes' className='w-full' onClick={handleProcessPayments} />

  return (
    <div className='flex gap-2 justify-end'>
      {/* TODO: Add logic to disable button if no payouts are selected */}
      <Button text='Process Payments' className='w-[260px]' onClick={toggleModal} />
      <ConfirmationModal isOpen={isOpen} onClose={toggleModal} text={text} title={'Process'} ctaButton={ctaButton} />
    </div>
  )
}