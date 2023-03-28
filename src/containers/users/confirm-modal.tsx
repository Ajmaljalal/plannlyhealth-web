import { Button } from "@/components/button"
import { ConfirmationModal } from "@/components/confirm-modal"

const fileInputStyles = `
  w-full
  bg-pPink
  text-pWhite
  cursor-pointer
  hover:bg-pDarkPink
  borer-0
  outline-none
  rounded-[16px]
  flex
  items-center
  justify-center
  h-[48px]
  font-bold
`
interface ConfirmModalProps {
  isOpen: boolean
  onClose: (text: string) => void
  title: string
  userName?: string
  onConfirm: () => void
}

export const ConfirmModal = ({ isOpen, title, onClose, userName, onConfirm }: ConfirmModalProps) => {

  const texts: any = {
    'Send Password Reset': `Are you sure you want to send a password reset to ${userName}?`,
    'Send Invite': `Are you sure you want to send an invite to ${userName}?`,
    'Activate': `Are you sure you want to activate ${userName}'s account?`,
    'Deactivate': `Are you sure you want to deactivate ${userName}'s account?`,
    'Add User': 'Are you sure you want to add a new user out of your Plannly subscription? This will automatically update your subscription.',
    'Upload CSV': 'After uploading a list of users from a CSV file, your subscription will be automatically updated.'
  }

  let ctaButton = <Button text='Yes' className='w-full' onClick={onConfirm} />
  const text = title ? texts[title] : 'Are you sure you want to do this?'
  const fileInput = (
    <label className={fileInputStyles} htmlFor='csv-upload' >
      Yes
      <input
        id="csv-upload"
        type='file'
        accept='.csv'
        className='hidden'
        onChange={onConfirm}
      />
    </label>
  )

  if (title === 'Upload CSV') {
    ctaButton = fileInput
  }

  return (
    <ConfirmationModal isOpen={isOpen} onClose={() => onClose('null')} text={text} title={title} ctaButton={ctaButton} />
  )
}