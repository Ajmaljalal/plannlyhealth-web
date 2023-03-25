'use client'
import { Button } from '@/components/button'
import { downloadCsv } from '@/lib/helpers/download-csv'
import { icons } from '@/lib/icons'
import { data } from './data'

export const DownloadAsCSVButton = () => {
  return (
    <div className='flex gap-2 justify-end'>
      <Button
        text='Export List as CSV'
        className='w-[260px] border-none hover:bg-transparent p-0 w-fit'
        onClick={() => downloadCsv(data.filteredPayouts, 'payouts')}
        outlined
        icon={icons.download}
      />
    </div>
  )
}