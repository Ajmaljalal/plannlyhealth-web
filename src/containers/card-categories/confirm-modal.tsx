import { Button } from "@/components/button"
import { ConfirmationModal } from "@/components/confirm-modal"


interface ConfirmModalProps {
  isOpen: boolean
  onClose: (text: string) => void
  categoryDescription?: string
  onConfirm: () => void
}

export const ConfirmModal = ({ isOpen, onClose, categoryDescription, onConfirm }: ConfirmModalProps) => {


  let ctaButton = <Button text='Yes' className='w-full' onClick={onConfirm} />
  const text = `Are you sure you want to deactivate ${categoryDescription} category?`

  return (
    <ConfirmationModal isOpen={isOpen} onClose={() => onClose('null')} text={text} title='Deactivate Category' ctaButton={ctaButton} />
  )
}