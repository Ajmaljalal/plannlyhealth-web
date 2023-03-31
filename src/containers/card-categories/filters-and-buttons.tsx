'use client'
import { Input } from '@/components/input'
import Dropdown from '@/components/searchable-select'
import { benefitPrograms } from '@/lib/helpers'
import { useState } from 'react'
import { AddCategoryButton } from './add-category-button'


const programs = [
  { value: 'all', label: 'All programs' },
  ...benefitPrograms
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

  return (
    <div className='flex gap-2'>
      <Input
        name='search'
        value={search}
        className='border border-transparent w-1/2'
        placeholder='Search categories'
        onChange={filterCategoriesByDescriptionCodeName}
      />
      <Dropdown
        value={program}
        options={programs}
        onChange={filterCategoriesByProgram}
        placeholder='Benefits Program'
      />
      <AddCategoryButton />
    </div>
  )
}