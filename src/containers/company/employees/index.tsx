'use client';
import { Button } from "@/components/button";
import { icons } from "@/lib/icons";
import { FileUpload } from "@/components/file-upload";
import { useEffect, useState } from "react";
import { Table } from "@/components/table/table";
import { TableHead } from "@/components/table/table-head";
import { useDispatch } from "react-redux";
import { employeesSelector, selectCompanyDetails, setEmployees } from "@/store/company";
import { useSelector } from "@/store/store";
import Employee from "@/containers/onboarding/company/employees-upload/employee-row";
import Hero from "@/containers/onboarding/company/hero";
import { EmployeeAddModal } from "@/components/add-employee-modal";
import Tabs from "@/components/tabs/tabs";
import { useRouter } from "next/navigation";
import { createNewUserInvite } from "@/lib/services/invite-users";
import useSWR from "swr";
import { GET_EMPLOYEE_BY_COMPANY, GET_NEW_USERS_BY_COMPANY } from "@/lib/helpers/api-urls";
import { fetcher } from "@/lib/helpers";
import { Status } from "@/lib/types/general";

const tableHeaders = ['Name', 'Job Title', 'Email', 'Role', '']

const EmployeesListContainer = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState<any>(false)
  const [activeTab, setActiveTab] = useState('active')
  const allEmployees: any = useSelector(employeesSelector) || []
  const company: any = useSelector(selectCompanyDetails)
  const activeEmployees = allEmployees?.filter((employee: any) => employee.status === Status.Active)
  const inactiveEmployees = allEmployees?.filter((employee: any) => employee.status === Status.Inactive)
  const invitedEmployees = allEmployees?.filter((employee: any) => employee.status === Status.Invited)
  const companyId = company?.id
  const { data: employees } = useSWR(companyId ? `${GET_EMPLOYEE_BY_COMPANY}/${companyId}` : null, fetcher);
  const { data: invitedUsers } = useSWR(companyId ? `${GET_NEW_USERS_BY_COMPANY}/${companyId}` : null, fetcher);


  useEffect(() => {
    if (employees) {
      dispatch(setEmployees([...employees, ...allEmployees]));
    }
    if (invitedUsers) {
      dispatch(setEmployees([...invitedUsers, ...allEmployees]));
    }
    setIsLoading(false)
  }, [invitedUsers, employees]);

  const handleTabClick = (text: string) => {
    setActiveTab(text.toLocaleLowerCase())
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleAddEmployee = async (newEmployee: any) => {
    await createNewUserInvite(newEmployee)
    dispatch(setEmployees([newEmployee, ...allEmployees]))
  }

  const handleEditEmployee = (updatedEmployee: any) => {
    const updatedEmployees = allEmployees?.map((employee: any) => {
      if (employee.id === updatedEmployee.id) {
        return updatedEmployee
      }
      return employee
    })
    dispatch(setEmployees(updatedEmployees))
  }

  const handleDeactivateEmployee = (employeeId: number) => {
    const updatedEmployees = allEmployees?.map((employee: any) => {
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
    const updatedEmployees = allEmployees?.map((employee: any) => {
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
      text: 'Invited',
      count: invitedEmployees?.length || 0,
      isActive: activeTab === 'invited',
      onClick: () => handleTabClick('invited')
    },
    {
      text: 'Inactive',
      count: inactiveEmployees?.length || 0,
      isActive: activeTab === 'inactive',
      onClick: () => handleTabClick('inactive')

    }
  ]

  const renderInactiveEmployeesNullState = () => {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center mt-[200px]">
        <Hero image="/illustrations/employee-upload.svg" title="No Inactive Employees" description="You have no inactive employees" />
      </div>
    )
  }

  const renderGeneralNullState = () => {
    const text = !activeEmployees?.length && activeTab === 'active' ? 'No active employees, please add employees now' : 'No invited employees, please invite employees now'
    return (
      <div className="w-full h-full flex flex-col items-center justify-center mt-[200px]">
        <Hero image="/illustrations/employee-upload.svg" title="No Employees" description={text} />
      </div>
    )
  }

  const renderEmpoyees = () => {
    const employees = activeTab === 'active' ? activeEmployees : activeTab === 'inactive' ? inactiveEmployees : invitedEmployees

    return employees?.map((employee: any) => {
      return <Employee
        key={employee.id}
        employee={employee}
        onUpdateEmployee={handleEditEmployee}
        onDeleteEmployee={handleDeactivateEmployee}
        onActivateEmployee={handleActivateEmployee}
        onClick={() => router.push(`/company/employees/${employee.id}?org_id=${employee.company_id}&status=${employee.status}`)}
      />
    })
  }

  const renderEmployeesTable = () => {
    if (activeTab === 'inactive' && !inactiveEmployees?.length) {
      return renderInactiveEmployeesNullState()
    }
    if (activeTab === 'active' && !activeEmployees?.length) {
      return renderGeneralNullState()
    }

    if (activeTab === 'invited' && !invitedEmployees?.length) {
      return renderGeneralNullState()
    }
    return (
      <Table className='overflow-hidden mt-[32px]'>
        <TableHead headers={tableHeaders} />
        <tbody>
          {renderEmpoyees()}
        </tbody>
      </Table>
    )
  }


  const renderContent = () => {
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
        {renderEmployeesTable()}
      </div>
    )
  }

  if (isLoading && !allEmployees?.length) return (
    <div className="w-full h-full flex flex-col items-center justify-center mt-[200px]">
      <Hero image="/illustrations/employee-upload.svg" title="Loading..." description="Please wait while we fetch your employees" />
    </div>
  )

  return (
    <div className="flex flex-col justify-between items-center w-full relative overflow-hidden">
      {allEmployees?.length ? renderContent() : renderGeneralNullState()}
      <EmployeeAddModal isOpen={isModalOpen} onClose={toggleModal} onSave={(employee) => handleAddEmployee(employee)} />
    </div>
  )
}

export default EmployeesListContainer;