'use client'
import { useState } from 'react'
import { AddEditNotificationModal } from './add-edit-modal'
import { Button } from '@/components/button'

const styles = `
  flex 
  items-center 
  rounded-[4px] 
  hover:bg-pLight 
  cursor-pointer
`

export const NewNotificationButton = ({ }) => {
  const [editModalOpen, setEditModalOpen] = useState(false)

  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen)
  }

  return (
    <div className={styles} style={{ zIndex: 1000 }}>
      <Button text='New Notification' className='w-[180px]' onClick={toggleEditModal} />
      <AddEditNotificationModal isOpen={editModalOpen} onClose={toggleEditModal} type='new' />
    </div>
  )
}