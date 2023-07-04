import { Container } from '@/components/container'
import { MainContainer } from '@/components/main-container'
import { TableHead } from '@/components/table/table-head'
import { Table } from '@/components/table/table'
import { ExportAsCSVButton } from './export-list-button'
import { calculateUsersStatus } from '@/lib/helpers'
import { data } from './data'
import { FiltersAndButtons } from './filters-and-buttons'
import { ThreeDotsButton } from './three-dots-button'


const tableHeaders = ['Name', 'Email', 'Status', 'Role', '']
const rowStyle = 'table-row cursor-pointer border-t border-pLight hover:bg-transparent'

export const UsersContainer = () => {

  const statistics = calculateUsersStatus(data.filteredUsers)

  const renderClaims = () => {
    return data.filteredUsers.map((user) => {
      const isActive = user.status === 'Active'
      const isInvited = user.status === 'Invited'
      const textColor = isActive ? 'text-pGreen' : isInvited ? 'text-pBlue' : 'text-pRed'
      return (
        <tr key={user.id} className={rowStyle}>
          <td>{user.name}</td>
          <td className='w-1/3'>{user.email}</td>
          <td className={textColor}>{user.status}</td>
          <td>{user.role}</td>
          <td className='w-[24px]'><ThreeDotsButton user={user} /></td>
        </tr>
      )
    })
  }

  const renderStatistic = () => {
    return (
      <div className='w-1/2 flex gap-20'>
        <div className='flex items-center gap-2'>
          <h4 className='text-pGreen'>Active:</h4>
          <p className=''>{statistics.active}</p>
        </div>
        <div className='flex items-center gap-2'>
          <h4 className='text-pBlue'>Invited:</h4>
          <p className=''>{statistics.invited}</p>
        </div>
        <div className='flex items-center gap-2'>
          <h4 className='text-pRed'>Deactivated:</h4>
          <p className=''>{statistics.deactivated}</p>
        </div>
      </div>
    )
  }

  return (
    <MainContainer>
      <FiltersAndButtons />
      <Container>
        <div className='flex justify-between mb-[20px]'>
          {renderStatistic()}
          <ExportAsCSVButton />
        </div>
        <Table className='overflow-visible'>
          <TableHead headers={tableHeaders} />
          <tbody>
            {renderClaims()}
          </tbody>
        </Table>
      </Container>
    </MainContainer>
  )
}