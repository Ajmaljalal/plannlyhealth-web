import React from 'react'

interface TableHeadProps {
  headers: string[]
}

export const TableHead = ({ headers }: TableHeadProps) => {
  return (
    <thead>
      <tr className='border bg-pLight hover:bg-pLight'>
        {headers.map((header: string, index: number) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
  )
}
