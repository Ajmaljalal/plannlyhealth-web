'use client'
import { useState } from 'react'
import { UserAddEditModal } from './add-edit-modal'
import { Button } from '@/components/button'

const styles = `
  flex 
  items-center 
  rounded-[4px] 
  hover:bg-pLight 
  cursor-pointer
`

const menuItemStyles = `
  flex
  items-center
  caption
`

export const AddUsersButton = ({ }) => {
  const [editModalOpen, setEditModalOpen] = useState(false)

  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen)
  }

  return (
    <div className={styles} style={{ zIndex: 1000 }}>
      <Button text='Add User' className='w-[180px]' onClick={toggleEditModal} />
      <UserAddEditModal isOpen={editModalOpen} onClose={toggleEditModal} type='add' />
    </div>
  )
}