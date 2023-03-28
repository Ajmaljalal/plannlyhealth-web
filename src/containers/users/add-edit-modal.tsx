import React, { useState } from 'react'
import { Modal } from '@/components/modal'
import { Divider } from '@/components/divider'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { Flex } from '@/components/flexbox'
import Dropdown from '@/components/searchable-select'
import { phonePattern } from '@/lib/helpers'

interface User {
  email: string
  firstName: string
  lastName: string
  role: string
  phone: string
  address: string
  department: string
  title: string
  birthDate: string
  workStartDate: string
}

interface UserEditModalProps {
  isOpen: boolean
  onClose: () => void
  user?: User
  type?: 'add' | 'edit'
}

const modalContentStyles = `
  flex 
  flex-col 
  gap-7
`
const roles = [
  { value: 'Admin', label: 'Admin' },
  { value: 'Super Admin', label: 'Super Admin' },
  { value: 'Standard', label: 'Standard' },
];

export const UserAddEditModal = ({ isOpen, onClose, user, type }: UserEditModalProps) => {
  const [userData, setUserData] = useState<User>({
    email: user?.email || '',
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    role: user?.role || '',
    phone: user?.phone || '',
    address: user?.address || '',
    department: user?.department || '',
    title: user?.title || '',
    birthDate: user?.birthDate || '',
    workStartDate: user?.workStartDate || '',
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log('name', name)
    console.log('value', value)
    setUserData({ ...userData, [name]: value })
  }

  const handleRoleChange = (e: { label: string, value: string }) => {
    const { value } = e
    setUserData({ ...userData, role: value })
  }

  const handleSave = () => {
    console.log('save')
    console.log('userData', userData)
    onClose()
  }

  const handleCancel = () => {
    console.log('cancel')
    setUserData({
      email: user?.email || '',
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      role: user?.role || '',
      phone: user?.phone || '',
      address: user?.address || '',
      department: user?.department || '',
      title: user?.title || '',
      birthDate: user?.birthDate || '',
      workStartDate: user?.workStartDate || '',
    })
    onClose()
  }

  const isDisabled = !userData.email ||
    !userData.firstName ||
    !userData.lastName ||
    !userData.role ||
    !userData.phone ||
    !userData.address

  const ctaButton = <Button text='Save' className='w-1/2' onClick={handleSave} disabled={isDisabled} />
  const titleText = type === 'add' ? 'Add User' : 'Edit User'

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCancel}
      ctaButton={ctaButton}
    >
      <h2>{titleText}</h2>
      <Divider />
      <div className={modalContentStyles}>
        <Input
          label='Email'
          name='email'
          type='email'
          value={userData.email}
          onChange={handleChange}
          required
        />
        <Flex>
          <Input
            label='First Name'
            name='firstName'
            value={userData.firstName}
            onChange={handleChange}
            className='w-1/2'
            required
          />
          <Input
            label='Last Name'
            name='lastName'
            value={userData.lastName}
            onChange={handleChange}
            className='w-1/2'
            required
          />
        </Flex>
        <Flex>
          <Dropdown
            value={userData.role}
            options={roles}
            onChange={handleRoleChange}
            placeholder='Role'
          />
          <Input
            label='Phone'
            name='phone'
            value={userData.phone}
            type='tel'
            pattern={phonePattern}
            onChange={handleChange}
            className='w-1/2'
            required
          />
        </Flex>
        <Input
          label='Address'
          name='address'
          type='address'
          value={userData.address}
          onChange={handleChange}
          required
        />
        <Flex>
          <Input
            label='Department'
            name='department'
            value={userData.department}
            onChange={handleChange}
            className='w-1/2'
          />
          <Input
            label='Title'
            name='title'
            value={userData.title}
            onChange={handleChange}
            className='w-1/2'
          />
        </Flex>
        <Flex>
          <Input
            label='Birth Date'
            name='birthDate'
            value={userData.birthDate}
            onChange={handleChange}
            className='w-1/2'
          />
          <Input
            label='Work Start Date'
            name='workStartDate'
            value={userData.workStartDate}
            onChange={handleChange}
            className='w-1/2'
          />
        </Flex>
        <Divider />
      </div>
    </Modal>
  )
}