"use client"
import { icons } from "@/lib/icons"
import Image from "next/image"
import { Button } from "./button"
import { Container } from "./container"

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  onClose: () => void
  isOpen: boolean
  ctaButton?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  cancelBtnText?: string
}

const modalContainerStyles = `
    justify-center 
    py-[80px]
    flex 
    overflow-x-hidden 
    overflow-y-auto 
    fixed 
    inset-0 
    z-50 
    outline-none 
    focus:outline-none
    bg-basic_black
    bg-opacity-50
    text-basic_black
    px-[5px]
    
`
export const Modal = ({ isOpen, onClose, ctaButton, children, size = 'small', cancelBtnText = 'Cancel' }: ModalProps) => {
  const modalSize = size === 'small' ? 'max-w-[420px]' : size === 'medium' ? 'max-w-[700px]' : 'max-w-[1000px]'
  const isSmall = size === 'small'
  const buttonContainerStyles = isSmall ? 'justify-between' : 'justify-end'
  return (
    isOpen ?
      <>
        <div className={modalContainerStyles} style={{ zIndex: 10000 }}>
          <Container className={` ${modalSize} h-fit bg-basic_white p-[32px] rounded-[32px]`}>
            <div onClick={onClose} className="absolute top-5 right-5 cursor-pointer w-[24px] h-[24px]">
              <Image
                src={icons.close}
                width={24}
                height={24}
                alt='close modal'
                className="pointer-events-none"
              />
            </div>
            {children}
            <div className={`flex flex-col md:flex-row gap-4 mt-[48px] ${buttonContainerStyles}`}>
              <Button text={cancelBtnText} onClick={onClose} className="w-full md:w-[200px]" />
              {ctaButton}
            </div>
          </Container>
        </div>
      </> : null
  )
}
