'use client'
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Dropdown from "@/components/searchable-select";
import { Table } from "@/components/table/table";
import { TableHead } from "@/components/table/table-head";
import Hero from "@/containers/onboarding/company/hero";
import { formatDate } from "@/lib/helpers";
import { useState } from "react";

const tableHeaders = ['Name', 'Type', 'Date Created', '']

const reportTypes = [
  { value: 'stress_level_report', label: 'Stress Level Report' },
  { value: 'workload_report', label: 'Workload Report ' },
  { value: 'life_events_report', label: 'Life Events Report' },
  { value: 'burnout_report', label: 'Burnout Report' },
  { value: 'benefit_utilization_report', label: 'Benefit Utilization Report' },
  { value: 'feedback_report', label: 'Feedback Report' },
  // { value: 'human_error_report', label: 'Human Error Report' },
];

const departments = [
  { value: 'all', label: 'All' },
  { value: 'cardiology', label: 'Cardiology' },
  { value: 'surgery', label: 'Surgery' },
  { value: 'emergency_department', label: 'Emergency Department' },
  { value: 'neurology', label: 'Neurology' },
  { value: 'pediatrics', label: 'Pediatrics' },
];

const reports = [
  {
    tite: 'Burnout Report',
    description: 'This report shows the burnout of employees in the company',
    date: '2021-04-01',
    department: 'Emergency Department',
    type: 'Burnout Report'
  },
  {
    tite: 'Stress Level Report',
    description: 'This report shows the stress levels of employees in the company',
    date: '2023-10-01',
    department: 'Emergency Department',
    type: 'Stress Level Report'
  },
  {
    tite: 'Workload Report',
    description: 'This report shows the workload of employees in the company',
    date: '2022-02-01',
    department: 'Emergency Department',
    type: 'Workload Report'
  },
  {
    tite: 'Life Events Report',
    description: 'This report shows the life events of employees in the company',
    date: '2021-03-01',
    department: 'Emergency Department',
    type: 'Life Events Report'
  },
  {
    tite: 'Benefit Utilization Report',
    description: 'This report shows the benefit utilization of employees in the company',
    date: '2021-06-01',
    department: 'Emergency Department',
    type: 'Benefit Utilization Report'
  },
  {
    tite: "Employees's Feedback Report",
    description: 'This report shows the feedback of employees in the company',
    date: '2021-06-21',
    department: 'Emergency Department',
    type: 'Feedback Report'
  },
  // {
  //   tite: 'Human Error Report',
  //   description: 'This report shows the human error of employees in the company',
  //   date: '2020-1-12',
  //   department: 'Emergency Department',
  //   type: 'Human Error Report'
  // }
]


const ReportsContainer = () => {
  const [type, setType] = useState('')
  const [department, setDepartment] = useState('')
  const [dateRange, setDateRange] = useState('')

  const handleDateRangeChange = (e: any) => {
    const value = e.value
    setDateRange(value)
  }

  const handleReportTypeChange = (e: { label: string, value: string }) => {
    const value = e.value
    setType(value)
  }

  const handleDepartmentChange = (e: { label: string, value: string }) => {
    const value = e.value
    setDepartment(value)
  }


  const renderNullState = () => {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center mt-[200px]">
        <Hero image="/illustrations/reports.svg" title="Nothing here yet" description="Select the type of report you want to generate from the aptions above!" />
      </div>
    )
  }

  const renderReports = () => {
    if (!reports.length) return renderNullState()
    const rowStyle = 'cursor-pointer border-t hover:bg-transparent h-[60px] text-small text-basic_grey_1'
    return (
      <Table className='mt-[48px]'>
        <TableHead headers={tableHeaders} />
        <tbody>
          {reports.map((report, index) => (
            <tr key={index} className={rowStyle}>
              <td className="pl-[32px]">{report.tite}</td>
              <td className="">{report.type}</td>
              <td className="">{formatDate(report.date)}</td>
              <td className="">
                <div className="flex items-center justify-end">
                  <Button text="View" className="mr-[16px]" isSmallBtn disabled={report.type !== 'Burnout Report'} />
                  <Button text='Copy Link' className='mr-[16px]' isSmallBtn disabled={report.type !== 'Burnout Report'} />
                  <Button text="Download PDF" className="mr-[16px]" isSmallBtn isPrimary disabled={report.type !== 'Burnout Report'} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }


  return (
    <div>
      <h2 className="font-normal mb-[20px]">Reports</h2>
      <div className="flex items-center justify-between h-[138px] rounded-[32px] bg-brand_voilet/[0.13] px-[40px]">
        <div className="flex gap-6 items-center flex-1">
          <Dropdown
            value={type}
            options={reportTypes}
            onChange={handleReportTypeChange}
            isSearchable={true}
            placeholder='Type'
            className="flex-1 max-w-[250px]"
          />
          <Input type="month" name={"start"} value={""} className="flex-1 max-w-[250px] cursor-pointer" inputClassName="bg-basic_white h-[42px] mb-[2px]" />
          <Input type="month" name={"end"} value={""} className="flex-1 max-w-[250px] cursor-pointer" inputClassName="bg-basic_white h-[42px] mb-[2px]" />
          {/* <Dropdown
            value={department}
            options={departments}
            onChange={handleDepartmentChange}
            isSearchable={true}
            placeholder='Department'
            className="flex-1 max-w-[250px]"
          /> */}
        </div>
        <Button text="Generate Report" isPrimary className="w-[250px]" />
      </div>
      {renderReports()}
    </div>
  );
}

export default ReportsContainer;