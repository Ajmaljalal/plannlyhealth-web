'use client'
import { CheckBox } from '@/components/checkbox'
import React from 'react'

interface PayoutCheckboxProps {
  payoutId: number
}

export const PayoutCheckbox = ({ payoutId }: PayoutCheckboxProps) => {
  // TODO: Move this to redux
  const [currentValue, seCurrentValue] = React.useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentValue === e.target.value) {
      seCurrentValue('')
    } else {
      seCurrentValue(e.target.value)
    }
  }
  return (
    <td className='w-[24px]'>
      <CheckBox value={payoutId.toString()} currentValue={currentValue} onChange={handleChange} />
    </td>
  )
}