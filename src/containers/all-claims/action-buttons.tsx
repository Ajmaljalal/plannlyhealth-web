'use client'
import { Button } from '@/components/button'
import { downloadCsv } from '@/lib/helpers/download-csv'
import { icons } from '@/lib/icons'

const claims = [
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

  // TODO: Implement approve all if needed, ignored for now
  const handleApproveAll = () => {
    console.log('Approve all')
  }

  return (
    <div className='w-1/2 flex gap-2 justify-end'>
      {/* <Button text='Approve All' className='w-[260px]' /> */}
      <Button
        text='Export List as CSV'
        className='w-[260px] border-none hover:bg-transparent p-0 pr-1 w-fit'
        icon={icons.download}
        outlined
        onClick={() => downloadCsv(claims, 'claims')}
      />
    </div>
  )
}
