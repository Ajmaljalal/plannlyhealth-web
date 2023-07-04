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

  const filterTransactionsByDate = (dates: any) => {
    const [start, end] = dates

    // TODO: filter Transactions by date
    if (!start || !end) return
    // data.filteredTransactions = data.filteredTransactions.filter((claim) => {
    // const claimDate = getFormattedDate(claim.date)
    const startDate = getFormattedDate(start)
    const endDate = getFormattedDate(end)
    // console.log('claimDate:', claimDate)
    console.log('startDate:', startDate)
    console.log('endDate:', endDate)
    // return claimDate >= startDate && claimDate <= endDate
    // })

  }




  const filterTransactionsByVendor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearch(value)
    // TODO: filter Transactions by vendor
    // data.filteredTransactions = data.Transactions.filter((claim) => claim.vendor.toLowerCase().includes(value.toLowerCase()))
  }

  const filterTransactionsByStatus = (e: { label: string, value: string }) => {
    const value = e.value
    setStatus(value)
    // TODO: filter Transactions by status
    // data.filteredTransactions = data.filteredTransactions.filter((claim) => claim.status.toLowerCase().includes(value.toLowerCase()))
    // console.log(data.filteredTransactions)
  }

  const filterTransactionsByUser = (e: { label: string, value: string }) => {
    const value = e.value
    setUser(value)
    // TODO: filter Transactions by user
    // console.log('e:', value)
    // data.filteredTransactions = data.filteredTransactions.filter((claim) => claim.user.toLowerCase().includes(value.toLowerCase()))
    // console.log('Transactions:', data.filteredTransactions)
  }

  return (
    <div className='flex gap-2'>
      <Input
        name='search'
        value={search}
        className='border border-transparent flex-1'
        placeholder='Search Transactions'
        onChange={filterTransactionsByVendor}
      />
      <Dropdown
        value={user}
        options={users}
        onChange={filterTransactionsByUser}
        isSearchable={true}
        placeholder='User'
      />
      <Dropdown
        value={status}
        options={statuses}
        onChange={filterTransactionsByStatus}
        placeholder='Status'
      />
      {/* <Input name='date' value='' type='date' className='border border-transparent flex-1' placeholder='Date' />  */}
      <DateRangeSelector onChange={filterTransactionsByDate} />
    </div>
  )
}
