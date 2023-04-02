import { useState } from 'react'
import { Modal } from '@/components/modal'
import { Divider } from '@/components/divider'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import Dropdown from '@/components/searchable-select'
import { TextArea } from '@/components/textarea'
import { Flex } from '@/components/flexbox'


interface Notification {
  title: string
  description: string
  company: string
  dateSent: string
  link?: string
}

interface CategoryEditModalProps {
  isOpen: boolean
  onClose: () => void
  notification?: Notification
  type?: 'new' | 'details'
}

const modalContentStyles = `
  flex 
  flex-col 
  gap-7
`

export const AddEditNotificationModal = ({ isOpen, onClose, notification, type = 'details' }: CategoryEditModalProps) => {
  // check if notification's dateSent is in the future
  const isScheduled = notification && new Date(notification.dateSent) > new Date()

  const [notificationData, setNotificationData] = useState<Notification>({
    title: notification?.title || '',
    description: notification?.description || '',
    company: notification?.company || '',
    dateSent: notification?.dateSent || '',
    link: notification?.link || '',
  })


  const handleChange = (e: any) => {
    const { name, value } = e.target
    console.log('name', name)
    console.log('value', value)
    setNotificationData({ ...notificationData, [name]: value })
  }

  const handleCompanyChange = (e: { label: string, value: string }) => {
    const { value } = e
    setNotificationData({ ...notificationData, company: value })
  }

  const handleSave = () => {
    console.log('save')
    console.log('categoryData', notificationData)
    onClose()
  }

  const handleCancel = () => {
    console.log('cancel')
    setNotificationData({
      title: notification?.title || '',
      description: notification?.description || '',
      company: notification?.company || '',
      dateSent: notification?.dateSent || '',
      link: notification?.link || '',
    })
    onClose()
  }


  const isButtonDisabled = !notificationData.title || !notificationData.description
  // get ctaButton text based on type and if notification is scheduled
  const ctaButtonText = type === 'new' ? 'Save' : isScheduled ? 'Save' : 'Ok'
  const isInputDisabled = type === 'details' && !isScheduled
  const ctaButton = <Button text={ctaButtonText} className='w-1/2' onClick={handleSave} disabled={isButtonDisabled} />
  const title = type === 'new' ? 'New Notification' : 'Notification Details'


  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCancel}
      ctaButton={ctaButton}
    >
      <h2>{title}</h2>
      <Divider />
      <div className={modalContentStyles}>
        <Dropdown
          placeholder='Select a company'
          value={notificationData.company}
          isSearchable
          disabled={isInputDisabled}
          options={[
            { value: 'all', label: 'All companies' },
            { value: 'Tulsa Remote', label: 'Tulsa Remote' },
            { value: 'Plannly', label: 'Plannly' },
            { value: 'Regent Bank', label: 'Regent Bank' },
          ]}
          onChange={handleCompanyChange}
        />
        <Input
          label='Title'
          name='title'
          value={notificationData.title}
          onChange={handleChange}
          disabled={isInputDisabled}
          required
        />
        <TextArea
          label='Description'
          name='description'
          className='h-[100px]'
          inputClassName='h-full pt-4 resize-none'
          onChange={handleChange}
          value={notificationData.description}
          disabled={isInputDisabled}
          required
        />
        <Input
          label='Link'
          name='link'
          value={notificationData.link || ''}
          onChange={handleChange}
          disabled={isInputDisabled}
        />
        <Flex>
          <Input
            label='Date Sent'
            name='dateSent'
            type='date'
            value={notificationData.dateSent}
            onChange={handleChange}
            disabled={isInputDisabled}
            className='flex-1'
          />
          <Input
            label='Time Sent'
            name='timeSent'
            type='time'
            value={notificationData.dateSent}
            onChange={handleChange}
            disabled={isInputDisabled}
          />

        </Flex>
        <Divider />
      </div>
    </Modal>
  )
}