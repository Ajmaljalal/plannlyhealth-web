import { Container } from '@/components/container'
import { MainContainer } from '@/components/main-container'
import { TableHead } from '@/components/table/table-head'
import { Table } from '@/components/table/table'
import { ProcessPaymentsButton } from './process-payments-button'
import { calculatePayouts } from '@/lib/helpers'
import { data } from './data'
import { FiltersAndButtons } from './filters-and-buttons'
import { PayoutCheckbox } from './payout-checkbox'


const tableHeaders = ['', 'Name', 'Approved', 'Not Yet Processed', 'Date']
const rowStyle = 'cursor-pointer border-t border-pLight hover:bg-[#f2f4f780]'

export const PayoutsContainer = () => {

  const statistics = calculatePayouts(data.filteredPayouts)

  const renderClaims = () => {
    return data.filteredPayouts.map((payout) => {
      return (
        <tr key={payout.id} className={rowStyle}>
          <PayoutCheckbox payoutId={payout.id} />
          <td className='w-1/2'>{payout.user}</td>
          <td>{payout.amount}</td>
          <td>{payout.amount}</td>
          <td>{payout.date}</td>
        </tr>
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
          <h3 className='mt-1'>${statistics.notYetProcessed}</h3>
        </div>
      </div>
    )
  }

  return (
    <MainContainer>
      <FiltersAndButtons />
      <Container>
        <div className='flex justify-between mb-[24px]'>
          {renderStatistic()}
          <ProcessPaymentsButton />
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