import React, { useState } from 'react'
import { Modal } from '@/components/modal'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { TextArea } from '@/components/textarea'
import axios from 'axios'
import { useDispatch } from '@/store/store'
import { updateBenefit } from '@/store/company'


const baseUrl = `${process.env.NEXT_PUBLIC_PLANNLY_API_URL}/benefits`


const modalContentStyles = `
  flex 
  flex-col 
  gap-4
`

export const BenefitDetailsModal = ({ isOpen, onClose, benefit }: { isOpen: boolean, onClose: () => void, benefit: any }) => {
  const dispatch = useDispatch()
  const [currentBenefit, setCurrentBenefit] = useState<any>(benefit)

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setCurrentBenefit({ ...currentBenefit, [name]: value })
  }

  const handleSave = async () => {
    const result = await axios.put(`${baseUrl}/${benefit.id}`, currentBenefit)
    const newBenefit = result.data
    dispatch(updateBenefit(newBenefit))
    onClose()
  }

  const handleCancel = () => {
    onClose()
  }

  const ctaButton = <Button text='Save' isPrimary className='w-full md:w-[160px]' onClick={handleSave} />

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
          name="how_to_enroll_link"
          label="Link"
          value={currentBenefit.how_to_enroll_link}
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
          value={currentBenefit.how_to_enroll}
          placeholder='How to Enroll'
          onChange={handleInputChange}
        />
      </div>
    </Modal>
  );
}
