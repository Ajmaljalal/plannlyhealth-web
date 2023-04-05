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
    text-pWhite
    text-[14px]
    font-bold-700
    p-[10px]
    rounded-[8px]
    hover:bg-pDarkGray
    my-[9px]
    cursor-pointer
    leading-[1.2]
    focus:bg-pPink
`

export const NavItem = ({ text, href, icon }: NavItemProps) => {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <Link href={href} className={`${navItemStyles} ${isActive ? 'bg-pPink' : ''}`}>
      <Image src={icon} alt={`${text} icon`} width='24' height='24' className='mr-[10px]' />
      {text}
    </Link>
  )
}