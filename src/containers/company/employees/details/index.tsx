'use client';
import { employeesSelector, setEmployees } from "@/store/company";
import { useDispatch, useSelector } from "@/store/store";
import { usePathname, useRouter } from "next/navigation";
import Image from 'next/image'
import { icons } from "@/lib/icons";
import Tabs from "@/components/tabs/tabs";
import { useState } from "react";
import EmployeeDetails from "./employee-details";
import EmployeesDependents from "./employee-dependents";
import { Button } from "@/components/button";
import { DependentAddModal } from "./add-dependent-modal";

const EmployeeDetailsContainer = () => {
  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState('details')
  const [isModalOpen, setIsModalOpen] = useState<any>(false)
  const pathname = usePathname()
  const router = useRouter()
  const id = pathname.split('/')[3]
  const employees: any = useSelector(employeesSelector)
  const employee: any = employees?.find((employee: any) => employee.id.toString() === id)

  if (!employee) {
    return (
      <div>
        <h2 className="font-normal">Employee not found</h2>
      </div>
    )
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }

  const handleSaveDependent = (updatedDependent: any) => {
    const updatedDependents = employee.dependents ? [...employee.dependents, updatedDependent] : [updatedDependent]
    const updatedEmployee = { ...employee, dependents: updatedDependents }
    const updatedEmployees = employees?.map((employee: any) => {
      if (employee.id === updatedEmployee.id) {
        return updatedEmployee
      }
      return employee
    })
    dispatch(setEmployees(updatedEmployees))
    toggleModal()
  }

  const tabs = [
    {
      text: 'Details',
      onClick: () => handleTabClick('details'),
      isActive: activeTab === 'details'
    },
    {
      text: 'Dependents',
      onClick: () => handleTabClick('dependents'),
      isActive: activeTab === 'dependents'
    }
  ]

  const dependents = employee?.dependents || []

  const tabContent = activeTab === 'details' ? <EmployeeDetails employee={employee} /> : <EmployeesDependents employeeId={employee.id} dependents={dependents} />


  return (
    <div className="">
      <div className="flex gap-4 items-center mb-[20px]">
        <Image src={icons.arrowBackBg} alt="avatar" width={32} height={32} onClick={() => router.back()} className="cursor-pointer" />
        <h2 className="font-normal">{employee?.first_name} {employee?.last_name}</h2>
      </div>
      <div className="flex items-center justify-between">
        <Tabs tabs={tabs} />
        <Button className="" text="Add Dependent" icon={icons.addLight} isPrimary isSmallBtn onClick={toggleModal} />
      </div>
      {tabContent}
      <DependentAddModal isOpen={isModalOpen} onClose={toggleModal} onSave={handleSaveDependent} />
    </div>

  );
}

export default EmployeeDetailsContainer;