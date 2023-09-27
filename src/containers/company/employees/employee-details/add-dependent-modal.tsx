import React, { useState } from 'react'
import { Modal } from '@/components/modal'
import { Input } from '@/components/input'
import { Button } from '@/components/button'


const modalContentStyles = `
  flex 
  flex-col 
  gap-4
`

export const DependentAddModal = ({ isOpen, onClose, onSave }: { isOpen: boolean, onClose: () => void, onSave: (employee: any) => void }) => {
  const [currentDependent, setcurrentDependent] = useState<any>({})

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setcurrentDependent({ ...currentDependent, [name]: value })
  }

  const handleSave = () => {
    if (!currentDependent.name || !currentDependent.relation || !currentDependent.date_of_birth) return
    currentDependent.id = Math.floor(Math.random() * 1000)
    onSave(currentDependent)
    setcurrentDependent({})
    onClose()
  }

  const handleCancel = () => {
    onClose()
  }


  const isDisabled = !currentDependent.name || !currentDependent.relation || !currentDependent.date_of_birth
  const ctaButton = <Button text='Save' isPrimary className='w-[160px]' onClick={handleSave} disabled={isDisabled} />

  return (
    <Modal isOpen={isOpen} onClose={handleCancel} ctaButton={ctaButton}>
      <div className={modalContentStyles}>
        <Input
          name="name"
          label="Name"
          value={currentDependent.name}
          placeholder='Full name'
          onChange={handleInputChange}
        />
        <Input
          name="relation"
          label="Relation"
          value={currentDependent.relation}
          placeholder='Relation'
          onChange={handleInputChange}
        />
        <Input
          name="date_of_birth"
          label="Date of Birth"
          value={currentDependent.date_of_birth}
          placeholder='Date of Birth'
          onChange={handleInputChange}
        />
      </div>
    </Modal>
  );
}