'use client'
import { Button } from '@/components/button'
import { downloadCsv } from '@/lib/helpers/download-csv'

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
      <Button text='Export List as CSV' className='w-[260px]' outlined onClick={() => downloadCsv(transactions, 'transactions')} />
    </div>
  )
}