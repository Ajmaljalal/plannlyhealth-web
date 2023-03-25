'use client'
import DateRangeSelector from '@/components/date-picker'
import Dropdown from '@/components/searchable-select'
import { getFormattedDate } from '@/lib/helpers'
import { useState } from 'react'
import { DownloadAsCSVButton } from './export-list-button'
// import { data } from './data'

const users = [
  { value: 'all', label: 'All' },
  { value: 'Ajmal', label: 'ajmal' },
  { value: 'Meena', label: 'meena' },
  { value: 'Kausar', label: 'kausar' },
];

export const Filters = () => {
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


  const filterTransactionsByUser = (e: { label: string, value: string }) => {
    const value = e.value
    setUser(value)
    // TODO: filter Transactions by user
    // console.log('e:', value)
    // data.filteredTransactions = data.filteredTransactions.filter((claim) => claim.user.toLowerCase().includes(value.toLowerCase()))
    // console.log('Transactions:', data.filteredTransactions)
  }

  return (
    <div className='flex justify-between w-full'>
      <div className='flex gap-2 w-1/2'>
        <DateRangeSelector onChange={filterTransactionsByDate} />
        <Dropdown
          value={user}
          options={users}
          onChange={filterTransactionsByUser}
          isSearchable={true}
          placeholder='User'
        />
      </div>
      <DownloadAsCSVButton />
    </div>
  )
}