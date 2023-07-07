import React, { useState } from 'react'
import { Modal } from '@/components/modal'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { TextArea } from '@/components/textarea'


const modalContentStyles = `
  flex 
  flex-col 
  gap-4
`

export const BenefitDetailsModal = ({ isOpen, onClose, benefit }: { isOpen: boolean, onClose: () => void, benefit: any }) => {
  const [currentBenefit, setCurrentBenefit] = useState<any>(benefit)

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setCurrentBenefit({ ...currentBenefit, [name]: value })
  }

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
          value={currentBenefit.title}
          placeholder='Title'
          onChange={handleInputChange}
        />
        <Input
          name="howToEnrollLink"
          label="Link"
          value={currentBenefit.howToEnrollLink}
          placeholder='Link'
          onChange={handleInputChange}
        />
        <TextArea
          name="description"
          label="Description"
          value={currentBenefit.description}
          placeholder='Description'
          onChange={handleInputChange}
        />
        <TextArea
          name="eligibility"
          label="Eligibility"
          value={currentBenefit.eligibility}
          placeholder='Eligibility'
          onChange={handleInputChange}
        />
        <TextArea
          name="howToEnroll"
          label="How to Enroll"
          value={currentBenefit.howToEnroll}
          placeholder='How to Enroll'
          onChange={handleInputChange}
        />

        <div>
        </div>
      </div>
    </Modal>
  );
}
