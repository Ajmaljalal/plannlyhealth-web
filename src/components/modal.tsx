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
}

const modalContainerStyles = `
    justify-center 
    pt-[150px]
    pb-[150px]
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
    
`

export const Modal = ({ isOpen, onClose, ctaButton, children, size = 'small' }: ModalProps) => {
  const modalSize = size === 'small' ? 'w-[420px]' : size === 'medium' ? 'w-[600px]' : 'w-[840px]'
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
            <div className="flex gap-4 justify-end mt-[48px]">
              <Button text='Cancel' onClick={onClose} className="w-[160px]" />
              {ctaButton}
            </div>
          </Container>
        </div>
      </> : null
  )
}
