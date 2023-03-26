import { Button } from "@/components/button"
import { ConfirmationModal } from "@/components/confirm-modal"

interface ConfirmModalProps {
  isOpen: boolean
  onClose: (text: string) => void
  title: string
  onConfirm: () => void
}

export const ConfirmModal = ({ isOpen, title, onClose, onConfirm }: ConfirmModalProps) => {

  const texts: any = {
    'Send Password Reset': 'Are you sure you want to send a password reset to the user?',
    'Send Invite': 'Are you sure you want to send an invite to the user?',
    'Activate': 'Are you sure you want to activate this user?',
    'Deactivate': 'Are you sure you want to deactivate this user?'
  }


  const ctaButton = <Button text='Yes' className='w-full' onClick={onConfirm} />
  const text = title ? texts[title] : 'Are you sure you want to do this?'
  return (
    <ConfirmationModal isOpen={isOpen} onClose={() => onClose('null')} text={text} title={title} ctaButton={ctaButton} />
  )
}