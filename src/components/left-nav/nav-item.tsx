'use client'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

interface NavItemProps {
  text: string;
  href: string;
  icon: StaticImageData;
}

const navItemStyles = `
    flex
    items-center
    justify-start
    w-full
    h-[40px]
    text-[14px]
    font-bold-700
    py-[10px]
    px-[12px]
    rounded-[10px]
    text-basic_grey_3
    hover:bg-brand_voilet/[0.5]
    hover:text-basic_white
    my-[9px]
    cursor-pointer
    leading-[1.2]
    focus:bg-brand_voilet
    focus:text-basic_white
`

export const NavItem = ({ text, href, icon }: NavItemProps) => {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <Link href={href} className={`${navItemStyles} ${isActive ? 'bg-brand_voilet text-basic_white' : ''}`}>
      <Image src={icon} alt={`${text} icon`} width='24' height='24' className='mr-[10px]' />
      {text}
    </Link>
  )
}