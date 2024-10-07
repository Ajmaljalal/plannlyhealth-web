'use client';
import { Button } from "@/components/button";
import Hero from "../hero";
import { icons } from "@/lib/icons";
import { FileUpload } from "@/components/file-upload";
import { useState } from "react";
import { Table } from "@/components/table/table";
import { TableHead } from "@/components/table/table-head";
import Employee from "./employee-row";
import { EmployeeAddModal } from "../../../../components/add-employee-modal";
import { useDispatch } from "react-redux";
import { employeesSelector, selectCompanyDetails, setEmployees } from "@/store/company";
import { useSelector } from "@/store/store";
import { useRouter, useSearchParams } from "next/navigation";
import { createBulkNewUserInvite, createNewUserInvite } from "@/lib/services/invite-users";
import { updateEmployee } from "@/lib/services/employee";
import { csvToObject } from "@/lib/helpers/csv-helpers";
import { GET_NEW_USERS_BY_COMPANY } from "@/lib/helpers/api-urls";
import { mutate } from "swr";


const tableHeaders = ['Name', 'Job Title', 'Email', 'Role', '']

const EmployeesList = () => {
  const router = useRouter()
  const params = useSearchParams()
  const company: any = useSelector(selectCompanyDetails);
  const companyId = company?.id;
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState<any>(false)
  const selectedEmployees: any = useSelector(employeesSelector) || []

  const companyIdFromParams = params.get('org_id')

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }


  const handleAddEmployee = async (newEmployee: any) => {
    await createNewUserInvite(newEmployee)
    const newEmployees = [...selectedEmployees, newEmployee]
    dispatch(setEmployees(newEmployees))
  }

  const handleEditEmployee = async (updatedEmployee: any) => {
    const updatedEmployeeFromDb = await updateEmployee(updatedEmployee)
    const updatedEmployees = selectedEmployees?.map((employee: any) => {
      if (employee.id === updatedEmployeeFromDb.id) {
        return updatedEmployeeFromDb
      }
      return employee
    })
    dispatch(setEmployees(updatedEmployees))
  }

  const handleDeleteEmployee = (employeeId: number) => {
    const updatedEmployees = selectedEmployees.filter((employee: any) => employee.id !== employeeId)
    dispatch(setEmployees(updatedEmployees))
  }

  const handleUploadEmployees = async (file: any) => {
    const usersFromFile = await csvToObject(file)
    await createBulkNewUserInvite(usersFromFile, companyId)
    dispatch(setEmployees(usersFromFile))
    mutate(`${GET_NEW_USERS_BY_COMPANY}/${companyId}`);
  }

  const handleMoveToNextStep = () => {
    router.push(`/company/dashboard?org_id=${companyIdFromParams}`)
  }

  const handleSkip = () => {
    router.push(`/company/dashboard?org_id=${companyIdFromParams}`)
  }

  const renderEmpoyees = () => {
    return selectedEmployees?.map((employee: any) => {
      return <Employee
        key={employee.id}
        employee={employee}
        onUpdateEmployee={handleEditEmployee}
        onDeleteEmployee={handleEditEmployee} />
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
        <Table className='overflow-hidden mt-[16px]'>
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
        <div className="flex gap-4 mt-[16px]">
          <FileUpload
            onChange={(file) => handleUploadEmployees(file[0])}
            acceptedFileTypes='.csv'
            text='Upload CSV'
            className="w-[200px]"
          />
          <Button className="w-[200px]" text="Add Employee" icon={icons.add} onClick={toggleModal} />
        </div>
        < Button className="w-[420px] mt-4" text="Skip" onClick={handleSkip} />
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