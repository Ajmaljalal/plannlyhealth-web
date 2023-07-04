import { Container } from '@/components/container'
import { MainContainer } from '@/components/main-container'
import { TableHead } from '@/components/table/table-head'
import { Table } from '@/components/table/table'
import { data } from './data'
import { FiltersAndButtons } from './filters'
import { ThreeDotsButton } from './three-dots-button'

const tableHeaders = ['Name', 'Email', 'Subscription Status', 'Active Users', 'Plan name', '']
const rowStyle = 'table-row cursor-pointer border-t border-pLight hover:bg-transparent'

export const CompaniesContainer = () => {

  const renderCompanies = () => {
    return data.filteredCompanies.map((company) => {
      const isActive = company.status === 'Active'
      const isInActive = company.status === 'Inactive'
      const textColor = isActive ? 'text-pGreen' : isInActive ? 'text-pBlue' : 'text-pRed'
      return (
        <tr key={company.id} className={rowStyle}>
          <td>{company.name}</td>
          <td className='w-1/3'>{company.email}</td>
          <td className={textColor}>{company.status}</td>
          <td>{company.activeUser}</td>
          <td>{company.plan}</td>
          <td className='w-[24px]'><ThreeDotsButton company={company} /></td>
        </tr>
      )
    })
  }

  return (
    <MainContainer>
      <FiltersAndButtons />
      <Container>
        <div className='flex justify-between mb-[20px]'>
          <div className='flex items-center gap-2'>
            <h4 className=''>Total Companies:</h4>
            <p className='font-bold'>{data.filteredCompanies.length}</p>
          </div>
        </div>
        <Table className='overflow-visible'>
          <TableHead headers={tableHeaders} />
          <tbody>
            {renderCompanies()}
          </tbody>
        </Table>
      </Container>
    </MainContainer>
  )
}