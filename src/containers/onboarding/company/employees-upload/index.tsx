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
import { employeesSelector, setEmployees } from "@/store/company";
import { useSelector } from "@/store/store";
import { useRouter, useSearchParams } from "next/navigation";
import { createNewUserInvite } from "@/lib/services/invite-users";
import { updateEmployee } from "@/lib/services/employee";

export const employees: any = [
  {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    job_title: "Pediatrician",
    email: "john.doe@healthcare.org",
    phone: "123-456-7890",
    role: "admin",
    marital_status: "Married",
    date_of_birth: "1980-05-01",
    gender: "Male",
    support_id: 101,
    ssn: "123-45-6789",
    department: "Pediatrics",
    location: "East Wing",
    dependents: [
      { id: 1, name: "Jane Doe", relation: "Spouse", date_of_birth: "1982-05-10" },
      { id: 2, name: "Jimmy Doe", relation: "Son", date_of_birth: "2005-06-15" },
      { id: 3, name: "Jenny Doe", relation: "Daughter", date_of_birth: "2007-07-20" }
    ]
  },
  {
    id: 2,
    first_name: "Emily",
    last_name: "Smith",
    job_title: "Cardiologist",
    email: "emily.smith@healthcare.org",
    phone: "234-567-8901",
    role: "IT",
    marital_status: "Single",
    date_of_birth: "1978-08-02",
    gender: "Female",
    support_id: 102,
    ssn: "234-56-7890",
    department: "Cardiology",
    location: "South Building",
    dependents: [
      { id: 1, name: "Ella Smith", relation: "Daughter", date_of_birth: "2010-09-10" },
      { id: 2, name: "Evan Smith", relation: "Son", date_of_birth: "2012-10-05" },
      { id: 3, name: "Eva Smith", relation: "Daughter", date_of_birth: "2014-11-20" }
    ]
  },
  {
    id: 3,
    first_name: "Michael",
    last_name: "Brown",
    job_title: "Orthopedic Surgeon",
    email: "michael.brown@healthcare.org",
    phone: "345-678-9012",
    role: "Finance",
    marital_status: "Married",
    date_of_birth: "1975-07-15",
    gender: "Male",
    support_id: 103,
    ssn: "345-67-8901",
    department: "Orthopedics",
    location: "West Wing",
    dependents: [
      { id: 1, name: "Mia Brown", relation: "Spouse", date_of_birth: "1976-08-25" },
      { id: 2, name: "Mason Brown", relation: "Son", date_of_birth: "2005-09-17" },
      { id: 3, name: "Maddison Brown", relation: "Daughter", date_of_birth: "2008-10-21" }
    ]
  },
  {
    id: 4,
    first_name: "Emma",
    last_name: "Wilson",
    job_title: "Nurse Practitioner",
    email: "emma.wilson@healthcare.org",
    phone: "456-789-0123",
    role: "standard",
    marital_status: "Single",
    date_of_birth: "1985-10-10",
    gender: "Female",
    support_id: 104,
    ssn: "456-78-9012",
    department: "Nursing",
    location: "Main Building",
    dependents: [
      { id: 1, name: "Ethan Wilson", relation: "Son", date_of_birth: "2010-11-01" },
      { id: 2, name: "Eva Wilson", relation: "Daughter", date_of_birth: "2012-12-12" },
      { id: 3, name: "Eli Wilson", relation: "Son", date_of_birth: "2015-01-05" }
    ]
  },
  {
    id: 5,
    first_name: "James",
    last_name: "Johnson",
    job_title: "Anesthesiologist",
    email: "james.johnson@healthcare.org",
    phone: "567-890-1234",
    role: "admin",
    marital_status: "Married",
    date_of_birth: "1972-02-14",
    gender: "Male",
    support_id: 105,
    ssn: "567-89-0123",
    department: "Anesthesiology",
    location: "North Wing",
    dependents: [
      { id: 1, name: "Jessica Johnson", relation: "Spouse", date_of_birth: "1975-03-05" },
      { id: 2, name: "Jacob Johnson", relation: "Son", date_of_birth: "2000-04-15" },
      { id: 3, name: "Jennifer Johnson", relation: "Daughter", date_of_birth: "2004-05-25" }
    ]
  },
  {
    id: 6,
    first_name: "Sophia",
    last_name: "Taylor",
    job_title: "Radiologist",
    email: "sophia.taylor@healthcare.org",
    phone: "678-901-2345",
    role: "IT",
    marital_status: "Divorced",
    date_of_birth: "1980-06-06",
    gender: "Female",
    support_id: 106,
    ssn: "678-90-1234",
    department: "Radiology",
    location: "Radiology Wing",
    dependents: [
      { id: 1, name: "Samuel Taylor", relation: "Son", date_of_birth: "2005-07-07" },
      { id: 2, name: "Savannah Taylor", relation: "Daughter", date_of_birth: "2008-08-08" },
      { id: 3, name: "Scarlett Taylor", relation: "Daughter", date_of_birth: "2010-09-09" }
    ]
  },
  {
    id: 7,
    first_name: "William",
    last_name: "Davis",
    job_title: "Neurologist",
    email: "william.davis@healthcare.org",
    phone: "789-012-3456",
    role: "Finance",
    marital_status: "Married",
    date_of_birth: "1976-12-12",
    gender: "Male",
    support_id: 107,
    ssn: "789-01-2345",
    department: "Neurology",
    location: "Emergency Building",
    dependents: [
      { id: 1, name: "Wendy Davis", relation: "Spouse", date_of_birth: "1980-01-01" },
      { id: 2, name: "Walter Davis", relation: "Son", date_of_birth: "2002-02-02" },
      { id: 3, name: "Willa Davis", relation: "Daughter", date_of_birth: "2006-03-03" }
    ]
  },
  {
    id: 8,
    first_name: "Ava",
    last_name: "Martin",
    job_title: "Gynecologist",
    email: "ava.martin@healthcare.org",
    phone: "890-123-4567",
    role: "Broker",
    marital_status: "Single",
    date_of_birth: "1982-04-04",
    gender: "Female",
    support_id: 108,
    ssn: "890-12-3456",
    department: "Gynecology",
    location: "South Building",
    dependents: [
      { id: 1, name: "Alex Martin", relation: "Son", date_of_birth: "2006-05-05" },
      { id: 2, name: "Amelia Martin", relation: "Daughter", date_of_birth: "2009-06-06" },
      { id: 3, name: "Aidan Martin", relation: "Son", date_of_birth: "2012-07-07" }
    ]
  },
  {
    id: 9,
    first_name: "Lucas",
    last_name: "Thompson",
    job_title: "Dentist",
    email: "lucas.thompson@healthcare.org",
    phone: "901-234-5678",
    role: "admin",
    marital_status: "Married",
    date_of_birth: "1978-08-08",
    gender: "Male",
    support_id: 109,
    ssn: "901-23-4567",
    department: "Dentistry",
    location: "Dental Building",
    dependents: [
      { id: 1, name: "Laura Thompson", relation: "Spouse", date_of_birth: "1980-09-09" },
      { id: 2, name: "Liam Thompson", relation: "Son", date_of_birth: "2004-10-10" },
      { id: 3, name: "Luna Thompson", relation: "Daughter", date_of_birth: "2006-11-11" }
    ]
  },
  {
    id: 10,
    first_name: "Isabella",
    last_name: "White",
    job_title: "Pharmacist",
    email: "isabella.white@healthcare.org",
    phone: "012-345-6789",
    role: "standard",
    marital_status: "Divorced",
    date_of_birth: "1985-10-10",
    gender: "Female",
    support_id: 110,
    ssn: "012-34-5678",
    department: "Pharmacy",
    location: "Main Building",
    dependents: [
      { id: 1, name: "Ian White", relation: "Son", date_of_birth: "2007-12-12" },
      { id: 2, name: "Ivy White", relation: "Daughter", date_of_birth: "2010-01-01" },
      { id: 3, name: "Isaac White", relation: "Son", date_of_birth: "2012-02-02" }
    ]
  }

]


const tableHeaders = ['Name', 'Job Title', 'Email', 'Role', '']

const EmployeesList = () => {
  const router = useRouter()
  const params = useSearchParams()
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState<any>(false)
  const selectedEmployees: any = useSelector(employeesSelector) || []

  const companyIdFromParams = params.get('org_id')

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }


  const handleAddEmployee = async (newEmployee: any) => {
    await createNewUserInvite(newEmployee)
    dispatch(setEmployees([newEmployee, ...selectedEmployees]))
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

  const handleUploadEmployees = (file: any) => {
    dispatch(setEmployees(employees))
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