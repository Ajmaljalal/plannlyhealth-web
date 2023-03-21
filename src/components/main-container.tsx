import React from 'react'

export const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='max-w-[1136px] mx-auto flex flex-col gap-4'>
      {children}
    </div>
  )
}
