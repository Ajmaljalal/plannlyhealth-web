import React, { ReactNode } from 'react'

const containerStyle = 'flex flex-col flex-1 rounded-[32px] bg-basic_grey_5 px-[32px] py-[24px]';
const Tile = ({ children }: { children: ReactNode }) => {
  return (
    <div className={containerStyle}>
      {children}
    </div>
  )
}

export default Tile