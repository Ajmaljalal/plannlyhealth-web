import { Input } from "@/components/input";

const EmployeeDetails = ({ employee }: any) => {


  return (
    <div>
      <div className="flex flex-col gap-2 mt-[32px]">
        <h4 className="font-normal">Personal Information</h4>
        <div className="flex gap-4 flex-wrap">
          <Input name='first_name' label="First Name" value={employee?.first_name} className="flex-1 max-w-[340px] min-w-[300px]" />
          <Input name='last_name' label="Last Name" value={employee?.last_name} className="flex-1 max-w-[340px] min-w-[300px]" />
          <Input name='email' label="Email" value={employee?.email} className="flex-1 max-w-[340px] min-w-[300px]" />
          <Input name='phone' label="Phone" value={employee?.phone} className="flex-1 max-w-[340px] min-w-[300px]" />
          <Input name='marital_status' label="Marital Status" value={employee?.marital_status} className="flex-1 max-w-[340px] min-w-[300px]" />
          <Input name='date_of_birth' label="Date of Birth" value={employee?.date_of_birth} className="flex-1 max-w-[340px] min-w-[300px]" />
          <Input name='gender' label="Gender" value={employee?.gender} className="flex-1 max-w-[340px] min-w-[300px]" />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-[32px]">
        <h4 className="font-normal">Identification Numbers</h4>
        <div className="flex gap-4 flex-wrap">
          <Input name='ssn' label="SSN" value={employee?.ssn} type="password" className="flex-1 max-w-[340px] min-w-[300px]" />
          <Input name='suport_id' label="Support UID" value={employee?.support_id} type="password" className="flex-1 max-w-[340px] min-w-[300px]" />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-[32px]">
        <h4 className="font-normal">Job</h4>
        <div className="flex gap-4 flex-wrap">
          <Input name='job_title' label="Job Title" value={employee?.job_title} className="flex-1 max-w-[340px] min-w-[300px]" />
          <Input name='department' label="Department" value={employee?.department} className="flex-1 max-w-[340px] min-w-[300px]" />
          <Input name='location' label="Location" value={employee?.location} className="flex-1 max-w-[340px] min-w-[300px]" />
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;