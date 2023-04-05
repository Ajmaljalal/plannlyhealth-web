'use client'
import { usePathname } from 'next/navigation'
import React from 'react'


const styles = `
  h-fit

`
export const HeaderTitle = () => {
  const pathname = usePathname()
  // get the pathname and make it sentence case based on the following rules:
  // if the pathname has a "-" in it, split the pathname and make each word sentence case
  // if the pathname has an id in it at the end, split the pathname and make each word sentence case
  // ex: /all-claims/1234 => All Claims
  // ex: /all-claims => All Claims

  const title = pathname && pathname
    .split('/')
    .filter((path) => path !== '')
    // filter out the section of the path that has a number in it based on regex
    .filter((path) => !path.match(/\d+/g))
    .map((path) => {
      if (path.includes('-')) {
        return path
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      }
      return path.charAt(0).toUpperCase() + path.slice(1)
    })
    .join(' ')


  return (
    <div className={styles}>
      <h2 className='heading2'>{title}</h2>
    </div>
  )
}
