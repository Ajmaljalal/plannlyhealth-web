import React from 'react'
import { Container } from '@/components/container'
import { Divider } from '@/components/divider'

export const ProgramStyle = () => {
  return (
    <Container>
      <h3>Your Program Style: <span className='text-pPink'>Both Programs</span></h3>
      <Divider />
      <p className='max-w-[640px]'>Leverage the best of both types and let the employees choose the most suitable program for them. An employer-sponsored allowance and card or an allotment (a fixed amount that employees can spend using their own personal funds).</p>
    </Container>
  )
}
