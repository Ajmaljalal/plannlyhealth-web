import { Button } from "@/components/button"
import { ConfirmationModal } from "@/components/confirm-modal"

interface ConfirmModalProps {
  isOpen: boolean
  onClose: (text: string) => void
  title: string
  userName: string
  onConfirm: () => void
}

export const ConfirmModal = ({ isOpen, title, onClose, userName, onConfirm }: ConfirmModalProps) => {

  const texts: any = {
    'Send Password Reset': `Are you sure you want to send a password reset to ${userName}?`,
    'Send Invite': `Are you sure you want to send an invite to ${userName}?`,
    'Activate': `Are you sure you want to activate ${userName}'s account?`,
    'Deactivate': `Are you sure you want to deactivate ${userName}'s account?`
  }

  const ctaButton = <Button text='Yes' className='w-full' onClick={onConfirm} />
  const text = title ? texts[title] : 'Are you sure you want to do this?'
  return (
    <ConfirmationModal isOpen={isOpen} onClose={() => onClose('null')} text={text} title={title} ctaButton={ctaButton} />
  )
}