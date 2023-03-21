import React from 'react'
import { Modal } from '@/components/modal'

interface ActiveProgramDeactivateModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ActiveProgramDeactivateModal = ({ isOpen, onClose }: ActiveProgramDeactivateModalProps) => {

  const handleDeactivate = () => {
    // TODO: deactivate program
    console.log('deactivate program')
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <h3>deactivate</h3>
    </Modal>
  )
}