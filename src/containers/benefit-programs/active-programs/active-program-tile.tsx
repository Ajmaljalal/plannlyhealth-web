import { Container } from '@/components/container'
import { programIcons } from '@/lib/icons'
import { Program } from '@/lib/types/programs'
import Image from 'next/image'
import React from 'react'
import { DropdownMenuButton } from './active-program-dropdown'


const containerStyles = `min-w-[286px] min-h-[215px] border-2 border-pBackground rounded-[24px]`
const tagStyles = `bg-pDark text-pWhite py-[8px] px-[12px] rounded-[16px] w-fit`

type ActiveProgramTileProps = {
  program: Program
}

export const ActiveProgramTile = ({ program }: ActiveProgramTileProps) => {
  return (
    <Container className={containerStyles}>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <Image
            src={programIcons.active[program.name]}
            alt='Health & Wellness'
            width={32}
            height={32}
            className='mr-4'
          />
          <h2>{program.name}</h2>
        </div>
        <DropdownMenuButton />
      </div>
      <div className='py-[24px]'>
        <p>Approved categories:</p>
        <p className='font-bold'>{program.description}</p>
      </div>
      <div className='flex gap-2'>
        <p className={tagStyles}>${program.budget}</p>
        <p className={tagStyles}>{program.frequency}</p>
      </div>
    </Container>
  )
}