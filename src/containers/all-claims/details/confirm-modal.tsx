import { Button } from "@/components/button"
import { ConfirmationModal } from "@/components/confirm-modal"

interface ConfirmModalProps {
  isOpen: boolean
  onClose: (text: string) => void
  title: string
  onConfirm: () => void

}
export const ConfirmModal = ({ isOpen, title, onClose, onConfirm }: ConfirmModalProps) => {

  const ctaButton = <Button text='Yes' className='w-full' onClick={onConfirm} />
  const text = `Are you sure you want to ${title && title?.toLowerCase()} the claim?`
  return (
    <ConfirmationModal isOpen={isOpen} onClose={() => onClose('null')} text={text} title={title} ctaButton={ctaButton} />
  )
}