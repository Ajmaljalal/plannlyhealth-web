import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { icons } from '@/lib/icons'
import { Program } from '@/lib/types/programs'
import Image from 'next/image'
import React from 'react'


const containerStyles = `text-pDarkGray min-w-[286px] min-h-[215px] border-2 border-pBackground rounded-[24px]`

type InActiveProgramTileProps = {
  program: Program
}

export const InActiveProgramTile = ({ program }: InActiveProgramTileProps) => {
  return (
    <Container className={containerStyles}>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <Image
            src={icons.healthWellness}
            alt='Health & Wellness'
            width={32}
            height={32}
            className='mr-4'
          />
          <h2>{program.name}</h2>
        </div>
      </div>
      <div className='py-[24px]'>
        <p>Approved categories:</p>
        <p className='font-bold'>{program.description}</p>
      </div>
      <Button text='Activate' className='w-full md:w-1/2' />
    </Container>
  )
}