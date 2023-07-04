'use client'
import { Button } from '@/components/button'
import { downloadCsv } from '@/lib/helpers/csv-helpers'
import { icons } from '@/lib/icons'
import { data } from './data'

export const ExportAsCSVButton = () => {


  return (
    <div className='w-1/2 flex gap-2 justify-end'>
      {/* <Button text='Approve All' className='w-[260px]' /> */}
      <Button
        text='Export List as CSV'
        className='w-[260px] border-none hover:bg-transparent p-0 pr-1 w-fit'
        onClick={() => downloadCsv(data.filteredUsers, 'users')}
        outlined
        icon={icons.download}
      />
    </div>
  )
}
