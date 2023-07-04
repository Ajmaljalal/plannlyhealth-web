import { Container } from '@/components/container'
import { MainContainer } from '@/components/main-container'
import { TableHead } from '@/components/table/table-head'
import { Table } from '@/components/table/table'
import { ActionButtons } from './action-buttons'
import { data } from './data'
import { Filters } from './filters'
import Link from 'next/link'


const tableHeaders = ['User', 'Vendor', 'Program', 'Amount', 'Status', 'Date']
const rowStyle = 'table-row cursor-pointer border-t border-pLight hover:bg-[#f2f4f780]'

export const AllTransactionsContainer = () => {

  const renderTransactions = () => {
    return data.filteredTransactions.map((transaction) => {
      const isApproved = transaction.status === 'Approved'
      const isRequested = transaction.status === 'Requested'
      const isDeclined = transaction.status === 'Declined'
      const textColor = isApproved ? 'text-pGreen' : isRequested ? 'text-pDarkGray' : isDeclined ? 'text-pRed' : 'text-pDark'
      return (
        <Link key={transaction.id} href={`/all-transactions/${transaction.id}`} className={rowStyle}>
          <td>{transaction.user}</td>
          <td>{transaction.vendor}</td>
          <td>{transaction.program}</td>
          <td>{transaction.amount}</td>
          <td className={textColor}>{transaction.status}</td>
          <td>{transaction.date}</td>
        </Link>
      )
    })
  }


  return (
    <MainContainer>
      <Filters />
      <Container>
        <div className='flex justify-between mb-[20px]'>
          <ActionButtons />
        </div>
        <Table>
          <TableHead headers={tableHeaders} />
          <tbody>
            {renderTransactions()}
          </tbody>
        </Table>
      </Container>
    </MainContainer>
  )
}