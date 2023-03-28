'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { DropdownMenu } from '@/components/dropdown-menu'
import { icons } from '@/lib/icons'
import { ConfirmModal } from './confirm-modal'
import { UserAddEditModal } from './add-edit-modal'
import { Button } from '@/components/button'
import { csvToObject, downloadCsv } from '@/lib/helpers/csv-helpers'
import { sampleCSVContent } from '@/lib/helpers'


const styles = `
  flex 
  items-center 
  rounded-[4px] 
  hover:bg-pLight 
  cursor-pointer
`

const menuItemStyles = `
  flex
  items-center
  caption
`

export const AddUsersButton = ({ }) => {
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false)
  const [title, setTitle] = useState('null')

  const toggleDropdown = (isNowOpen: boolean) => {
    if (isOpen) {
      setIsOpen(isNowOpen)
      return
    }
    setIsOpen(isNowOpen)
  }

  const toggleConfirmationModal = (text: string) => {
    setConfirmationModalOpen(!confirmationModalOpen)
    setTitle(text)
  }

  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen)
    setConfirmationModalOpen(false)
  }

  const handleUploadCSV = async (e: any) => {
    const file = e.target.files[0]
    const data = await csvToObject(file)
    console.log(data)
    toggleConfirmationModal('null')
  }

  const handleDownloadExample = () => {
    downloadCsv(sampleCSVContent, 'export_users_example')
  }

  const confirmActions: any = {
    'Add User': toggleEditModal,
    'Upload CSV': handleUploadCSV,
  }

  const AddNewButton = () => {
    return (
      <p className={menuItemStyles}>
        <Image src={icons.add} alt='add' />
        <span className='ml-2 text-pDark'>Add New</span>
      </p>
    )
  }

  const UploadCSVButton = () => {
    return (
      <p className={menuItemStyles}>
        <Image src={icons.uploadBlack} alt='upload' />
        <span className='ml-2 text-pDark'>Upload CSV</span>
      </p>
    )
  }

  const DownloadExampleButton = () => {
    return (
      <p className={menuItemStyles}>
        <Image src={icons.download} alt='upload' />
        <span className='ml-2 text-pPink'>Download Example</span>
      </p>
    )
  }

  return (
    <div className={styles} style={{ zIndex: 1000 }}>
      <Button text='Add Users' className='w-[180px]' onClick={() => toggleDropdown(isOpen ? false : true)} />
      <DropdownMenu
        isOpen={isOpen}
        onClose={toggleDropdown}
        width='w-[200px]'
        menuItems={[
          {
            element: AddNewButton(),
            onClick: () => toggleConfirmationModal('Add User')
          },
          {
            element: UploadCSVButton(),
            onClick: () => toggleConfirmationModal('Upload CSV')
          },
          {
            element: DownloadExampleButton(),
            onClick: handleDownloadExample
          }
        ]}
      />
      {/* TODO: render modals here */}
      <ConfirmModal
        isOpen={confirmationModalOpen}
        onClose={toggleConfirmationModal}
        title={title}
        onConfirm={confirmActions[title]}
      />
      <UserAddEditModal isOpen={editModalOpen} onClose={toggleEditModal} type='add' />
    </div>
  )
}