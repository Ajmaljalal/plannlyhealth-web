'use client'
import React from 'react'
import Image from 'next/image'
import { DropdownMenu } from '@/components/dropdown-menu'
import { icons } from '@/lib/icons'


const threeDotsStyles = `flex items-center rounded-[4px] hover:bg-pBackground w-[24px] h-[24px] py-[4px] cursor-pointer`
export const DropdownMenuButton = () => {

  return (
    <div className={threeDotsStyles}>
      <DropdownMenu
        triggerBtn={<Image src={icons.threeDots} alt='three dots menu' />}
        menuItems={[
          {
            element: 'Edit',
            onClick: () => console.log('Edit'),
          },
          {
            element: 'Deactivate',
            onClick: () => console.log('Delete'),
          },

        ]}
      />
    </div>
  )
}