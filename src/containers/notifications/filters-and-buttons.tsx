'use client'
import DateRangeSelector from '@/components/date-picker'
import { Input } from '@/components/input'
import Dropdown from '@/components/searchable-select'
import { getFormattedDate } from '@/lib/helpers'
import { useState } from 'react'
import { NewNotificationButton } from './new-notification-button'


const programs = [
  { value: 'all', label: 'All companies' },
  { value: 'Tulsa Remote', label: 'Tulsa Remote' },
  { value: 'Plannly', label: 'Plannly' },
  { value: 'Regent Bank', label: 'Regent Bank' },
]

export const FiltersAndButtons = () => {
  const [search, setSearch] = useState('')
  const [program, setProgram] = useState('')


  const filterCategoriesByDescriptionCodeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearch(value)
  }

  const filterCategoriesByProgram = (e: { label: string, value: string }) => {
    const value = e.value
    setProgram(value)
  }

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

  return (
    <div className='flex gap-2'>
      <Input
        name='search'
        value={search}
        className='border border-transparent flex-1'
        placeholder='Search notifications'
        onChange={filterCategoriesByDescriptionCodeName}
      />
      <Dropdown
        value={program}
        options={programs}
        onChange={filterCategoriesByProgram}
        placeholder='Company'
        isSearchable
      />
      <DateRangeSelector onChange={filterClaimsByDate} />
      <NewNotificationButton />
    </div>
  )
}