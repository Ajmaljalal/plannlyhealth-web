'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/button'
import { useRouter } from 'next/navigation'
import { icons } from '@/lib/icons'

function CongratulationsContainer() {
  const router = useRouter()
  return (
    <div className='flex flex-col items-center h-full p-[10px] pt-[32px] md:pt-[152px] bg-basic_white'>
      <Image src='/illustrations/congratulations.svg' width={240} height={240} alt='congratulations illustration' />
      <h2 className='text-center font-normal mb-[8px] mt-[32px]'>Congratulations! you earned a new ticket.</h2>
      <p className='text-center'>Based on your answers we have some awesome benefit recommendations for you!</p>
      <div className='w-fit py-[32px] px-[40px] flex flex-col gap-4 md:flex-row w-full justify-center'>
        <Button text='Recommendations' className='w-full md:w-[160px]' isPrimary onClick={() => router.push('/employee/benefits')} />
        <Button text='View my rewards' className='w-full md:w-[160px]' onClick={() => router.push('/employee/rewards')} />
      </div>
      <div className='max-w-[742px] bg-basic_grey_5 mt-[40px] py-[32px] px-[40px] rounded-[32px]'>
        <h4 className='text-center font-normal mb-[25px]'>Earn an extra ticket by connecting your device!</h4>
        <div className='flex gap-4 flex-wrap justify-center'>
          <Button text='Apple Watch' className='w-full md:w-[180px]' icon={icons.add} />
          <Button text='Samsung Watch' className='w-full md:w-[190px]' icon={icons.add} />
          <Button text='Fitbit Watch' className='w-full md:w-[180px]' icon={icons.add} />
        </div>

      </div>
    </div>
  )
}

export default CongratulationsContainer