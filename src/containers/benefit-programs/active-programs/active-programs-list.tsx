import { Container } from '@/components/container'
import { Divider } from '@/components/divider'
import { Program } from '@/lib/types/programs'
import React from 'react'
import { ActiveProgramTile } from './active-program-tile'

const programs: Program[] = [
  {
    budget: 100,
    name: 'Health & Wellness',
    frequency: 'monthly',
    description: 'Gym Memberships, Spa/Massages, Physical Therapy ',
    access: 'limited',
  },
  {
    budget: 150,
    name: 'Work From Home',
    frequency: 'monthly',
    description: 'Computers, Equipment & Supplies',
    access: 'unlimited',
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