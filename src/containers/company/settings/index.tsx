import { Container } from '@/components/container'
import { MainContainer } from '@/components/main-container'
import React from 'react'
import { Settings } from './setting-form'

export const SettingsContainer = () => {
  const company = {
    name: 'Company Name',
    size: 34,
    website: 'Website',
    address: '2323 3rd St, San Francisco, CA 94107',
    wellnessAdminEmail: 'ajmal@test.com',
    limited: 0,
    mission: 'Company Mission Statement',
    logo: '',
    limitedDomainName: 'test.com'
  }
  return (
    <MainContainer>
      <Container>
        <Settings company={company} />
        <p className='caption text-pPink mt-5'>To delete your company please contact support</p>
      </Container>
    </MainContainer>
  )
}