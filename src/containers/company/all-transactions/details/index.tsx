import { Container } from '@/components/container'
import { Divider } from '@/components/divider'
import { MainContainer } from '@/components/main-container'
import { icons } from '@/lib/icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { data } from '../data'

const transactionItemStyles = `
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
export const TransactionDetailsContainer = () => {
  const transaction = data.filteredTransactions[0]

  return (
    <MainContainer>
      <Container>
        <div className='flex flex-1'>
          <Link href={`/all-transactions`}>
            <h3 className='flex items-center gap-4'>
              <Image src={icons.arrowLeft} alt='arrow-left' />
              Transaction Details
            </h3>
          </Link>
        </div>
        <Divider />
        <div className='flex flex-col gap-2'>
          <h4>{transaction.vendor}</h4>
          <p>
            {transaction.program}
          </p>
          <p>
            {transaction.date}
            <span className='px-2 py-[5px] pb-[7px] bg-pDark text-pWhite rounded-[24px] small-caption ml-10'>
              {transaction.frequency}
            </span>
          </p>
          {renderTransactionItem('User name', transaction.user.toString())}
          {renderTransactionItem('Category', transaction.category)}
          {renderTransactionItem('Amount', transaction.amount.toString())}
          {renderTransactionItem('Status', transaction.status)}
          {renderTransactionItem('Authorization ID', transaction.authorizationId)}
          {renderTransactionItem('Declined on', transaction.date)}
        </div>
        <div className='my-[24px]'>
          <p className={labelStyles}>Description</p>
          <p className='max-w-[533px] mt-[8px]'>{transaction.description}</p>
        </div>
        <Divider />
        <div className='my-[24px]'>
          <p className={labelStyles}>Comments</p>
        </div>
      </Container>
    </MainContainer>
  )

  function renderTransactionItem(label: string, value: string) {
    return <div className={transactionItemStyles}>
      <p className={labelStyles}>{label}:</p>
      <p>{value}</p>
    </div>
  }
}