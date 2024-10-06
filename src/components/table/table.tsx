import React from 'react'

interface TableProps {
  children: React.ReactNode
  className?: string
}

export const Table = ({ children, className }: TableProps) => {
  return (
    <div className={`border border-basic_grey_4 rounded-[32px] bg-basic_white ${className}`}>
      <table className="table-auto">
        {children}
      </table>
    </div>
  )
}