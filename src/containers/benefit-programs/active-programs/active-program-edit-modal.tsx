import React, { useState } from 'react'
import { Modal } from '@/components/modal'
import { Divider } from '@/components/divider'
import { Input } from '@/components/input'
import { Program } from '@/lib/types/programs'
import { Button } from '@/components/button'
import { RadioButton } from '@/components/radio'

interface ActiveProgramEditModalProps {
  isOpen: boolean
  onClose: () => void
  program?: Program
}

const modalContentStyles = `
  flex 
  flex-col 
  gap-4
`
const modalInputsWrapperStyles = `
  flex 
  gap-7 
  h-fit
`
const modalInputTitleStyles = `
  text-pDarkGray
  mb-[6px]
`

export const ActiveProgramEditModal = ({ isOpen, onClose, program = {
  budget: 100,
  name: 'Health & Wellness',
  frequency: 'monthly',
  access: 'unlimited',
  description: 'Gym Memberships, Spa/Massages, Physical Therapy ',
} }: ActiveProgramEditModalProps) => {
  const [budgetValue, setBudgetValue] = useState<number>(program.budget)
  const [frequencyValue, setFrequencyValue] = useState<string>(program.frequency)
  const [accessValue, setAccessValue] = useState<string>(program.access)

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const parsedValue = parseInt(value, 10)
    if (parsedValue) {
      setBudgetValue(parsedValue)
    }
  }

  const handleFrequencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFrequencyValue(value)
  }

  const handleAccessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setAccessValue(value)
  }


  const handleSave = () => {
    console.log('save')
    console.log('budget', budgetValue)
    console.log('access', accessValue)
    console.log('frequency', frequencyValue)
    onClose()
  }

  const handleCancel = () => {
    console.log('cancel')
    setAccessValue(program.access)
    setBudgetValue(program.budget)
    setFrequencyValue(program.frequency)
    onClose()
  }

  const ctaButton = <Button text='Save' className='w-1/2' onClick={handleSave} />

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCancel}
      ctaButton={ctaButton}
    >
      <h2>Edit Program</h2>
      <Divider />
      <div className={modalContentStyles}>
        <Input
          type='number'
          name='budget'
          label='Budget Per Employee'
          value={`${budgetValue}`}
          className='max-w-[260px]'
          onChange={handleBudgetChange}
        />
        <div>
          <h6 className={modalInputTitleStyles}>Frequency</h6>
          <div className={modalInputsWrapperStyles}>
            <RadioButton label='Monthly' value='monthly' name='frequency' currentValue={frequencyValue} onChange={handleFrequencyChange} />
            <RadioButton label='Quarterly' value='quarterly' name='frequency' currentValue={frequencyValue} onChange={handleFrequencyChange} />
            <RadioButton label='Yearly' value='yearly' name='frequency' currentValue={frequencyValue} onChange={handleFrequencyChange} />
          </div>
        </div>
        <div>
          <h6 className={modalInputTitleStyles}>Access</h6>
          <div className={modalInputsWrapperStyles}>
            <RadioButton label='Limited' value='limited' name='access' currentValue={accessValue} onChange={handleAccessChange} />
            <RadioButton label='Unlimited' value='unlimited' name='access' currentValue={accessValue} onChange={handleAccessChange} />
          </div>
        </div>
        <Divider />
      </div>
    </Modal>
  )
}