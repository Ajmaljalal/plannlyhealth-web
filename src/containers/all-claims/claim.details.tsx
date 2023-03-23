import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Divider } from '@/components/divider'
import { MainContainer } from '@/components/main-container'
import { icons } from '@/lib/icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ClaimDetailsContainer = () => {
  return (
    <MainContainer>
      <Container>
        <div className='flex justify-between'>
          <div className='flex items-center gap-3 flex-1'>
            <Link href={`/all-claims`}>
              <h3 className='flex items-center gap-4'>
                <Image src={icons.arrowLeft} alt='arrow-left' />
                Claim Details
              </h3>
            </Link>
            <div className='flex'>
              <Image src={icons.editFill} alt='edit' className='cursor-pointer' height={20} />
            </div>
          </div>
          <div className='flex gap-2 flex-1'>
            <Button text='Approve' className='w-1/2' />
            <Button text='Decline' outlined className='w-1/2' />
            <Button text='Delete' outlined className='w-1/2' icon={icons.trash} />
          </div>
        </div>
        <Divider />
      </Container>
    </MainContainer>
  )
}