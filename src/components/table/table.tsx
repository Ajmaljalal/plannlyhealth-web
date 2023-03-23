import React from 'react'

interface TableProps {
  children: React.ReactNode
}

export const Table = ({ children }: TableProps) => {
  return (
    <div className='border-2 border-pBackground rounded-[16px] overflow-hidden'>
      <table className="table-auto">
        {children}
      </table>
    </div>
  )
}