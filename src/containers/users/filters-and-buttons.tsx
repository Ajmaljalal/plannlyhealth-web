'use client'
import { Input } from '@/components/input'
import Dropdown from '@/components/searchable-select'
import { useState } from 'react'
import { AddUsersButton } from './add-users-button'

const roles = [
  { value: 'all', label: 'All Roles' },
  { value: 'Admin', label: 'Admin' },
  { value: 'Super Admin', label: 'Super Admin' },
  { value: 'Standard', label: 'Standard' },
];

const statuses = [
  { value: 'all', label: 'All Statuses' },
  { value: 'Active', label: 'Active' },
  { value: 'Invited', label: 'Invited' },
  { value: 'Deactivated', label: 'Deactivated' },
];

export const FiltersAndButtons = () => {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')
  const [role, setRole] = useState('all')


  const filterUsersByNameOrEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearch(value)
    // TODO: filter Users by name or email
  }

  const filterUserByStatus = (e: { label: string, value: string }) => {
    const value = e.value
    setStatus(value)
    // TODO: filter Users by status
  }

  const filterUsersByRole = (e: { label: string, value: string }) => {
    const value = e.value
    setRole(value)
    // TODO: filter Users by role
  }

  return (
    <div className='flex gap-2'>
      <Input
        name='search'
        value={search}
        className='border border-transparent flex-1'
        placeholder='Search users'
        onChange={filterUsersByNameOrEmail}
      />
      <Dropdown
        value={status}
        options={statuses}
        onChange={filterUserByStatus}
        placeholder='Status'
      />
      <Dropdown
        value={role}
        options={roles}
        onChange={filterUsersByRole}
        placeholder='Role'
      />
      <AddUsersButton />
    </div>
  )
}