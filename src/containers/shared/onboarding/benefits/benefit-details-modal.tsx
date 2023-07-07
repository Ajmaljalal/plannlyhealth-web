import React, { useState } from 'react'
import { Modal } from '@/components/modal'
import { Divider } from '@/components/divider'
import { Input } from '@/components/input'
import { RadioButton } from '@/components/radio'
import { Button } from '@/components/button'
import { TextArea } from '@/components/textarea'


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
  mb-[6px]
`

const frequencyOptions = ['Monthly', 'Quarterly', 'Yearly'];

export const BenefitDetailsModal = ({ isOpen, onClose, benefit }: { isOpen: boolean, onClose: () => void, benefit: any }) => {

  const handleSave = async () => {
    onClose()
  }

  const handleCancel = () => {
    onClose()
  }

  const ctaButton = <Button text='Save' isPrimary className='w-[160px]' onClick={handleSave} />

  return (
    <Modal isOpen={isOpen} onClose={handleCancel} ctaButton={ctaButton}>
      <div className={modalContentStyles}>
        <Input
          name="title"
          label="Title"
          value={benefit.title}
          placeholder='Title'
        />
        <Input
          name="link"
          label="Link"
          value={benefit.howToEnrollLink}
          placeholder='Link'
        />
        <TextArea
          name="description"
          label="Description"
          value={benefit.description}
          placeholder='Description'
        />
        <TextArea
          name="eligibility"
          label="Eligibility"
          value={benefit.eligibility}
          placeholder='Eligibility'
        />
        <div>
        </div>
      </div>
    </Modal>
  );
}
