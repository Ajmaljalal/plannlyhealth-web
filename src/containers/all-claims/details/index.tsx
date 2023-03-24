import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Divider } from '@/components/divider'
import { MainContainer } from '@/components/main-container'
import { icons } from '@/lib/icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { data } from '../data'
import { ActionButtons } from './action-buttons'

const claimITemStyles = `
  flex 
  items-center 
  gap-3
`
const labelStyles = `
  caption
  text-pDarkGray
  font-semibold
  w-[118px]
`
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
                Claim Details
              </h3>
            </Link>
            <div className='flex'>
              <Image src={icons.editFill} alt='edit' className='cursor-pointer' height={20} />
            </div>
          </div>
          <ActionButtons claim={claim} />
        </div>
        <Divider />
        <div className='flex flex-col gap-2'>
          <h4>{claim.vendor}</h4>
          <p>
            {claim.program}
          </p>
          <p>
            {claim.date}
            <span className='px-2 py-[5px] pb-[7px] bg-pDark text-pWhite rounded-[24px] small-caption ml-10'>
              {claim.frequency}
            </span>
          </p>
          {renderClaimItem('Requested', claim.requested.toString())}
          {renderClaimItem('Reimbursed', claim.reimbursed.toString())}
          {renderClaimItem('Status', claim.status)}
          {renderClaimItem('Submitted on', claim.date)}
          {renderClaimItem('Approved on', claim.date)}
        </div>
        <div className='my-[24px]'>
          <p className={labelStyles}>Attachment</p>
        </div>
        <div className='my-[24px]'>
          <p className={labelStyles}>Description</p>
          <p className='max-w-[533px] mt-[8px]'>{claim.description}</p>
        </div>
        <Divider />
        <div className='my-[24px]'>
          <p className={labelStyles}>Comments</p>
        </div>
      </Container>
    </MainContainer>
  )

  function renderClaimItem(label: string, value: string) {
    return <div className={claimITemStyles}>
      <p className={labelStyles}>{label}:</p>
      <p>{value}</p>
    </div>
  }
}