'use client'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string
  className?: string
  disabled?: boolean
  outlined?: boolean
  icon?: StaticImageData,
  children?: React.ReactNode
}

const filledStyles = `
    text-darkgrey
    bg-lightgrey
    rounded-[32px]
    disabled:hover:bg-lightgrey
`
const outlinedStyles = `
    text-pPink
    bg-transparent
    border-2
    border-pPink
    hover:bg-pPink
    hover:bg-opacity-20
    disabled:hover:bg-transparent
`

export const Button = ({ className, children, text, outlined, icon, ...props }: ButtonProps) => {
  const buttonStyles = outlined ? outlinedStyles : filledStyles
  return (
    <button
      className={`${buttonStyles} ${className}`}
      {...props}
    >
      <>
        {children}
        {icon && <Image src={icon} alt={text} className='mr-[12px]' />}
        {text}
      </>
    </button>
  )
}
