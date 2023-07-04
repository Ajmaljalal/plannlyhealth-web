'use client'
import DateRangeSelector from '@/components/date-picker'
import { Input } from '@/components/input'
import Dropdown from '@/components/searchable-select'
import { getFormattedDate } from '@/lib/helpers'
import { useState } from 'react'
// import { data } from './data'

const users = [
  { value: 'all', label: 'All' },
  { value: 'Ajmal', label: 'ajmal' },
  { value: 'Meena', label: 'meena' },
  { value: 'Kausar', label: 'kausar' },
];

const statuses = [
  { value: 'all', label: 'All' },
  { value: 'Requested', label: 'Requested' },
  { value: 'Approved', label: 'Approved' },
  { value: 'Declined', label: 'Declined' },
];

export const Filters = () => {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')
  const [user, setUser] = useState('all')

  const filterClaimsByDate = (dates: any) => {
    const [start, end] = dates

    // TODO: filter claims by date
    if (!start || !end) return
    // data.filteredClaims = data.filteredClaims.filter((claim) => {
    // const claimDate = getFormattedDate(claim.date)
    const startDate = getFormattedDate(start)
    const endDate = getFormattedDate(end)
    // console.log('claimDate:', claimDate)
    console.log('startDate:', startDate)
    console.log('endDate:', endDate)
    // return claimDate >= startDate && claimDate <= endDate
    // })

  }




  const filterClaimsByVendor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearch(value)
    // TODO: filter claims by vendor
    // data.filteredClaims = data.claims.filter((claim) => claim.vendor.toLowerCase().includes(value.toLowerCase()))
  }

  const filterClaimsByStatus = (e: { label: string, value: string }) => {
    const value = e.value
    setStatus(value)
    // TODO: filter claims by status
    // data.filteredClaims = data.filteredClaims.filter((claim) => claim.status.toLowerCase().includes(value.toLowerCase()))
    // console.log(data.filteredClaims)
  }

  const filterClaimsByUser = (e: { label: string, value: string }) => {
    const value = e.value
    setUser(value)
    // TODO: filter claims by user
    // console.log('e:', value)
    // data.filteredClaims = data.filteredClaims.filter((claim) => claim.user.toLowerCase().includes(value.toLowerCase()))
    // console.log('claims:', data.filteredClaims)
  }

  return (
    <div className='flex gap-2'>
      <Input
        name='search'
        value={search}
        className='border border-transparent flex-1'
        placeholder='Search claims'
        onChange={filterClaimsByVendor}
      />
      <Dropdown
        value={user}
        options={users}
        onChange={filterClaimsByUser}
        isSearchable={true}
        placeholder='User'
      />
      <Dropdown
        value={status}
        options={statuses}
        onChange={filterClaimsByStatus}
        placeholder='Status'
      />
      <DateRangeSelector onChange={filterClaimsByDate} />
    </div>
  )
}
