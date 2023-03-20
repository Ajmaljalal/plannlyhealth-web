'use client'
import { usePathname } from 'next/navigation'
import React from 'react'


const styles = `
  h-fit

`
export const HeaderTitle = () => {
  const pathname = usePathname()
  // get the last part of the pathname and make it sentence case
  // also see if the title has a "-" in it and replace it with a space
  const title = pathname.split('/').pop()?.replace(/-/g, ' ')?.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase())
  return (
    <div className={styles}>
      <h2 className='heading2'>{title}</h2>
    </div>
  )
}
