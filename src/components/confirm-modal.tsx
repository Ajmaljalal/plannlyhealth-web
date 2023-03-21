"use client"
import { Button } from "./button"
import { Container } from "./container"

interface ModalProps {
  text: React.ReactNode
  title: React.ReactNode
  ctaButton?: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const modalContentStyles = `
    flex 
    justify-center 
    pt-[150px]
    overflow-x-hidden 
    overflow-y-auto 
    fixed 
    inset-0 
    z-50 
    outline-none 
    focus:outline-none
    opaque
`


export const ConfirmationModal = ({ isOpen, onClose, ctaButton, text, title }: ModalProps) => {
  return (
    isOpen ?
      <>
        <div className={modalContentStyles}>
          <Container className="w-[308px] h-[262px] flex flex-col items-stretch gap-5 rounded-[24px]">
            <h2 className="text-center">{title}</h2>
            <p className="text-center text-pDarkGray caption">{text}</p>
            <div>
              {ctaButton}
              <Button text='Cancel' className="mt-[8px] w-full" onClick={onClose} outlined />
            </div>
          </Container>
        </div>
      </> : null
  )
}