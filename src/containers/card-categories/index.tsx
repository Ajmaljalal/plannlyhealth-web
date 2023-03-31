import { Container } from '@/components/container'
import { MainContainer } from '@/components/main-container'
import { TableHead } from '@/components/table/table-head'
import { Table } from '@/components/table/table'
import { data } from './data'
import { FiltersAndButtons } from './filters-and-buttons'
import { ThreeDotsButton } from './three-dots-button'


const tableHeaders = ['Description', 'Code', 'Name', 'Benefits Program', '']
const rowStyle = 'table-row cursor-pointer border-t border-pLight hover:bg-transparent'

export const CardCategoriesContainer = () => {


  const renderCategories = () => {
    return data.filteredCategories.map((category) => {
      return (
        <tr key={category.id} className={rowStyle}>
          <td>{category.categoryName}</td>
          <td className=''>{category.code}</td>
          <td className=''>{category.stripeCategoryName}</td>
          <td>{category.benefitsProgram}</td>
          <td className='w-[24px]'><ThreeDotsButton category={category} /></td>
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
            {renderCategories()}
          </tbody>
        </Table>
      </Container>
    </MainContainer>
  )
}