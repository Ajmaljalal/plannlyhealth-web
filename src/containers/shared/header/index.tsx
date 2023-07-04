import React from 'react'
import { HeaderTitle } from './header-title'

const styles = `
  w-full 
  h-[80px] 
  bg-pWhite 
  flex 
  items-center 
  px-[32px]
`
export const Header = () => {
  return (
    <div className={styles}>
      <HeaderTitle />
    </div>
  )
}

