import { Button } from "@/components/button"
import { ConfirmationModal } from "@/components/confirm-modal"

interface ConfirmModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  companyName: string
}

export const ConfirmModal = ({ isOpen, companyName, onClose, onConfirm }: ConfirmModalProps) => {


  let ctaButton = <Button text='Yes' className='w-full' onClick={onConfirm} />
  const text = `Are you sure you want to change ${companyName}'s access?`

  return (
    <ConfirmationModal isOpen={isOpen} onClose={onClose} text={text} title='Please confirm' ctaButton={ctaButton} />
  )
}