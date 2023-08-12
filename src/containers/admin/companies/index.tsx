'use client'

import { TableHead } from '@/components/table/table-head'
import { Table } from '@/components/table/table'
import { data } from './data'
import Image from 'next/image'
import { icons } from '@/lib/icons'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { useRouter } from 'next/navigation'

const tableHeaders = ['Name', 'Email', 'Employees', '']
const rowStyle = 'table-row border-t'

export const CompaniesContainer = () => {
  const router = useRouter()

  const onRegisterNewCompany = () => {
    console.log('register new company')
    router.push('/onboarding/company')
  }

  const renderCompanies = () => {
    return data.filteredCompanies.map((company) => {
      return (
        <tr key={company.id} className={rowStyle}>
          <td className='pl-[32px] w-1/3'>{company.name}</td>
          <td className='w-1/3'>{company.email}</td>
          <td>{company.activeUser}</td>
          {
            <td className='flex justify-end items-center mr-[32px] text-small'>
              <span className='hover:bg-basic_grey_2 hover:text-basic_white h-[32px] w-[190px] flex items-center justify-center gap-2 rounded-[24px] mt-[1px] bg-basic_grey_4 cursor-pointer'>
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
          <Input placeholder='Search hostpitals' name='hospital-name' value={''} className='w-[300px]' inputClassName='rounded-[24px] px-[23px]' />
          <Button className='h-[40px]' isPrimary text='Add Hospital' icon={icons.addLight} onClick={onRegisterNewCompany} />
        </div>
      </div>
      {renerTable()}
    </div>
  )
}