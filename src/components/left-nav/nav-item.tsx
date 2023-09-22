'use client'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react'

interface NavItemProps {
  text: string;
  href: string;
  icon: StaticImageData;
  iconLight: StaticImageData;
}

const navItemStyles = `
    flex
    gap-0
    lg:gap-2
    items-center
    justify-center
    lg:justify-start
    w-[40px] 
    lg:w-full
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
    focus:bg-brand_voilet
    focus:text-basic_white
`

export const NavItem = ({ text, href, icon, iconLight }: NavItemProps) => {
  const pathname = usePathname()
  const params = useSearchParams()
  const company_id = params.get('org_id')
  const isActive = pathname?.includes(href)
  if (company_id) {
    href = href + '?org_id=' + company_id
  }

  const currentIcon = isActive ? iconLight : icon

  return (
    <Link href={href} className={`${navItemStyles} ${isActive ? 'bg-brand_voilet text-basic_white' : ''}`}>
      <Image src={currentIcon} alt={`${text} icon`} width={20} height={20} className='w-[20px]' />
      <span className="hidden sm:block">{text}</span>
    </Link>
  )
}
