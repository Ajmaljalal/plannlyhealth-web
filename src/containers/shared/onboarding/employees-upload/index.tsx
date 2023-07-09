import { Button } from "@/components/button";
import Hero from "../hero";
import { icons } from "@/lib/icons";
import { FileUpload } from "@/components/file-upload";
import { useState } from "react";
import { Table } from "@/components/table/table";
import { TableHead } from "@/components/table/table-head";
import Employee from "./employee-row";


const tableHeaders = ['Name', 'Job Title', 'Email', 'Role', '']


const employees: any = [
  {
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    job_title: 'Software Engineer',
    email: 'test@user.com',
    role: 'Admin',
  },
  {
    id: 2,
    first_name: 'Flippa',
    last_name: 'Doe',
    job_title: 'Aminstrator',
    email: 'flipp@test.com',
    role: 'Admin',
  },
  {
    id: 3,
    first_name: 'John',
    last_name: 'Doe',
    job_title: 'Software Engineer',
    email: 'john@user.com',
    role: 'Admin',
  },
  {
    id: 4,
    first_name: 'Flippa',
    last_name: 'Doe',
    job_title: 'Aminstrator',
    email: 'flipp@test.com',
    role: 'Admin',
  },
  {
    id: 5,
    first_name: 'John',
    last_name: 'Doe',
    job_title: 'Software Engineer',
    email: 'john@user.com',
    role: 'Admin',
  },
  {
    id: 6,
    first_name: 'Flippa',
    last_name: 'Doe',
    job_title: 'Aminstrator',
    email: 'flipp@test.com',
    role: 'Admin',
  },
  {
    id: 7,
    first_name: 'John',
    last_name: 'Doe',
    job_title: 'Software Engineer',
    email: 'john@user.com',
    role: 'Admin',
  },
  {
    id: 8,
    first_name: 'Flippa',
    last_name: 'Doe',
    job_title: 'Aminstrator',
    email: 'flipp@test.com',
    role: 'Admin',
  },
  {
    id: 9,
    first_name: 'John',
    last_name: 'Doe',
    job_title: 'Software Engineer',
    email: 'john@user.com',
    role: 'Admin',
  },
  {
    id: 10,
    first_name: 'Flippa',
    last_name: 'Doe',
    job_title: 'Aminstrator',
    email: 'flipp@test.com',
    role: 'Admin',
  },

]



const EmployeesList = () => {
  const [isModalOpen, setIsModalOpen] = useState<any>(false)
  const [selectedEmployee, setSelectedEmployee] = useState<any>([])

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }


  const handleAddEmployee = (newEmployee: any) => {
    console.log(newEmployee)
  }

  const handleUploadEmployees = (file: any) => {
    console.log(file)
    setSelectedEmployee(employees)
  }

  const renderEmpoyees = () => {
    return selectedEmployee?.map((employee: any) => {
      return <Employee key={employee.id} employee={employee} />
    })
  }

  const renderUsersTable = () => {
    return (
      <div className="flex flex-col items-strech gap-4 w-full pt-[50px]">
        <div className="flex justify-between items-center w-full">
          <h2>Employees List</h2>
          <div className="flex gap-4">
            <Button className="text-basic_grey_1" text="Add Employee" isSmallBtn icon={icons.add} onClick={toggleModal} />
            <FileUpload
              onChange={(file) => handleUploadEmployees(file[0])}
              acceptedFileTypes='.csv'
              text='Upload CSV'
              isSmallBtn
            />
          </div>
        </div>
        <Table className='pb-[20px] overflow-scroll mt-[16px]'>
          <TableHead headers={tableHeaders} />
          <tbody>
            {renderEmpoyees()}
          </tbody>
        </Table>
      </div>
    )
  }

  const renderNullState = () => {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <Hero image="/illustrations/employee-upload.svg" title="Upload a list of your employees" description="Select a CSV file of your employees info" />
        <div className="flex gap-4">
          <FileUpload
            onChange={(file) => handleUploadEmployees(file[0])}
            acceptedFileTypes='.csv'
            text='Upload CSV'
            className="w-[200px]"
          />
          <Button className="w-[200px]" text="Add Employee" icon={icons.add} onClick={toggleModal} />
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-between items-end w-full h-full relative overflow-hidden">
      {selectedEmployee?.length ? renderUsersTable() : renderNullState()}
      {
        selectedEmployee?.length ? <div className="absolute bottom-0 bg-basic_grey_5 w-full h-[100px] flex justify-end pt-[20px]">
          <Button className="w-[200px] max-h-[40px] mr-[24px]" text="Save for Later" onClick={() => console.log('conitune')} />
          <Button className="w-[200px] max-h-[40px]" text="Launch" isPrimary onClick={() => console.log('conitune')} />
        </div> : null
      }
    </div>
  )
}

export default EmployeesList;