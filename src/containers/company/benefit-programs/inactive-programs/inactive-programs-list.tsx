import { Container } from '@/components/container'
import { Divider } from '@/components/divider'
import { Program } from '@/lib/types/programs'
import React from 'react'
import { InActiveProgramTile } from './inactive-program-tile'

const programs: Program[] = [
  {
    budget: 150,
    name: 'Family Care',
    frequency: 'monthly',
    description: 'Computers, Equipment & Supplies',
    access: 'unlimited',
  },
  {
    budget: 150,
    name: 'Food & Groceries',
    frequency: 'monthly',
    description: 'Computers, Equipment & Supplies',
    access: 'unlimited',
  },
  {
    budget: 150,
    name: 'Recognition & Anniversaries',
    frequency: 'monthly',
    description: 'Computers, Equipment & Supplies',
    access: 'unlimited',
  },
  {
    budget: 150,
    name: 'Learning & Development',
    frequency: 'monthly',
    description: 'Computers, Equipment & Supplies',
    access: 'unlimited',
  },
  {
    budget: 150,
    name: 'Student Loans',
    frequency: 'monthly',
    description: 'Computers, Equipment & Supplies',
    access: 'unlimited',
  },
  {
    budget: 150,
    name: 'Commuter & Transportation',
    frequency: 'monthly',
    description: 'Computers, Equipment & Supplies',
    access: 'unlimited',
  },
  {
    budget: 150,
    name: 'Give / Donation',
    frequency: 'monthly',
    description: 'Computers, Equipment & Supplies',
    access: 'unlimited',
  },
]

export const InactivePrograms = () => {
  return (
    <Container>
      <h3>Inactive Programs</h3>
      <Divider />
      <div className='grid gap-3 md:grid-cols-2'>
        {
          programs.map((program) => (
            <InActiveProgramTile key={program.name} program={program} />
          ))
        }
      </div>
    </Container>
  )
}
