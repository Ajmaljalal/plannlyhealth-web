import { Container } from '@/components/container'
import { MainContainer } from '@/components/main-container'
import { TableHead } from '@/components/table/table-head'
import { Table } from '@/components/table/table'
import { ActionButtons } from './action-buttons'
import { calculateApprovedAndRequestedClaims } from '@/lib/helpers'
import { data } from './data'
import { Filters } from './filters'
import Link from 'next/link'


const tableHeaders = ['User', 'Vendor', 'Program', 'Requested', 'Reimbursed', 'Status', 'Date', '']

export const AllClaimsContainer = () => {

  const statistics = calculateApprovedAndRequestedClaims(data.filteredClaims)

  const renderClaims = () => {
    return data.filteredClaims.map((claim) => {
      const isApproved = claim.status === 'Approved'
      const isRequested = claim.status === 'Requested'
      const isDeclined = claim.status === 'Declined'
      const textColor = isApproved ? 'text-pGreen' : isRequested ? 'text-pDarkGray' : isDeclined ? 'text-pRed' : 'text-pDark'
      return (
        <Link key={claim.id} href={`/all-claims/${claim.id}`} className='table-row'>
          <td>{claim.user}</td>
          <td>{claim.vendor}</td>
          <td>{claim.program}</td>
          <td>{claim.requested}</td>
          <td>{claim.reimbursed}</td>
          <td className={textColor}>{claim.status}</td>
          <td>{claim.date}</td>
          <td>...</td>
        </Link>
      )
    })
  }

  const renderStatistic = () => {
    return (
      <div className='w-1/2 flex gap-24'>
        <div>
          <p>Total Approved</p>
          <h3 className='mt-1'>${statistics.approved}</h3>
        </div>
        <div>
          <p>Not yet Processed</p>
          <h3 className='mt-1'>${statistics.requested}</h3>
        </div>
      </div>
    )
  }

  return (
    <MainContainer>
      <Filters />
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