import React, { useState } from 'react'
import { Modal } from '@/components/modal'
import { Input } from '@/components/input'
import { Button } from '@/components/button'


const modalContentStyles = `
  flex 
  flex-col 
  gap-4
`

export const EmployeeEditModal = ({ isOpen, onClose, onSave, employee }: { isOpen: boolean, employee: any, onClose: () => void, onSave: (employee: any) => void }) => {
  const [currentEmployee, setCurrentEmployee] = useState<any>(employee)

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setCurrentEmployee({ ...currentEmployee, [name]: value })
  }

  const handleSave = async () => {
    if (!currentEmployee.first_name || !currentEmployee.last_name || !currentEmployee.job_title || !currentEmployee.email || !currentEmployee.role) return
    onSave(currentEmployee)
    onClose()
  }

  const handleCancel = () => {
    onClose()
  }


  const isDisabled = !currentEmployee.first_name || !currentEmployee.last_name || !currentEmployee.job_title || !currentEmployee.email || !currentEmployee.role
  const ctaButton = <Button text='Save' isPrimary className='w-[160px]' onClick={handleSave} disabled={isDisabled} />

  return (
    <Modal isOpen={isOpen} onClose={handleCancel} ctaButton={ctaButton}>
      <div className={modalContentStyles}>
        <Input
          name="first_name"
          label="First Name"
          value={currentEmployee.first_name}
          placeholder='First Name'
          onChange={handleInputChange}
        />
        <Input
          name="last_name"
          label="Last Name"
          value={currentEmployee.last_name}
          placeholder='Last Name'
          onChange={handleInputChange}
        />
        <Input
          name="email"
          label="Email"
          value={currentEmployee.email}
          placeholder='Email'
          onChange={handleInputChange}
        />
        <Input
          name="job_title"
          label="Job Title"
          value={currentEmployee.job_title}
          placeholder='Job Title'
          onChange={handleInputChange}
        />
        <Input
          name="role"
          label="Role"
          value={currentEmployee.role}
          placeholder='Role'
          onChange={handleInputChange}
        />
        <div>
        </div>
      </div>
    </Modal>
  );
}