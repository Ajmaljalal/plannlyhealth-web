import React from 'react'

interface TableProps {
  children: React.ReactNode
  className?: string
}

export const Table = ({ children, className }: TableProps) => {
  return (
    <div className={`border-2 border-pBackground rounded-[16px] overflow-hidden ${className}`}>
      <table className="table-auto">
        {children}
      </table>
    </div>
  )
}