'use client'
import { useState } from 'react'
import { CategoryAddEditModal } from './add-edit-modal'
import { Button } from '@/components/button'

const styles = `
  flex 
  items-center 
  rounded-[4px] 
  hover:bg-pLight 
  cursor-pointer
`

export const AddCategoryButton = ({ }) => {
  const [editModalOpen, setEditModalOpen] = useState(false)

  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen)
  }

  return (
    <div className={styles} style={{ zIndex: 1000 }}>
      <Button text='Add Category' className='w-[180px]' onClick={toggleEditModal} />
      <CategoryAddEditModal isOpen={editModalOpen} onClose={toggleEditModal} type='add' />
    </div>
  )
}