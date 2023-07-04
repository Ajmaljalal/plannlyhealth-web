'use client'
import { Button } from '@/components/button'
import { downloadCsv } from '@/lib/helpers/csv-helpers'
import { icons } from '@/lib/icons'
import { data } from './data'

export const ExportAsCSVButton = () => {
  return (
    <div className='flex gap-2 justify-end'>
      <Button
        text='Export List as CSV'
        className='w-[260px] border-none hover:bg-transparent p-0 pr-1 w-fit'
        outlined
        icon={icons.download}
        onClick={() => downloadCsv(data.filteredPayouts, 'payouts')}
      />
    </div>
  )
}