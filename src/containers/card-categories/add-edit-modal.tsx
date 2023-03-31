import { useState } from 'react'
import { Modal } from '@/components/modal'
import { Divider } from '@/components/divider'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import Dropdown from '@/components/searchable-select'
import { benefitPrograms } from '@/lib/helpers'


interface Category {
  categoryName: string
  code: string
  stripeCategoryName: string
  benefitsProgram: string
}

interface CategoryEditModalProps {
  isOpen: boolean
  onClose: () => void
  category?: Category
  type?: 'add' | 'edit'
}

const modalContentStyles = `
  flex 
  flex-col 
  gap-7
`

export const CategoryAddEditModal = ({ isOpen, onClose, category, type }: CategoryEditModalProps) => {
  const [categoryData, setCategoryData] = useState<Category>({
    categoryName: category?.categoryName || '',
    code: category?.code || '',
    stripeCategoryName: category?.stripeCategoryName || '',
    benefitsProgram: category?.benefitsProgram || '',
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log('name', name)
    console.log('value', value)
    setCategoryData({ ...categoryData, [name]: value })
  }

  const handleProgramChange = (e: { label: string, value: string }) => {
    const { value } = e
    setCategoryData({ ...categoryData, benefitsProgram: value })
  }

  const handleSave = () => {
    console.log('save')
    console.log('categoryData', categoryData)
    onClose()
  }

  const handleCancel = () => {
    console.log('cancel')
    setCategoryData({
      categoryName: category?.categoryName || '',
      code: category?.code || '',
      stripeCategoryName: category?.stripeCategoryName || '',
      benefitsProgram: category?.benefitsProgram || '',
    })
    onClose()
  }

  const isDisabled = !categoryData.categoryName || !categoryData.code || !categoryData.stripeCategoryName || !categoryData.benefitsProgram

  const ctaButton = <Button text='Save' className='w-1/2' onClick={handleSave} disabled={isDisabled} />
  const titleText = type === 'add' ? 'Add category' : 'Edit category'

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCancel}
      ctaButton={ctaButton}
    >
      <h2>{titleText}</h2>
      <Divider />
      <div className={modalContentStyles}>
        <Input
          label='Category Name'
          name='categoryName'
          value={categoryData.categoryName}
          onChange={handleChange}
          required
        />
        {type === 'add' && <Input
          label='Stripe Category Name'
          name='stripeCategoryName'
          value={categoryData.stripeCategoryName}
          onChange={handleChange}
          required
        />}
        {type === 'add' && <Input
          label='Code'
          name='code'
          type='number'
          value={categoryData.code}
          onChange={handleChange}
          required
        />}
        <Dropdown
          value={categoryData.benefitsProgram}
          options={benefitPrograms}
          onChange={handleProgramChange}
          placeholder='Benefits Program'
        />
        <Divider />
      </div>
    </Modal>
  )
}