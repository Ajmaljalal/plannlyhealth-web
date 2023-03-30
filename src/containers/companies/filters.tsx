'use client'
import { Input } from '@/components/input'
import Dropdown from '@/components/searchable-select'
import { useState } from 'react'

const plans = [
  { value: 'all', label: 'All Plans' },
  { value: 'Startup', label: 'Startup' },
  { value: 'Team', label: 'Team' },
  { value: 'Business', label: 'Business' },
];

const statuses = [
  { value: 'all', label: 'All Statuses' },
  { value: 'Active', label: 'Active' },
  { value: 'Inactive', label: 'Inactive' },
  { value: 'Not Activated', label: 'Not Activated' },
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
        placeholder='Search companies by name'
        onChange={filterUsersByNameOrEmail}
      />
      <Dropdown
        value={status}
        options={statuses}
        onChange={filterUserByStatus}
        placeholder=' Subscription Status'
      />
      <Dropdown
        value={role}
        options={plans}
        onChange={filterUsersByRole}
        placeholder='Plan'
      />
    </div>
  )
}