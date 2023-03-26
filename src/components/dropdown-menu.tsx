'use client'
import React, { useEffect, useRef } from 'react'

interface DropdownMenuProps {
  isOpen: boolean,
  width?: string
  onClose: (isOpen: boolean) => void,
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
  top-4 
  min-w-[150px] 
  rounded-[12px] 
  border 
  border-[0.5px]
  border-pLight
  shadow-2xl 
  shadow-black
  bg-pWhite 
  z-10000
`

const menuItemStyles = `
  block
  px-4
  py-2
  text-sm
  text-pDarkGray
  hover:bg-pLight
  hover:text-pDark
  first:rounded-t-[12px] 
  last:rounded-b-[12px]
  border-b
  border-pLight
  last:border-none
`


export const DropdownMenu = ({ isOpen, onClose, width, menuItems }: DropdownMenuProps) => {
  // const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null);

  const handleToggle = (isNowOpen: boolean) => {
    onClose(isNowOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // @ts-ignore
      if (menuRef.current && !menuRef?.current?.contains(event.target)) {
        handleToggle(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuRef])



  return (
    <div className="relative text-left">
      {isOpen ? <div className={`${menuItemsWrapperStyles} ${width}`} ref={menuRef}>
        {
          menuItems?.map((item, index) => {
            return (
              <span
                key={index}
                className={menuItemStyles}
                role="menuitem"
                onClick={() => {
                  item.onClick()
                  handleToggle(false)
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

