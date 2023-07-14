'use client';
import { Button } from "@/components/button";
import Hero from "../hero";
import { icons } from "@/lib/icons";
import { FileUpload } from "@/components/file-upload";
import { useState } from "react";
import { Table } from "@/components/table/table";
import { TableHead } from "@/components/table/table-head";
import Employee from "./employee-row";
import { EmployeeAddModal } from "./add-employee-modal";
import { useDispatch } from "react-redux";
import { employeesSelector, setEmployees } from "@/store/company";
import { useSelector } from "@/store/store";
import { useRouter } from "next/navigation";


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
    role: 'Standard',
  },
  {
    id: 3,
    first_name: 'John',
    last_name: 'Doe',
    job_title: 'Software Engineer',
    email: 'john@user.com',
    role: 'Owner',
  },
  {
    id: 4,
    first_name: 'Flippa',
    last_name: 'Doe',
    job_title: 'Aminstrator',
    email: 'flipp@test.com',
    role: 'Super Admin',
  },
  {
    id: 5,
    first_name: 'John',
    last_name: 'Doe',
    job_title: 'Software Engineer',
    email: 'john@user.com',
    role: 'Finance',
  },
  {
    id: 6,
    first_name: 'Flippa',
    last_name: 'Doe',
    job_title: 'Aminstrator',
    email: 'flipp@test.com',
    role: 'Broker',
  },
  {
    id: 7,
    first_name: 'John',
    last_name: 'Doe',
    job_title: 'Software Engineer',
    email: 'john@user.com',
    role: 'IT',
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
    role: 'Owner',
  },
  {
    id: 10,
    first_name: 'Flippa',
    last_name: 'Doe',
    job_title: 'Aminstrator',
    email: 'flipp@test.com',
    role: 'Standard',
  },

]



const EmployeesList = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState<any>(false)
  const selectedEmployees = useSelector(employeesSelector)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }


  const handleAddEmployee = (newEmployee: any) => {
    dispatch(setEmployees([newEmployee, ...selectedEmployees]))
    console.log(newEmployee)
  }

  const handleEditEmployee = (updatedEmployee: any) => {
    const updatedEmployees = selectedEmployees.map((employee: any) => {
      if (employee.id === updatedEmployee.id) {
        return updatedEmployee
      }
      return employee
    })
    dispatch(setEmployees(updatedEmployees))
  }

  const handleDeleteEmployee = (employeeId: number) => {
    const updatedEmployees = selectedEmployees.filter((employee: any) => employee.id !== employeeId)
    dispatch(setEmployees(updatedEmployees))
  }

  const handleUploadEmployees = (file: any) => {
    console.log(file)
    dispatch(setEmployees(employees))
  }

  const handleMoveToNextStep = () => {
    router.push('/company/dashboard')
  }

  const renderEmpoyees = () => {
    return selectedEmployees?.map((employee: any) => {
      return <Employee key={employee.id} employee={employee} onUpdateEmployee={handleEditEmployee} onDeleteEmployee={handleDeleteEmployee} />
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
        <Table className='overflow-scroll mt-[16px]'>
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
      {selectedEmployees?.length ? renderUsersTable() : renderNullState()}
      {
        selectedEmployees?.length ? <div className="absolute bottom-0 bg-basic_grey_5 w-full h-[100px] flex justify-end pt-[20px]">
          <Button className="w-[200px] max-h-[40px] mr-[24px]" text="Save for Later" onClick={handleMoveToNextStep} />
          <Button className="w-[200px] max-h-[40px]" text="Launch" isPrimary onClick={handleMoveToNextStep} />
        </div> : null
      }
      <EmployeeAddModal isOpen={isModalOpen} onClose={toggleModal} onSave={(employee) => handleAddEmployee(employee)} />
    </div>
  )
}

export default EmployeesList;