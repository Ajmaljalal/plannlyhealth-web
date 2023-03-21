import { Container } from '@/components/container'
import { Divider } from '@/components/divider'
import React from 'react'
import { ActiveProgramTile } from './active-program-tile'

const programs = [
  {
    budget: 100,
    name: 'Health & Wellness',
    frequency: 'Monthly',
    description: 'Gym Memberships, Spa/Massages, Physical Therapy ',
  },
  {
    budget: 150,
    name: 'Work-From-Home',
    frequency: 'Monthly',
    description: 'Computers, Equipment & Supplies',
  },
]

export const ActivePrograms = () => {
  return (
    <Container>
      <h3>Active Programs</h3>
      <Divider />
      <div className='grid gap-3 md:grid-cols-2'>
        {
          programs.map((program) => (
            <ActiveProgramTile key={program.name} program={program} />
          ))
        }
      </div>
    </Container>
  )
}
