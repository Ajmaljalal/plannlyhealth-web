import { Container } from '@/components/container'
import { MainContainer } from '@/components/main-container'
import { TableHead } from '@/components/table/table-head'
import { Table } from '@/components/table/table'
import React from 'react'
import { ActionButtons } from './action-buttons'

const claims = [
  {
    id: 1,
    user: 'The Sliding Mr. Bones',
    vendor: 'Malcolm Lockyer',
    program: 'The Sliding Mr. Bones',
    requested: 3.456,
    reimbursed: 0,
    status: 'Requested',
    date: '1961',
  },
  {
    id: 2,
    user: 'The Sliding Mr. Bones',
    vendor: 'Malcolm Lockyer',
    program: 'The Sliding Mr. Bones',
    requested: 3.456,
    reimbursed: 3.456,
    status: 'Approved',
    date: '1961',
  },
  {
    id: 3,
    user: 'The Sliding Mr. Bones',
    vendor: 'Malcolm Lockyer',
    program: 'The Sliding Mr. Bones',
    requested: 3.456,
    reimbursed: 0,
    status: 'Requested',
    date: '1961',
  }
]

const tableHeaders = ['User', 'Vendor', 'Program', 'Requested', 'Reimbursed', 'Status', 'Date', '']

export const AllClaimsContainer = () => {

  const calculateApprovedAndRequested = () => {
    let approved = 0
    let requested = 0
    claims.forEach((claim) => {
      if (claim.status === 'Approved') {
        approved += claim.reimbursed
      }
      if (claim.status === 'Requested') {
        requested += claim.requested
      }
    })
    return { approved, requested }
  }

  const renderClaims = () => {
    return claims.map((claim) => {
      const isApproved = claim.status === 'Approved'
      const isRequested = claim.status === 'Requested'
      const isDeclined = claim.status === 'Declined'
      const textColor = isApproved ? 'text-pGreen' : isRequested ? 'text-pDarkGray' : isDeclined ? 'text-pRed' : 'text-pDark'
      return (
        <tr key={claim.id}>
          <td>{claim.user}</td>
          <td>{claim.vendor}</td>
          <td>{claim.program}</td>
          <td>{claim.requested}</td>
          <td>{claim.reimbursed}</td>
          <td className={textColor}>{claim.status}</td>
          <td>{claim.date}</td>
          <td>...</td>
        </tr>
      )
    })
  }

  const renderStatistic = () => {
    return (
      <div className='w-1/2 flex gap-24'>
        <div>
          <p>Total Approved</p>
          <h3 className='mt-1'>${calculateApprovedAndRequested().approved}</h3>
        </div>
        <div>
          <p>Not yet Processed</p>
          <h3 className='mt-1'>${calculateApprovedAndRequested().requested}</h3>
        </div>
      </div>
    )
  }

  return (
    <MainContainer>
      <Container>
        <div className='flex justify-between mb-[24px]'>
          {renderStatistic()}
          <ActionButtons />
        </div>
        <Table>
          <TableHead headers={tableHeaders} />
          <tbody>
            {renderClaims()}
          </tbody>
        </Table>
      </Container>
    </MainContainer>
  )
}