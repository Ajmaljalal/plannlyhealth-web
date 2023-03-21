'use client'
import React, { useEffect, useRef, useState } from 'react'

interface DropdownMenuProps {
  triggerBtn: React.ReactNode
  width?: string
  menuItems:
  {
    element: React.ReactNode | string
    onClick: () => void
  }[]

}

const menuItemsWrapperStyles = `
  origin-top-right 
  absolute 
  right-0 
  mt-2 
  w-fit
  min-w-[150px] 
  rounded-[12px] 
  border 
  border-[0.5px]
  border-pBackground
  shadow-xl 
  shadow-black
  bg-pWhite 
  z-1000
`

const menuItemStyles = `
  block
  px-4
  py-2
  text-sm
  hover:bg-pBackground
  first:rounded-t-[12px] 
  last:rounded-b-[12px]
`


export const DropdownMenu = ({ triggerBtn, menuItems }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // @ts-ignore
      if (menuRef.current && !menuRef?.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuRef])



  return (
    <div className="relative inline-block text-left">
      <div onClick={handleToggle}>
        {triggerBtn}
      </div>
      {isOpen ? <div className={menuItemsWrapperStyles} ref={menuRef}>
        {
          menuItems?.map((item, index) => {
            return (
              <span
                key={index}
                className={menuItemStyles}
                role="menuitem"
                onClick={() => {
                  item.onClick()
                  handleToggle()
                }}
              >
                {item.element}
              </span>
            )
          })
        }
      </div> : null}
    </div>
  )
}

export default DropdownMenu

