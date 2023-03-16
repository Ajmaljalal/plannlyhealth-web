'use client'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string
  className?: string
  disabled?: boolean
  outlined?: boolean
  icon?: StaticImageData
}

const baseStyles = `
    font-bold-700
    text-[16px]
    line-[24px]
    rounded-[16px]
    h-[48px]
    disabled:opacity-50
    disabled:cursor-not-allowed
    flex
    items-center
    justify-center
`

const filledStyles = `
    text-pWhite
    bg-pPink
    hover:bg-pDarkPink
    disabled:hover:bg-pPink
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


export const Button = ({ className, text, outlined, icon, ...props }: ButtonProps) => {
  const buttonStyles = outlined ? outlinedStyles : filledStyles
  return (
    <button
        className={` ${baseStyles} ${buttonStyles} ${className}`}
        {...props}
    >
      <>
        {icon && <Image src={icon.src} alt='upload' width='24' height='24' className='mr-[12px]'/>}
      {text}
      </>
      </button>
  )
}
