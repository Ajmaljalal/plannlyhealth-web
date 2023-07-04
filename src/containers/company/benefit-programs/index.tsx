import React from 'react'
import { MainContainer } from '@/components/main-container'
import { ActivePrograms } from './active-programs/active-programs-list'
import { InactivePrograms } from './inactive-programs/inactive-programs-list'
import { ProgramStyle } from './program-style'

const BenefitProgramsContainer = () => {
  return (
    <MainContainer>
      <ProgramStyle />
      <ActivePrograms />
      <InactivePrograms />
    </MainContainer>
  )
}

export default BenefitProgramsContainer
