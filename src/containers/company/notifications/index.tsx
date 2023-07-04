import { Container } from '@/components/container'
import { MainContainer } from '@/components/main-container'
import { TableHead } from '@/components/table/table-head'
import { Table } from '@/components/table/table'
import { data } from './data'
import { FiltersAndButtons } from './filters-and-buttons'
import { ThreeDotsButton } from './three-dots-button'


const tableHeaders = ['Title', 'Description', 'Company', 'Date sent', '']
const rowStyle = 'table-row cursor-pointer border-t border-pLight hover:bg-[#f2f4f780]'

export const NotificationsContainer = () => {


  const renderNotifications = () => {
    return data.filteredNotifications.map((notification) => {
      return (
        <tr key={notification.id} className={rowStyle}>
          <td>{notification.title}</td>
          <td className='max-w-[280px] overflow-hidden whitespace-nowrap text-ellipsis'>{notification.description}</td>
          <td className=''>{notification.company}</td>
          <td>{notification.dateSent}</td>
          <td className='w-[24px]'><ThreeDotsButton notification={notification} /></td>
        </tr>
      )
    })
  }

  return (
    <MainContainer>
      <FiltersAndButtons />
      <Container>
        <Table className='overflow-visible'>
          <TableHead headers={tableHeaders} />
          <tbody>
            {renderNotifications()}
          </tbody>
        </Table>
      </Container>
    </MainContainer>
  )
}