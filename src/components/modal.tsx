"use client"
import { icons } from "@/lib/icons"
import Image from "next/image"
import { useState } from "react"
import { Button } from "./button"
import { Container } from "./container"

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  triggerButton: React.ReactNode
  ctaButton?: React.ReactNode
}

const modalContainerStyles = `
    justify-center 
    items-center 
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

export const Modal = ({ triggerButton, ctaButton, children }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleTrigger = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div onClick={handleTrigger}>
        {triggerButton}
      </div>
      {isOpen ?
        <>
          <div className={modalContainerStyles}>
            <Container>
              <div className="w-[578px]">
                <div onClick={handleTrigger} className="absolute top-5 right-5 cursor-pointer w-[24px] h-[24px]">
                  <Image
                    src={icons.close.src}
                    width={24}
                    height={24}
                    alt='close modal'
                    className="pointer-events-none"
                  />
                </div>

                {children}
                <div className="flex justify-content">
                  {ctaButton}
                  <Button text='Cancel' onClick={handleTrigger} className="w-1/2 ml-4" outlined />
                </div>
              </div>
            </Container>
          </div>
        </> : null
      }
    </>
  )
}
