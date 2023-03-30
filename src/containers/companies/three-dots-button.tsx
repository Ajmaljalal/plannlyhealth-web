'use client'
import { useState } from 'react'
import Image from 'next/image'
import { DropdownMenu } from '@/components/dropdown-menu'
import { icons } from '@/lib/icons'
import { ConfirmModal } from './confirm-modal'
import { useRouter } from 'next/navigation'


const styles = `flex items-center rounded-[4px] hover:bg-pLight w-[24px] h-[24px] py-[4px] cursor-pointer`

interface ThreeDotsButtonProps {
  company: any
}

export const ThreeDotsButton = ({ company }: ThreeDotsButtonProps) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false)


  const toggleDropdown = (isNowOpen: boolean) => {
    if (isOpen) {
      setIsOpen(isNowOpen)
      return
    }
    setIsOpen(isNowOpen)
  }

  const toggleConfirmationModal = () => {
    setConfirmationModalOpen(!confirmationModalOpen)
  }

  const moveToCompanyDetails = () => {
    router.push(`/companies/${company.id}`)

  }

  const handleAccessChange = () => {
    console.log('change company access', company)
    // TODO: Add delete user functionality
    toggleConfirmationModal()
  }

  return (
    <div className={styles}>
      <Image src={icons.threeDots} alt='three dots menu' onClick={() => toggleDropdown(isOpen ? false : true)} />
      <DropdownMenu
        isOpen={isOpen}
        onClose={toggleDropdown}
        width='w-[180px]'
        menuItems={[
          {
            element: 'Details',
            onClick: moveToCompanyDetails
          },
          {
            element: 'Limited',
            onClick: toggleConfirmationModal
          },
        ]}
      />
      <ConfirmModal
        isOpen={confirmationModalOpen}
        onClose={toggleConfirmationModal}
        onConfirm={handleAccessChange}
        companyName={company.name}
      />
    </div>
  )
}