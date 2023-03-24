'use client'
import { Button } from '@/components/button'
import { icons } from '@/lib/icons'
import { useState } from 'react'
import { ConfirmModal } from './confirm-modal'



interface ActionButtonsProps {
  claim: any
}

export const ActionButtons = ({ claim }: ActionButtonsProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('null')

  const isDeclined = claim.status === 'Declined'
  const isApproved = claim.status === 'Approved'


  const toggleConfirmationModal = (text: string) => {
    setIsOpen(!isOpen)
    setTitle(text)
  }

  const handleApprove = () => {
    console.log('Approve', claim)
    // TODO: Add approve claim functionality
    toggleConfirmationModal('null')
  }

  const handleDecline = () => {
    console.log('Decline', claim)
    // TODO: Add decline claim functionality
    toggleConfirmationModal('null')
  }

  const handleDelete = () => {
    console.log('Delete', claim)
    // TODO: Add delete claim functionality
    toggleConfirmationModal('null')
  }

  const confirmActions: any = {
    'Approve': handleApprove,
    'Decline': handleDecline,
    'Delete': handleDelete
  }

  return (
    <div className='flex justify-end gap-2 flex-1'>
      {!isApproved && <Button text='Approve' className='w-1/2' onClick={() => toggleConfirmationModal('Approve')} />}
      {!isDeclined && <Button text='Decline' outlined className='w-1/2' onClick={() => toggleConfirmationModal('Decline')} />}
      {!isApproved && <Button text='Delete' outlined className='w-1/2' icon={icons.trash} onClick={() => toggleConfirmationModal('Delete')} />}
      <ConfirmModal isOpen={isOpen} onClose={toggleConfirmationModal} title={title} onConfirm={confirmActions[title]} />
    </div>
  )
}

