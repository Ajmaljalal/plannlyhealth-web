'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { DropdownMenu } from '@/components/dropdown-menu'
import { icons } from '@/lib/icons'


const styles = `flex items-center rounded-[4px] hover:bg-pLight w-[24px] h-[24px] py-[4px] cursor-pointer`

export const ThreeDotsButton = () => {
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [deactivateModalOpen, setDeactivateModalOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = (isNowOpen: boolean) => {
    if (isOpen) {
      setIsOpen(isNowOpen)
      return
    }
    setIsOpen(isNowOpen)
  }


  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen)
  }

  const toggleDeactivateModal = () => {
    setDeactivateModalOpen(!deactivateModalOpen)
  }

  return (
    <div className={styles}>
      <Image src={icons.threeDots} alt='three dots menu' onClick={() => handleToggle(isOpen ? false : true)} />
      <DropdownMenu
        isOpen={isOpen}
        onClose={handleToggle}
        width='w-[180px]'
        menuItems={[
          {
            element: 'Account Details',
            onClick: toggleEditModal
          },
          {
            element: 'Edit',
            onClick: toggleDeactivateModal
          },
          {
            element: 'Resend Invite',
            onClick: toggleDeactivateModal
          },
          {
            element: 'Send Password Reset',
            onClick: toggleDeactivateModal
          },
          {
            element: 'Deactivate',
            onClick: toggleDeactivateModal
          },
        ]}
      />
      {/* TODO: render modals here */}
    </div>
  )
}