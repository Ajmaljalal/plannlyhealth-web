import { icons } from "@/lib/icons";
import Image from "next/image";
import { EmployeeEditModal } from "./edit-employee-modal";
import { useState } from "react";
import { Button } from "@/components/button";

const roleIcons: any = {
  admin: icons.admin,
  'super admin': icons.superAdmin,
  owner: icons.owner,
  broker: icons.broker,
  it: icons.it,
  finance: icons.finance,
  standard: icons.standard,
}
const roleColors: any = {
  admin: {
    bg: 'bg-pink_light',
    text: 'text-pink',
  },
  'super admin': {
    bg: 'bg-basic_grey_4',
    text: 'text-basic_black'
  },
  owner: {
    bg: 'bg-blue_light',
    text: 'text-blue',
  },
  broker: {
    bg: 'bg-basic_grey_4',
    text: 'text-basic_grey_2'
  },
  it: {
    bg: 'bg-orange_light',
    text: 'text-orange',
  },
  finance: {
    bg: 'bg-system_success_light',
    text: 'text-system_success',
  },
  standard: {
    bg: 'bg-purple_light',
    text: 'text-purple'
  },
}



const rowStyle = 'cursor-pointer border-t border-pLight hover:bg-transparent h-[60px] text-small text-basic_grey_1'
const Employee = ({ employee, onUpdateEmployee, onDeleteEmployee, onActivateEmployee, onClick }: { onClick?: () => void, employee: any, onUpdateEmployee: (updatedEmployee: any) => void, onDeleteEmployee: (id: any) => void, onActivateEmployee?: (id: any) => void }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const userName = employee.first_name + ' ' + employee.last_name
  const roleStyle = roleColors[employee.role.toLowerCase()]
  const roleClass = `${roleStyle.bg} ${roleStyle.text} px-[12px] py-[4px] rounded-[24px] flex items-center w-fit h-[32px] text-small`

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen)
  }

  const handleUpdateEmployee = (updatedEmployee: any) => {
    onUpdateEmployee(updatedEmployee)
    toggleEditModal()
  }

  const handleDeleteEmployee = () => {
    onDeleteEmployee(employee.id)
  }

  const handleActivateEmployee = () => {
    onActivateEmployee && onActivateEmployee(employee.id)
  }

  const renderActionBtns = () => {
    if (employee.inactive) {
      return (
        <Button text="Activate" isSmallBtn isPrimary icon={icons.addLight} onClick={handleActivateEmployee} />
      )
    } else {
      return (
        <>
          <Image src={icons.edit} width={30} height={30} alt="edit icon" className="cursor-pointer" onClick={toggleEditModal} />
          <Image src={icons.delete} width={30} height={30} alt="edit icon" className="cursor-pointer" onClick={handleDeleteEmployee} />
        </>
      )
    }
  }

  return (
    <tr key={employee.id} className={rowStyle}>
      <td className="pl-[32px]" onClick={onClick}>{userName}</td>
      <td className='' onClick={onClick}>{employee.job_title}</td>
      <td className='' onClick={onClick}>{employee.email}</td>
      <td className="" onClick={onClick}>
        <span className={roleClass}>
          <Image src={roleIcons[employee.role.toLowerCase()]} width={24} height={24} alt="admin icon" className="inline-block mr-[5px]" />
          {employee.role}
        </span>
      </td>
      {
        <td className='w-[100%] h-[100%] flex items-center justify-end gap-2 self-auto pr-[32px] pt-[15px]'>
          {renderActionBtns()}
        </td>
      }
      <EmployeeEditModal isOpen={isEditModalOpen} employee={employee} onClose={toggleEditModal} onSave={handleUpdateEmployee} />
    </tr>
  );
}

export default Employee;