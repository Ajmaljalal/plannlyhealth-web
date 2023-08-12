'use client'
import { TableHead } from '@/components/table/table-head'
import { Table } from '@/components/table/table'
import Image from 'next/image'
import { icons } from '@/lib/icons'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useDispatch } from '@/store/store'
import { setCompanyDetails } from '@/store/company'

const tableHeaders = ['Name', 'Email', 'Employees', '']
const rowStyle = 'table-row border-t'

export const CompaniesContainer = ({ companies }: any) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [sorteCompanies, setSortedCompanies] = useState(companies)

  const handleOnSearch = (e: any) => {
    const value = e.target.value
    const filteredCompanies = companies?.filter((company: any) => {
      return company.name.toLowerCase().includes(value.toLowerCase()) || company.email.toLowerCase().includes(value.toLowerCase())
    }) || null
    console.log('filteredCompanies', filteredCompanies)
    setSortedCompanies(filteredCompanies)
  }

  const onRegisterNewCompany = () => {
    console.log('register new company')
    router.push('/onboarding/company')
  }

  const onGotoCompanyDashboard = (company: any) => {
    dispatch(setCompanyDetails(company))
    router.push('/company/dashboard?company_id=' + company.id)
  }

  const renderCompanies = () => {
    return sorteCompanies?.map((company: any) => {
      return (
        <tr key={company.id} className={rowStyle}>
          <td className='pl-[32px] w-1/3'>{company.name}</td>
          <td className='w-1/3'>{company.email}</td>
          <td>{company.employee_count}</td>
          {
            <td className='flex justify-end items-center mr-[32px] text-small'>
              <span onClick={() => onGotoCompanyDashboard(company)} className='hover:bg-basic_grey_2 hover:text-basic_white h-[32px] w-[190px] flex items-center justify-center gap-2 rounded-[24px] mt-[1px] bg-basic_grey_4 cursor-pointer'>
                <Image src={icons.linkIcon} width={20} height={20} alt='dashbard link icon' />
                Company Dashboard
              </span>
            </td>
          }
        </tr>
      )
    })
  }

  const renerTable = () => {
    if (!sorteCompanies?.length) return (
      <div className='flex flex-col items-center justify-center gap-4 mt-[100px]'>
        <Image src='/illustrations/company-details-illustration.svg' width={200} height={200} alt='no data icon' />
        <p className='text-center'>No hospital found!</p>
      </div>
    )
    return (
      <Table className='text-small'>
        <TableHead headers={tableHeaders} />
        <tbody>
          {renderCompanies()}
        </tbody>
      </Table>
    )
  }

  return (
    <div className="flex flex-col">
      <div className='flex gap-4 items-center mb-[24px] justify-between'>
        <h2 className='font-normal pb-2'>Hospitals</h2>
        <div className='flex items-center gap-4'>
          <Input onChange={handleOnSearch} placeholder='Search hostpitals' name='hospital-name' value={''} className='w-[300px]' inputClassName='rounded-[24px] px-[23px]' />
          <Button className='h-[40px]' isPrimary text='Add Hospital' icon={icons.addLight} onClick={onRegisterNewCompany} />
        </div>
      </div>
      {renerTable()}
    </div>
  )
}