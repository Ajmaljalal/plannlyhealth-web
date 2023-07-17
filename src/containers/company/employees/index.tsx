'use client';
import { Button } from "@/components/button";
import { icons } from "@/lib/icons";
import { FileUpload } from "@/components/file-upload";
import { useState } from "react";
import { Table } from "@/components/table/table";
import { TableHead } from "@/components/table/table-head";
import { useDispatch } from "react-redux";
import { employeesSelector, setEmployees } from "@/store/company";
import { useSelector } from "@/store/store";
import Employee from "@/containers/shared/onboarding/employees-upload/employee-row";
import Hero from "@/containers/shared/onboarding/hero";
import { EmployeeAddModal } from "@/containers/shared/onboarding/employees-upload/add-employee-modal";
import Tabs from "@/components/tabs/tabs";


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



const EmployeesListContainer = () => {
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState<any>(false)
  const [activeTab, setActiveTab] = useState('active')
  const allEmployees = useSelector(employeesSelector)
  const activeEmployees = allEmployees.filter((employee: any) => !employee.inactive)
  const inactiveEmployees = allEmployees.filter((employee: any) => employee.inactive)

  const handleTabClick = (text: string) => {
    setActiveTab(text.toLocaleLowerCase())
  }


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }


  const handleAddEmployee = (newEmployee: any) => {
    dispatch(setEmployees([newEmployee, ...allEmployees]))
    console.log(newEmployee)
  }

  const handleEditEmployee = (updatedEmployee: any) => {
    const updatedEmployees = allEmployees.map((employee: any) => {
      if (employee.id === updatedEmployee.id) {
        return updatedEmployee
      }
      return employee
    })
    dispatch(setEmployees(updatedEmployees))
  }

  const handleDeactivateEmployee = (employeeId: number) => {
    const updatedEmployees = allEmployees.map((employee: any) => {
      if (employee.id === employeeId) {
        const updatedEmployee = { ...employee, inactive: true }
        return updatedEmployee
      } else {
        return employee
      }
    })

    dispatch(setEmployees(updatedEmployees))
  }

  const handleActivateEmployee = (employeeId: number) => {
    const updatedEmployees = allEmployees.map((employee: any) => {
      if (employee.id === employeeId) {
        const updatedEmployee = { ...employee, inactive: false }
        return updatedEmployee
      } else {
        return employee
      }
    })
    dispatch(setEmployees(updatedEmployees))
  }

  const handleUploadEmployees = (file: any) => {
    console.log(file)
    dispatch(setEmployees(employees))
  }

  const tabs = [
    {
      text: 'Active',
      count: activeEmployees?.length || 0,
      isActive: activeTab === 'active',
      onClick: () => handleTabClick('active')
    },
    {
      text: 'Inactive',
      count: inactiveEmployees?.length || 0,
      isActive: activeTab === 'inactive',
      onClick: () => handleTabClick('inactive')

    }
  ]

  const renderEmpoyees = () => {
    const employees = activeTab === 'active' ? activeEmployees : inactiveEmployees
    return employees?.map((employee: any) => {
      return <Employee key={employee.id} employee={employee} onUpdateEmployee={handleEditEmployee} onDeleteEmployee={handleDeactivateEmployee} onActivateEmployee={handleActivateEmployee} />
    })
  }

  const renderUsersTable = () => {
    return (
      <div className="flex flex-col items-strech w-full">
        <h2 className="font-normal mb-[20px]">Employees</h2>
        <div className="flex justify-between items-center w-full">
          <Tabs tabs={tabs} />
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
        <Table className='overflow-scroll mt-[32px]'>
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
      {allEmployees?.length ? renderUsersTable() : renderNullState()}
      <EmployeeAddModal isOpen={isModalOpen} onClose={toggleModal} onSave={(employee) => handleAddEmployee(employee)} />
    </div>
  )
}

export default EmployeesListContainer;