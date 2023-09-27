'use client';
import { currentEmployeeSelector, setCurrentEmployee } from "@/store/company";
import { useDispatch, useSelector } from "@/store/store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from 'next/image'
import { icons } from "@/lib/icons";
import { useEffect, useState } from "react";
import EmployeeDetails from "./employee-details";
import { selectUserProfile } from "@/store/user";
import { Role, Status } from "@/lib/types/general";
import { getEmployeeById } from "@/lib/services/employee";
import { getNewUserById } from "@/lib/services/invite-users";

const EmployeeDetailsContainer = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()
  const params = useSearchParams()
  const router = useRouter()
  const id = pathname.split('/')[3]
  const status = params.get('status')
  const user = useSelector(selectUserProfile)
  const employee: any = useSelector(currentEmployeeSelector)
  const isAdmin = user?.role === Role.Admin || user?.role === Role.SuperAdmin
  const shouldFetchEmployees = isAdmin && !employee && id

  const getCurrentEmployee = () => {
    const getEmplloyee = status !== Status.Invited ? getEmployeeById(id) : getNewUserById(id)
    getEmplloyee.then((employeeData) => {
      const employeeFromDb = employeeData || null
      dispatch(setCurrentEmployee(employeeFromDb))
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      setIsLoading(false)
    })
  }

  useEffect(() => {
    if (shouldFetchEmployees) {
      getCurrentEmployee()
      if (employee) {
        setIsLoading(false)
      }
    }
  }, [shouldFetchEmployees])

  if (isLoading && !employee) {
    return (
      <div>
        <h2 className="font-normal">loading...</h2>
      </div>
    )
  }

  if (!employee) {
    return (
      <div>
        <h2 className="font-normal">Employee not found!</h2>
      </div>
    )
  }

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen)
  // }

  // const handleTabClick = (tab: string) => {
  //   setActiveTab(tab)
  // }

  // const handleSaveDependent = (updatedDependent: any) => {
  //   const updatedDependents = employee.dependents ? [...employee.dependents, updatedDependent] : [updatedDependent]
  //   const updatedEmployee = { ...employee, dependents: updatedDependents }
  //   const updatedEmployees = employees?.map((employee: any) => {
  //     if (employee.id === updatedEmployee.id) {
  //       return updatedEmployee
  //     }
  //     return employee
  //   })
  //   dispatch(setEmployees(updatedEmployees))
  //   toggleModal()
  // }

  // const tabs = [
  //   {
  //     text: 'Details',
  //     onClick: () => handleTabClick('details'),
  //     isActive: activeTab === 'details'
  //   },
  //   {
  //     text: 'Dependents',
  //     onClick: () => handleTabClick('dependents'),
  //     isActive: activeTab === 'dependents'
  //   }
  // ]

  // const dependents = employee?.dependents || []


  return (
    <>
      <div className="flex gap-4 items-center mb-[20px]">
        <Image src={icons.arrowBackBg} alt="avatar" width={32} height={32} onClick={() => router.back()} className="cursor-pointer" />
        <h2 className="font-normal">{employee?.first_name} {employee?.last_name}</h2>
      </div>
      {/* <div className="flex items-center justify-between">
          <Tabs tabs={tabs} />
          <Button className="" text="Add Dependent" icon={icons.addLight} isPrimary isSmallBtn onClick={toggleModal} />
        </div> */}
      <EmployeeDetails employee={employee} />
      {/* <DependentAddModal isOpen={isModalOpen} onClose={toggleModal} onSave={handleSaveDependent} /> */}
    </>

  );
}

export default EmployeeDetailsContainer;