'use client'
import { Button } from '@/components/button'
import { downloadCsv } from '@/lib/helpers/csv-helpers'
import { icons } from '@/lib/icons'

const transactions = [
  {
    id: 1,
    user: 'The Sliding Mr. Bones',
    vendor: 'Malcolm Lockyer',
    program: 'The Sliding Mr. Bones',
    requested: 3.456,
    reimbursed: 0,
    status: 'Requested',
    date: '1961',
  },
  {
    id: 2,
    user: 'The Sliding Mr. Bones',
    vendor: 'Malcolm Lockyer',
    program: 'The Sliding Mr. Bones',
    requested: 3.456,
    reimbursed: 3.456,
    status: 'Approved',
    date: '1961',
  },
  {
    id: 3,
    user: 'The Sliding Mr. Bones',
    vendor: 'Malcolm Lockyer',
    program: 'The Sliding Mr. Bones',
    requested: 3.456,
    reimbursed: 0,
    status: 'Requested',
    date: '1961',
  }
]

export const ActionButtons = () => {

  return (
    <div className='w-full flex gap-2 justify-end'>
      <Button
        text='Export List as CSV'
        className='w-[260px] border-none hover:bg-transparent p-0 pr-1 w-fit'
        outlined
        icon={icons.download}
        onClick={() => downloadCsv(transactions, 'transactions')} />
    </div>
  )
}