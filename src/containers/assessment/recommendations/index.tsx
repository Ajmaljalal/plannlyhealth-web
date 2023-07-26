import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/button'

function RecommendationsContainer() {
  return (
    <div className='flex flex-col items-center h-full p-[10px] pt-[32px]'>
      <Image src='/illustrations/reports.svg' width={240} height={240} alt='congratulations illustration' />
      <h2 className='text-center font-normal mb-[8px] mt-[32px]'>Hey, Thanks for completing the assessment!</h2>
      <p className='text-center'>Here are some recommendations for you</p>
      <div className='flex flex-col gap-4 mt-[24px] md:flex-row w-full justify-center'>
        <Button text='View my benefits' className='w-full md:w-[160px]' />
        <Button text='View my rewards' className='w-full md:w-[160px]' />
      </div>
    </div>
  )
}

export default RecommendationsContainer