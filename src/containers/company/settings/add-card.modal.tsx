import React, { useState } from 'react'
import { Modal } from '@/components/modal'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { useDispatch } from '@/store/store'
import { setCompanyPaymentMethod } from '@/store/company'


const modalContentStyles = `
  flex 
  flex-col 
  gap-4
`

export const CardAddModal = ({ isOpen, onClose, }: { isOpen: boolean, onClose: () => void }) => {
  const [currentCard, setCurrentCard] = useState<any>({})
  const dispatch = useDispatch()

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setCurrentCard({ ...currentCard, [name]: value })
  }

  const handleSave = () => {
    if (!currentCard.name_on_card || !currentCard.card_number || !currentCard.expiry_date || !currentCard.cvv || !currentCard.zip_code) return
    currentCard.id = Math.floor(Math.random() * 1000)
    dispatch(setCompanyPaymentMethod(currentCard))
    setCurrentCard({})
    onClose()
  }

  const handleCancel = () => {
    onClose()
  }

  const isDisabled = !currentCard.name_on_card || !currentCard.card_number || !currentCard.expiry_date || !currentCard.cvv || !currentCard.zip_code
  const ctaButton = <Button text='Save' isPrimary className='w-[160px]' onClick={handleSave} disabled={isDisabled} />

  return (
    <Modal size='small' isOpen={isOpen} onClose={handleCancel} ctaButton={ctaButton}>
      <div className={modalContentStyles}>
        <h2 className='text-[24px] text-basic_black font-bold'>Add Card</h2>
        <Input
          name="name_on_card"
          label="Name on Card"
          value={currentCard.name}
          onChange={handleInputChange}
        />
        <Input
          name="card_number"
          label="Card Number"
          value={currentCard.relation}
          placeholder='---- ---- ---- ----'
          onChange={handleInputChange}
        />
        <div className='flex gap-2'>
          <Input
            name="expiry_date"
            label="Expiry Date"
            value={currentCard.date_of_birth}
            placeholder='MM/YY'
            onChange={handleInputChange}
          />
          <Input
            name="cvv"
            label="CVV"
            value={currentCard.date_of_birth}
            placeholder='CVV'
            onChange={handleInputChange}
          />
          <Input
            name="zip_code"
            label="Zip Code"
            value={currentCard.date_of_birth}
            placeholder='Zip Code'
            onChange={handleInputChange}
          />
        </div>
      </div>
    </Modal>
  );
}