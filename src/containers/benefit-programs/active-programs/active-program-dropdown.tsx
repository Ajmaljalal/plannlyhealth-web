'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { DropdownMenu } from '@/components/dropdown-menu'
import { icons } from '@/lib/icons'
import { ActiveProgramEditModal } from './active-program-edit-modal'
import { ActiveProgramDeactivateModal } from './active-program-deactivate-modal'


const styles = `flex items-center rounded-[4px] hover:bg-pLight w-[24px] h-[24px] py-[4px] cursor-pointer`

export const DropdownMenuButton = () => {
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [deactivateModalOpen, setDeactivateModalOpen] = useState(false)


  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen)
  }

  const toggleDeactivateModal = () => {
    setDeactivateModalOpen(!deactivateModalOpen)
  }

  return (
    <div className={styles}>
      <DropdownMenu
        triggerBtn={<Image src={icons.threeDots} alt='three dots menu' />}
        menuItems={[
          {
            element: 'Edit',
            onClick: toggleEditModal
          },
          {
            element: 'Deactivate',
            onClick: toggleDeactivateModal
          },
        ]}
      />
      <ActiveProgramEditModal isOpen={editModalOpen} onClose={toggleEditModal} />
      <ActiveProgramDeactivateModal isOpen={deactivateModalOpen} onClose={toggleDeactivateModal} />
    </div>
  )
}