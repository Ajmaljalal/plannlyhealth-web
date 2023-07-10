import React from 'react'

interface TableHeadProps {
  headers: string[]
}

export const TableHead = ({ headers }: TableHeadProps) => {
  return (
    <thead>
      <tr className='border hover:bg-pLight rounded-tl-[24px]'>
        {headers.map((header: string, index: number) => {
          const isFirst = index === 0
          const isLast = index === headers.length - 1
          const padding = isFirst ? 'pl-[32px]' : isLast ? 'pr-[32px]' : ''
          const style = `${padding} text-basic_black h-[54px] text-small font-bold`
          return (
            <th key={index} className={style}>{header}</th>
          )
        })}
      </tr>
    </thead>
  )
}
