'use client'
import React, { useState } from 'react'
import { Modal } from '@/components/modal'
import { Divider } from '@/components/divider'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { RadioButton } from '@/components/radio'
import { Program } from '@/lib/types/programs'

interface InActiveProgramActivateModalProps {
  program: Program
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

export const InActiveProgramActivateModal = ({ program }: InActiveProgramActivateModalProps) => {
  const [budgetValue, setBudgetValue] = useState<number | string>(100)
  const [frequencyValue, setFrequencyValue] = useState<string>('monthly')
  const [accessValue, setAccessValue] = useState<string>('unlimited')
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

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


  const handleYes = () => {
    console.log('yes')
    console.log('budget', budgetValue)
    console.log('access', accessValue)
    console.log('frequency', frequencyValue)
    toggleOpen()
  }

  const handleCancel = () => {
    console.log('cancel')
    setAccessValue('')
    setBudgetValue('')
    setFrequencyValue('')
    toggleOpen()
  }

  const ctaButton = <Button text='Save' className='w-1/2' onClick={handleYes} />

  return (
    <>
      <Button text='Activate' className='w-full md:w-1/2' onClick={toggleOpen} />
      <Modal
        isOpen={isOpen}
        onClose={handleCancel}
        ctaButton={ctaButton}
      >
        <h2 className='text-pDark'>Activate Program</h2>
        <Divider />
        <div className={modalContentStyles}>
          <Input
            type='number'
            name='budget'
            label='Budget Per Employee'
            value={budgetValue}
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
    </>
  )
}