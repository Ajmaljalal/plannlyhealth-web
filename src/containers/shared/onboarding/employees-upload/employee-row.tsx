import { icons } from "@/lib/icons";
import Image from "next/image";

const rowStyle = 'px-[32px] table-row cursor-pointer border-t border-pLight hover:bg-transparent'
const Employee = ({ employee }: { employee: any }) => {
  const userName = employee.first_name + ' ' + employee.last_name
  return (
    <tr key={employee.id} className={rowStyle}>
      <td>{userName}</td>
      <td className='w-1/3'>{employee.job_title}</td>
      <td className=''>{employee.email}</td>
      <td className="">{employee.role}</td>
      <td className='w-[full] flex items-center justify-end gap-2 self-auto'>
        <Image src={icons.edit} width={24} height={24} alt="edit icon" onClick={() => console.log('employee edit')} className="cursor-pointer" />
        <Image src={icons.delete} width={24} height={24} alt="edit icon" onClick={() => console.log('employee delete')} className="cursor-pointer" />
      </td>
    </tr>
  );
}

export default Employee;