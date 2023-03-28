"use client"
import { icons } from "@/lib/icons"
import Image from "next/image"
import { Button } from "./button"
import { Container } from "./container"

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  ctaButton?: React.ReactNode
  isOpen: boolean
  onClose: () => void
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
    opaque
`

export const Modal = ({ isOpen, onClose, ctaButton, children }: ModalProps) => {
  return (
    isOpen ?
      <>
        <div className={modalContainerStyles}>
          <Container className="w-[578px] h-fit">
            <div onClick={onClose} className="absolute top-7 right-5 cursor-pointer w-[24px] h-[24px]">
              <Image
                src={icons.close}
                width={24}
                height={24}
                alt='close modal'
                className="pointer-events-none"
              />
            </div>
            {children}
            <div className="flex justify-content">
              {ctaButton}
              <Button text='Cancel' onClick={onClose} className="w-1/2 ml-4" outlined />
            </div>
          </Container>
        </div>
      </> : null
  )
}
