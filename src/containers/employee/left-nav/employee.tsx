
import { NavItem } from '@/components/left-nav/nav-item'
import { icons } from '@/lib/icons'

const EmployeeNav = () => {
  return (
    <div>
      <NavItem text='Rewards' href='/employee/rewards' icon={icons.dashboardLight} />
      <NavItem text='TODOs' href='/employee/todos' icon={icons.benefitsLight} />
      <NavItem text='Benefits' href='/employee/benefits' icon={icons.assessmentsLight} />
      <NavItem text='Card' href='/employee/card' icon={icons.incentivesLight} />
      <NavItem text='Profile' href='/employee/profile' icon={icons.employeesLight} />
    </div>
  )
}

export default EmployeeNav

