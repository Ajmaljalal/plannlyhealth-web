'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { DropdownMenu } from '@/components/dropdown-menu'
import { icons } from '@/lib/icons'
import { ConfirmModal } from './confirm-modal'
import { useRouter } from 'next/navigation'


const styles = `flex items-center rounded-[4px] hover:bg-pLight w-[24px] h-[24px] py-[4px] cursor-pointer`

interface ThreeDotsButtonProps {
  user: any
}

export const ThreeDotsButton = ({ user }: ThreeDotsButtonProps) => {
  const router = useRouter()
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false)
  const [title, setTitle] = useState('null')


  const toggleDropdown = (isNowOpen: boolean) => {
    if (isOpen) {
      setIsOpen(isNowOpen)
      return
    }
    setIsOpen(isNowOpen)
  }

  const toggleConfirmationModal = (text: string) => {
    setConfirmationModalOpen(!confirmationModalOpen)
    setTitle(text)
  }


  const moveToUserDetails = () => {
    router.push(`/users/${user.id}`)

  }

  const handleActivate = () => {
    console.log('Approve', user)
    // TODO: Add approve user functionality
    toggleConfirmationModal('null')
  }

  const handleDeactivate = () => {
    console.log('Decline', user)
    // TODO: Add decline user functionality
    toggleConfirmationModal('null')
  }

  const handleResendInvite = () => {
    console.log('Delete', user)
    // TODO: Add delete user functionality
    toggleConfirmationModal('null')
  }

  const handleResendPasswordReset = () => {
    console.log('Delete', user)
    // TODO: Add delete user functionality
    toggleConfirmationModal('null')
  }

  const confirmActions: any = {
    'Send Password Reset': handleResendPasswordReset,
    'Send Invite': handleResendInvite,
    'Activate': handleActivate,
    'Deactivate': handleDeactivate
  }

  return (
    <div className={styles}>
      <Image src={icons.threeDots} alt='three dots menu' onClick={() => toggleDropdown(isOpen ? false : true)} />
      <DropdownMenu
        isOpen={isOpen}
        onClose={toggleDropdown}
        width='w-[180px]'
        menuItems={[
          {
            element: 'Account Details',
            onClick: moveToUserDetails
          },
          {
            element: 'Edit',
            onClick: moveToUserDetails
          },
          {
            element: 'Resend Invite',
            onClick: () => toggleConfirmationModal('Send Invite')
          },
          {
            element: 'Send Password Reset',
            onClick: () => toggleConfirmationModal('Send Password Reset')
          },
          {
            element: 'Deactivate',
            onClick: () => toggleConfirmationModal('Deactivate')
          },
        ]}
      />
      {/* TODO: render modals here */}
      <ConfirmModal
        isOpen={confirmationModalOpen}
        onClose={toggleConfirmationModal}
        title={title}
        onConfirm={confirmActions[title]}
        // TODO: add user name
        userName={`user.name`}
      />
    </div>
  )
}