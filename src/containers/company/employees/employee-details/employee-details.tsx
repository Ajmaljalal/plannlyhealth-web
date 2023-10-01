import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { isObjectsEqual } from "@/lib/helpers";
import { updateEmployee } from "@/lib/services/employee";
import { Employee } from "@/lib/types/employee";
import { employeesSelector, setEmployees } from "@/store/company";
import { useDispatch, useSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { useState } from "react";


const EmployeeDetails = ({ employee }: any) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [employeeDetails, setEmployeeDetails] = useState<Employee>(employee)
  const allEmployees = useSelector(employeesSelector) || [];

  const handleUpdateEmployee = async (e: any) => {
    e.preventDefault();
    const address = { ...employeeDetails.address, country: 'USA' }
    employeeDetails.address = address
    const updateEmployeInDb = await updateEmployee(employeeDetails)
    const updatedEmployees = allEmployees.map((employee: any) => {
      if (employee.id === updateEmployeInDb.id) return { ...employee, ...updateEmployeInDb };
      return employee;
    });
    dispatch(setEmployees(updatedEmployees));
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    // If the input name includes a dot, it's referring to a nested property
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setEmployeeDetails((prevState: any) => ({
        ...prevState,
        [parent]: {
          ...prevState[parent],
          [child]: value
        }
      }));
    } else {
      setEmployeeDetails({
        ...employeeDetails,
        [name]: value
      });
    }
  };

  const isEdited = isObjectsEqual(employeeDetails, employee)

  return (
    <form className="" onChange={handleInputChange}>
      <div className="flex flex-col gap-2 mt-[32px]">
        <h4 className="font-normal">Personal Information</h4>
        <div className="flex gap-4 flex-wrap max-w-[1050px]">
          <Input name='first_name' label="First Name" value={employeeDetails?.first_name} className="flex-1 max-w-[340px] min-w-[300px]" />
          <Input name='last_name' label="Last Name" value={employeeDetails?.last_name} className="flex-1 max-w-[340px] min-w-[300px]" />
          <Input name='email' label="Email" value={employeeDetails?.email} className="flex-1 max-w-[340px] min-w-[300px]" />
          <Input name='phone' label="Phone" value={employeeDetails?.phone} className="flex-1 max-w-[340px] min-w-[300px]" />
          <Input name='marital_status' label="Marital Status" value={employeeDetails?.marital_status} className="flex-1 max-w-[340px] min-w-[300px]" />
          <Input name='date_of_birth' label="Date of Birth" value={employeeDetails?.birthday} className="flex-1 max-w-[340px] min-w-[300px]" />
          <Input name='gender' label="Gender" value={employeeDetails?.gender} className="flex-1 max-w-[340px] min-w-[300px]" />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-[32px] max-w-[1050px]">
        <h4 className="font-normal">Job</h4>
        <div className="flex gap-4 flex-wrap">
          <Input name='job_title' label="Job Title" value={employeeDetails?.job_title} className="flex-1 max-w-[340px] min-w-[300px]" />
          <Input name='department' label="Department" value={employeeDetails?.department} className="flex-1 max-w-[340px] min-w-[300px]" />
          <Input name='role' label="Role" value={employeeDetails?.role} className="flex-1 max-w-[340px] min-w-[300px]" />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-[32px] max-w-[1050px]">
        <h4 className="font-normal">Address</h4>
        <div className="flex gap-4 flex-wrap">
          <Input name='address.street' label="Street and unit/apt number" value={employeeDetails?.address?.street} className="flex-1 max-w-[340px] min-w-[300px]" />
          <Input name='address.city' label="City" value={employeeDetails?.address?.city} className="flex-1 max-w-[340px] min-w-[300px]" />
          <Input name='address.state' label="State" value={employeeDetails?.address?.state} className="flex-1 max-w-[340px] min-w-[300px]" />
          <Input name='address.zip' label="Zip code" value={employeeDetails?.address?.state} className="flex-1 max-w-[340px] min-w-[300px]" />
        </div>
      </div>
      <div className="mt-[32px] max-w-[1050px] flex justify-end gap-4">
        <Button className="mt-[32px] w-[150px]" text="Cancel" onClick={(e: any) => {
          e.preventDefault()
          return router.back()
        }} />
        <Button className="mt-[32px] w-[150px]" text="Save Changes" isPrimary disabled={isEdited} onClick={handleUpdateEmployee} />
      </div>
    </form>
  );
}

export default EmployeeDetails;