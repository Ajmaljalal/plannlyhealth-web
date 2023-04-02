'use client'
import { useState } from 'react'
import Image from 'next/image'
import { DropdownMenu } from '@/components/dropdown-menu'
import { icons } from '@/lib/icons'
import { AddEditNotificationModal } from './add-edit-modal'

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
  notification: any
}

export const ThreeDotsButton = ({ notification }: ThreeDotsButtonProps) => {
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)


  const toggleDropdown = (isNowOpen: boolean) => {
    if (isOpen) {
      setIsOpen(isNowOpen)
      return
    }
    setIsOpen(isNowOpen)
  }


  const toggleDetailsModal = () => {
    setEditModalOpen(!editModalOpen)
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
            element: 'Details',
            onClick: toggleDetailsModal
          },
        ]}
      />
      <AddEditNotificationModal isOpen={editModalOpen} onClose={toggleDetailsModal} notification={notification} />
    </div>
  )
}