
import { NavItem } from '@/components/left-nav/nav-item'
import { icons } from '@/lib/icons'

const CompanyNav = () => {
  return (
    <div>
      <NavItem text='Dashboard' href='/company/dashboard' icon={icons.dashboardLight} />
      <NavItem text='Benefits' href='/company/benefits' icon={icons.benefitsLight} />
      <NavItem text='Assessments' href='/company/assessments' icon={icons.assessmentsLight} />
      <NavItem text='Incentives' href='/company/incentives' icon={icons.incentivesLight} />
      <NavItem text='Employees' href='/company/employees' icon={icons.employeesLight} />
      <NavItem text='Reports' href='/company/reports' icon={icons.reportsLight} />
      <NavItem text='Integrations' href='/company/integrations' icon={icons.incentivesLight} />
    </div>
  )
}

export default CompanyNav

