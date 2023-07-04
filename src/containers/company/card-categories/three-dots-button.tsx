'use client'
import { useState } from 'react'
import Image from 'next/image'
import { DropdownMenu } from '@/components/dropdown-menu'
import { icons } from '@/lib/icons'
import { ConfirmModal } from './confirm-modal'
import { CategoryAddEditModal } from './add-edit-modal'

const styles = `
  flex 
  items-center 
  rounded-[4px] 
  hover:bg-pLight 
  w-[24px] 
  h-[24px] 
  py-[4px] 
  cursor-pointer
`

interface ThreeDotsButtonProps {
  category: any
}

export const ThreeDotsButton = ({ category }: ThreeDotsButtonProps) => {
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false)


  const toggleDropdown = (isNowOpen: boolean) => {
    if (isOpen) {
      setIsOpen(isNowOpen)
      return
    }
    setIsOpen(isNowOpen)
  }

  const toggleConfirmationModal = () => {
    setConfirmationModalOpen(!confirmationModalOpen)
  }

  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen)
  }

  const handleDeactivate = () => {
    console.log('Decline', category)
    // TODO: Add decline category functionality
    toggleConfirmationModal()
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
            element: 'Edit',
            onClick: toggleEditModal
          },
          {
            element: 'Deactivate',
            onClick: toggleConfirmationModal
          },
        ]}
      />
      <ConfirmModal
        isOpen={confirmationModalOpen}
        onClose={toggleConfirmationModal}
        onConfirm={handleDeactivate}
        categoryDescription={category.description}
      />
      <CategoryAddEditModal isOpen={editModalOpen} onClose={toggleEditModal} category={category} />
    </div>
  )
}