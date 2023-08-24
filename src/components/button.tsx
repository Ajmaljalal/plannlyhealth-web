'use client'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string
  className?: string
  disabled?: boolean
  outlined?: boolean
  isPrimary?: boolean
  isSmallBtn?: boolean
  icon?: StaticImageData,
}

const genralStyles = `
    flex
    items-center
    justify-center
    height-[40px]
    rounded-[32px]
    text-small
    font-bold
    tracking-wider
`
const bigBtn = `
    px-[24px]
    py-[10px]
`
const smallBtn = `
    px-[16px]
    py-[8px]
    h-[32px]
`

const primary = `
    text-basic_white
    bg-brand_voilet
    disabled:hover:bg-lightgrey
    disabled:opacity-25
    hover:bg-brand_voilet_light
`
const secondary = `
    text-basic_grey_1
    bg-basic_grey_4
    disabled:hover:bg-lightgrey
    hover:bg-secondary_btn_hover
`

export const Button = ({ className, text, isPrimary, isSmallBtn, icon, ...props }: ButtonProps) => {
  const buttonStyles = isPrimary ? `${genralStyles} ${primary}` : `${genralStyles} ${secondary}`
  const buttonSize = isSmallBtn ? `${smallBtn}` : `${bigBtn}`
  return (
    <button
      className={`${buttonStyles} ${buttonSize} ${className} font-normal`}
      {...props}
    >
      <>
        {icon && <Image src={icon} alt={text} className='mr-[10px]' />}
        {text}
      </>
    </button>
  )
}
