import React, { useState } from 'react'
import { Modal } from '@/components/modal'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { TextArea } from '@/components/textarea'
import { useSelector } from '@/store/store'
import { companyDetailsSelector } from '@/store/company'


const modalContentStyles = `
  flex 
  flex-col 
  gap-2
`

export const BenefitAddModal = ({ isOpen, onClose, onSave }: { isOpen: boolean, onClose: () => void, onSave: (benefit: any) => void }) => {
  const company: any = useSelector(companyDetailsSelector)
  const [currentBenefit, setCurrentBenefit] = useState<any>({
    title: '',
    description: '',
    eligibility: '',
    how_to_enroll_link: '',
    how_to_enroll: ''
  })

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setCurrentBenefit({ ...currentBenefit, [name]: value })
  }

  const handleSave = () => {
    if (!currentBenefit.title || !currentBenefit.description || !currentBenefit.eligibility || !currentBenefit.how_to_enroll || !currentBenefit.how_to_enroll_link) return
    if (!company) return
    currentBenefit.company_id = company.id
    console.log('current benefit: ', currentBenefit)
    onSave(currentBenefit)
    setCurrentBenefit({})
    onClose()
  }

  const handleCancel = () => {
    onClose()
  }


  const isDisabled = !currentBenefit.title || !currentBenefit.description || !currentBenefit.eligibility || !currentBenefit.how_to_enroll || !currentBenefit.how_to_enroll_link
  const ctaButton = <Button text='Save' isPrimary className='w-[160px]' onClick={handleSave} disabled={isDisabled} />

  return (
    <Modal isOpen={isOpen} onClose={handleCancel} ctaButton={ctaButton} size='large'>
      <div className={modalContentStyles}>
        <Input
          name="title"
          label="Title"
          value={currentBenefit.title}
          placeholder='Title'
          onChange={handleInputChange}
        />
        <Input
          name="how_to_enroll_link"
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
          name="how_to_enroll"
          label="How to Enroll"
          value={currentBenefit.howToEnroll}
          placeholder='How to Enroll'
          onChange={handleInputChange}
        />
      </div>
    </Modal>
  );
}
