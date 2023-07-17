'use client';
import { Table } from "@/components/table/table";
import { TableHead } from "@/components/table/table-head";
import Hero from "@/containers/shared/onboarding/hero";
import Dependent from "./dependent";

const tableHeaders = ['Name', 'Relation', 'Date of Birth', '']


const EmployeesDependents = ({ dependents, employeeId }: any) => {

  const renderNullState = () => {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center mt-[200px]">
        <Hero image="/illustrations/employee-upload.svg" title="No dependents yet!" description="Add your first dependent now." />
      </div>
    )
  }

  const renderEmpoyees = () => {
    return dependents?.map((dependent: any) => {
      return <Dependent
        key={dependent.name}
        dependent={dependent}
        employeeId={employeeId}
      />
    })
  }

  const renderEmployeesTable = () => {
    return (
      <Table className='overflow-scroll mt-[32px]'>
        <TableHead headers={tableHeaders} />
        <tbody>
          {renderEmpoyees()}
        </tbody>
      </Table>
    )
  }

  const renderUsersTable = () => {
    return (
      <div className="flex flex-col items-strech w-full">
        {renderEmployeesTable()}
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-between items-end w-full h-full relative overflow-hidden">
      {dependents.length ? renderUsersTable() : renderNullState()}
    </div>
  )
}

export default EmployeesDependents;