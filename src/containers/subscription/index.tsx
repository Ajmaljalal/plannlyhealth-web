import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Divider } from '@/components/divider'
import { MainContainer } from '@/components/main-container'
import { maskAccountNumber } from '@/lib/helpers'
import { icons } from '@/lib/icons'
import React from 'react'

const paymentMethodWrapper = `
  flex
  items-center
  justify-between
  border-2
  border-pBackground
  rounded-[16px]
  p-[24px]
  w-1/2
`

const paymentMethod = [
  {
    id: 1,
    name: 'Bank of America',
    accountNumber: '123456756891',
    isPrimary: true,
  },
  {
    id: 2,
    name: 'Bank of China',
    accountNumber: '234567893454',
    isPrimary: false,
  },
]

const renderPaymentMethod = (paymentMethod: any) => {
  return (
    <div className={paymentMethodWrapper}>
      <p className='font-bold'>{maskAccountNumber(paymentMethod.accountNumber)}</p>
      {!paymentMethod.isPrimary && <Button text='Set As The Primary' outlined className='border-none hover:bg-transparent p-0 w-fit h-auto' />}
      {paymentMethod.isPrimary && <span className='text-pWhite bg-pDark rounded-[16px] text-[14px] px-3 py-1'>Primary</span>}
    </div>
  )
}


export const SubscriptionContainer = () => {
  return (
    <MainContainer>
      <div className='flex flex-col gap-4'>
        <Container>
          <div className='flex justify-between'>
            <div>
              <h4 className='mb-2'>Business Monthly</h4>
              <p><span className='font-bold'>$6.00</span> Per User Per Month</p>
            </div>
            <Button text='Request to Cancel' outlined className='min-w-[260px]' />
          </div>
          <Divider />
          <p>Next billing date: <span className='font-bold'>Aug 30, 2022</span></p>
          <p>Active users: <span className='font-bold'>4</span></p>
          <p>Status: <span className='font-bold text-pGreen'>Active</span></p>
        </Container>
        <Container className='flex flex-col gap-4'>
          <h3 className='mb-4'>Payment Methods</h3>
          {paymentMethod.map((paymentMethod: any) => renderPaymentMethod(paymentMethod))}
          <Button
            text='Add Card'
            className='max-w-[260px]'
            icon={icons.addWhite}
          />
        </Container>
      </div>
    </MainContainer>
  )
}