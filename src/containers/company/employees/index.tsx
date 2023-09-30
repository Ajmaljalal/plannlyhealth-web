'use client';
import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@/components/button";
import { FileUpload } from "@/components/file-upload";
import Employee from "@/containers/onboarding/company/employees-upload/employee-row";
import Hero from "@/containers/onboarding/company/hero";
import { EmployeeAddModal } from "@/components/add-employee-modal";
import Tabs from "@/components/tabs/tabs";

import { icons } from "@/lib/icons";
import { fetcher } from "@/lib/helpers";
import { createBulkNewUserInvite, createNewUserInvite } from "@/lib/services/invite-users";
import { GET_EMPLOYEE_BY_COMPANY, GET_NEW_USERS_BY_COMPANY } from "@/lib/helpers/api-urls";

import { employeesSelector, selectCompanyDetails, setCurrentEmployee, setEmployees } from "@/store/company";
import { Table } from "@/components/table/table";
import { TableHead } from "@/components/table/table-head";
import { useRouter } from "next/navigation";
import { updateEmployee } from "@/lib/services/employee";
import { Status } from "@/lib/types/employee";
import { csvToObject } from "@/lib/helpers/csv-helpers";

// const employees: Employee[] = Array.from({ length: 20 }, (_, i) => generateRandomEmployee(i + 1));

const EmployeesListContainer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const company: any = useSelector(selectCompanyDetails);
  const allEmployees = useSelector(employeesSelector) || [];
  const companyId = company?.id;

  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('active');

  const { data: employeesFromAPI } = useSWR(companyId ? `${GET_EMPLOYEE_BY_COMPANY}/${companyId}` : null, fetcher);
  const { data: invitedUsers } = useSWR(companyId ? `${GET_NEW_USERS_BY_COMPANY}/${companyId}` : null, fetcher);

  const activeEmployees = allEmployees.filter((employee: any) => employee.status === Status.Active);
  const inactiveEmployees = allEmployees.filter((employee: any) => employee.status === Status.Inactive);
  const invitedEmployees = allEmployees.filter((employee: any) => employee.status === Status.Invited);

  // Create a set of existing employee IDs for quick lookup
  const employeeIdsSet = new Set(allEmployees.map((employee: any) => employee.id));

  useEffect(() => {

    // filter out employees that are already in the store
    const filterNewEmployees = (source: any[]) => source.filter(emp => !employeeIdsSet.has(emp.id));

    // Filter employeesFromAPI and invitedUsers
    const newEmployeesFromAPI: any = employeesFromAPI ? filterNewEmployees(employeesFromAPI) : [];
    const newInvitedUsers: any = invitedUsers ? filterNewEmployees(invitedUsers) : [];

    // Only update the store if there are new employees
    if (newEmployeesFromAPI.length > 0 || newInvitedUsers.length > 0) {
      // Here we're creating a new array only if necessary
      dispatch(setEmployees(allEmployees.concat(newEmployeesFromAPI, newInvitedUsers)));
    }

    setIsLoading(false);
  }, [invitedUsers, employeesFromAPI]);


  // Handlers
  const handleTabClick = (tab: string) => setActiveTab(tab.toLowerCase());
  const toggleModal = () => setIsModalOpen(prevState => !prevState);

  const handleAddEmployee = async (newEmployee: any) => {
    await createNewUserInvite(newEmployee);
    dispatch(setEmployees([newEmployee, ...allEmployees]));
  }

  const handleUpdateEmployee = async (updatedEmployee: any) => {
    const updateEmployeInDb = await updateEmployee(updatedEmployee)
    const updatedEmployees = allEmployees.map((employee: any) => {
      if (employee.id === updateEmployeInDb.id) return updateEmployeInDb;
      return employee;
    });
    dispatch(setEmployees(updatedEmployees));
  };

  const handleUploadEmployees = async (file: any) => {
    const usersFromFile = await csvToObject(file)
    const newUsers = await createBulkNewUserInvite(usersFromFile, companyId)
    mutate(`${GET_NEW_USERS_BY_COMPANY}/${companyId}`);
    dispatch(setEmployees(employeesFromAPI));
  }

  const handleRowClick = (employee: any) => {
    dispatch(setCurrentEmployee(employee))
    router.push(`/company/employees/${employee.id}?status=${employee.status}&org_id=${employee.company_id}`);
  }


  // Render methods
  const renderEmpoyees = () => {
    const currentEmployees = getCurrentEmployees();
    return currentEmployees.map((employee: any) => (
      <Employee
        key={employee.id}
        employee={employee}
        onUpdateEmployee={updatedEmployee => handleUpdateEmployee(updatedEmployee)}
        onDeleteEmployee={updatedEmployee => handleUpdateEmployee({ ...updatedEmployee, status: Status.Inactive })}
        onActivateEmployee={updatedEmployee => handleUpdateEmployee({ ...updatedEmployee, status: Status.Active })}
        onClick={() => handleRowClick(employee)}
      />
    ));
  }

  const getCurrentEmployees = () => {
    switch (activeTab) {
      case 'active': return activeEmployees;
      case 'inactive': return inactiveEmployees;
      case 'invited': return invitedEmployees;
      default: return [];
    }
  }

  const renderEmployeesTable = () => {
    const currentEmployees = getCurrentEmployees();
    if (!currentEmployees.length) return getNullState();

    return (
      <Table className='overflow-hidden mt-[32px]'>
        <TableHead headers={['Name', 'Job Title', 'Email', 'Role', 'Status', '']} />
        <tbody>
          {renderEmpoyees()}
        </tbody>
      </Table>
    );
  }

  const getNullState = () => {
    const image = "/illustrations/employee-upload.svg";
    if (activeTab === 'inactive') {
      return (
        <div className="mt-[150px]">
          <Hero image={image} title="No Inactive Employees" description="You have no inactive employees" />
        </div>
      )
    }
    const description = activeTab === 'active' ? 'No active employees, please add employees now' : 'No invited employees, please invite employees now';
    return (
      <div className="mt-[150px]">
        <Hero image={image} title="No Employees" description={description} />
      </div>
    )
  }

  const renderContent = () => {
    const tabs = [
      { text: 'Active', count: activeEmployees.length, isActive: activeTab === 'active', onClick: () => handleTabClick('active') },
      { text: 'Invited', count: invitedEmployees.length, isActive: activeTab === 'invited', onClick: () => handleTabClick('invited') },
      { text: 'Inactive', count: inactiveEmployees.length, isActive: activeTab === 'inactive', onClick: () => handleTabClick('inactive') }
    ];

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
        {allEmployees.length ? renderEmployeesTable() : getNullState()}
      </div>
    );
  }

  if (isLoading && !allEmployees.length) {
    return (
      <div className="mt-[150px]">
        <Hero image="/illustrations/employee-upload.svg" title="Loading..." description="Please wait while we fetch your employees" />
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-between items-center w-full relative overflow-hidden">
      {renderContent()}
      <EmployeeAddModal isOpen={isModalOpen} onClose={toggleModal} onSave={handleAddEmployee} />
    </div>
  );
}

export default EmployeesListContainer;