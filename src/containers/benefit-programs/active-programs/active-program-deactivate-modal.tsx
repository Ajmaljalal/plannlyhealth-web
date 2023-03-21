import React from 'react'
import { Modal } from '@/components/modal'
import { ConfirmationModal } from '@/components/confirm-modal'
import { Button } from '@/components/button'

interface ActiveProgramDeactivateModalProps {
  isOpen: boolean
  programId?: string
  companyId?: string
  programName?: string
  onClose: () => void
}

export const ActiveProgramDeactivateModal = ({ isOpen, onClose, programId, programName, companyId }: ActiveProgramDeactivateModalProps) => {

  const handleDeactivate = () => {
    // TODO: deactivate program
    console.log('deactivate program', programId, companyId)
    onClose()
  }

  const ctaButton = <Button text='Yes' className='w-full' onClick={handleDeactivate} />

  return (
    <ConfirmationModal isOpen={isOpen} onClose={onClose} text={`Are you sure you want to deactivate ${programName} program?`
    } title='Deactivate' ctaButton={ctaButton} />
  )
}