
import { NavItem } from '@/components/left-nav/nav-item'
import { icons } from '@/lib/icons'

const CompanyNav = () => {
  return (
    <div>
      <NavItem text='Dashboard' href='/company/dashboard' icon={icons.dashboard} iconLight={icons.dashboardLight} />
      {/* <NavItem text='Benefits' href='/company/benefits' icon={icons.benefits} iconLight={icons.benefitsLight} /> */}
      <NavItem text='Assessments' href='/company/assessments' icon={icons.assessments} iconLight={icons.assessmentsLight} />
      <NavItem text='Incentives' href='/company/incentives' icon={icons.incentives} iconLight={icons.incentivesLight} />
      <NavItem text='Employees' href='/company/employees' icon={icons.employees} iconLight={icons.employeesLight} />
      <NavItem text='Reports' href='/company/reports' icon={icons.reports} iconLight={icons.reportsLight} />
      {/* <NavItem text='Integrations' href='/company/integrations' icon={icons.integrations} iconLight={icons.integrationsLight} /> */}
    </div>
  )
}

export default CompanyNav

