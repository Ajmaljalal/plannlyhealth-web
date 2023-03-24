import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Divider } from '@/components/divider'
import { MainContainer } from '@/components/main-container'
import { icons } from '@/lib/icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { data } from './data'

export const ClaimDetailsContainer = () => {
  const claim = data.filteredClaims[0]

  return (
    <MainContainer>
      <Container>
        <div className='flex justify-between'>
          <div className='flex items-center gap-3 flex-1'>
            <Link href={`/all-claims`}>
              <h3 className='flex items-center gap-4'>
                <Image src={icons.arrowLeft} alt='arrow-left' />
                {claim.vendor}
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
        <p>
          {claim.program}
          <span className='px-2 py-[5px] bg-pDark text-pWhite rounded-[24px] small-caption ml-10'>
            {claim.frequency}
          </span>
        </p>
        <p>Requested: <span>{claim.requested}</span></p>
        <p>Reimbursed: <span>{claim.reimbursed}</span></p>
        <p>Status: <span>{claim.status}</span></p>
        <p>Submitted on: <span>{claim.date}</span></p>
        <p>Approved on: <span>{claim.date}</span></p>
        <div>
          <p>Attachment</p>
        </div>
        <div>
          <p>Description</p>
        </div>
        <div>
          <p>Comments</p>
        </div>
      </Container>
    </MainContainer>
  )
}