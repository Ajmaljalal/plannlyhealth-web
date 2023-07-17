import { icons } from "@/lib/icons";
import Image from "next/image";
import { useState } from "react";
import { DependentEditModal } from "./edit-dependent-modal";
import { useDispatch, useSelector } from "@/store/store";
import { employeesSelector, setEmployees } from "@/store/company";



const rowStyle = 'cursor-pointer border-t border-pLight hover:bg-transparent max-h-[54px] text-small text-basic_grey_1'


const Dependent = ({ dependent, employeeId }: { dependent: any, employeeId: any }) => {

  const dispatch = useDispatch()
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const allEmployees = useSelector(employeesSelector)

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen)
  }

  const handleEditDependent = (updatedDependent: any) => {
    const currentEmployee: any = allEmployees.find((employee: any) => employee.id === employeeId)
    const updatedDependents = currentEmployee.dependents.map((dependent: any) => {
      if (dependent.id === updatedDependent.id) {
        return updatedDependent
      }
      return dependent
    })
    const updatedEmployee = { ...currentEmployee, dependents: updatedDependents }
    const updatedEmployees = allEmployees.map((employee: any) => {
      if (employee.id === updatedEmployee.id) {
        return updatedEmployee
      }
      return employee
    })
    dispatch(setEmployees(updatedEmployees))
    toggleEditModal()
  }

  const handleDeleteDependent = () => {
    const currentEmployee: any = allEmployees.find((employee: any) => employee.id === employeeId)
    const updatedDependents = currentEmployee.dependents.filter((currentDependent: any) => currentDependent.id !== dependent.id)
    const updatedEmployee = { ...currentEmployee, dependents: updatedDependents }
    const updatedEmployees = allEmployees.map((employee: any) => {
      if (employee.id === updatedEmployee.id) {
        return updatedEmployee
      }
      return employee
    }
    )
    dispatch(setEmployees(updatedEmployees))
  }

  const renderActionBtns = () => {
    return (
      <>
        <Image src={icons.edit} width={30} height={30} alt="edit icon" className="cursor-pointer" onClick={toggleEditModal} />
        <Image src={icons.delete} width={30} height={30} alt="edit icon" className="cursor-pointer" onClick={handleDeleteDependent} />
      </>
    )

  }

  return (
    <>
      <tr key={dependent.id} className={rowStyle}>
        <td className="pl-[32px]">{dependent.name}</td>
        <td className=''>{dependent.relation}</td>
        <td className=''>{dependent.date_of_birth}</td>
        {
          <td className='w-[100%] h-[100%] flex items-center justify-end gap-2 self-auto pr-[32px] mt-auto'>
            {renderActionBtns()}
          </td>
        }
      </tr>
      <DependentEditModal isOpen={isEditModalOpen} onClose={toggleEditModal} onSave={handleEditDependent} dependent={dependent} />
    </>
  );
}

export default Dependent;