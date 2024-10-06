import { Button } from "@/components/button";
import { calculateWidthTailwindClass, formatDate } from "@/lib/helpers";

const containerStyle = 'flex flex-col flex-1 rounded-[32px] bg-basic_grey_5 px-[32px] py-[24px]';

const tableData = [
  {
    name: 'Emergency Department',
    qualifiedLifeEvent: 'Registered Nurses',
    enrollmentProgress: 56,
    deadline: '2023-12-01'
  },
  {
    name: 'Emergency Department',
    qualifiedLifeEvent: 'Physicians',
    enrollmentProgress: 45,
    deadline: '2023-10-01'
  },
  {
    name: 'ICU Department',
    qualifiedLifeEvent: 'Registered Nurses',
    enrollmentProgress: 40,
    deadline: '2023-11-01'
  },
  {
    name: 'ICU Department',
    qualifiedLifeEvent: 'Physicians',
    enrollmentProgress: 32,
    deadline: '2023-05-01'
  }
];

const BenefitEnrollmentProgress = () => {

  const renderTableData = () => {
    return tableData.map((data, index) => {
      const progress = calculateWidthTailwindClass(data.enrollmentProgress);
      const progressStyle = `inline-flex w-[600px] h-[12px] rounded-[12px] bg-basic_grey_3/[0.22]`;
      const progressInnerStyle = `inline-block h-[12px] rounded-[10px] ${progress} bg-system_error`;
      return (
        <tr className="border-none py-[12px] text-[14px] font-medium hover:bg-basic_grey_5" key={index}>
          <td className="p-0">{data.name}</td>
          <td className="p-0">{data.qualifiedLifeEvent}</td>
          <td className="p-0">
            <span className="mr-[8px]">{data.enrollmentProgress}%</span>
            <span className={progressStyle}>
              <span className={progressInnerStyle} />
            </span>
          </td>
          {/* <td className="p-0 w-[200px]">{formatDate(data.deadline)}</td> */}
        </tr>
      )
    })
  }


  return (
    <div className={containerStyle}>
      {/* <h3 className="font-medium mb-[40px]">Benefits Enrollment Progress</h3> */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="w-1/4 p-0">Departments</th>
              <th className="w-1/4 p-0">Profession</th>
              {/* <th className="w-2/5 p-0">Enrollment progress</th> */}
              {/* <th className="w-[200px] p-0">Deadline</th> */}
            </tr>
          </thead>
          <tbody>
            {renderTableData()}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end flex-1 pt-[30px]">
        <Button className="w-fit flex-end" isPrimary text="View All" />
      </div>
    </div>
  );
}

export default BenefitEnrollmentProgress;