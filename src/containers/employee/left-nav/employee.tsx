
import { NavItem } from '@/components/left-nav/nav-item'
import { icons } from '@/lib/icons'

const EmployeeNav = () => {
  return (
    <div>
      <NavItem text='Rewards' href='/employee/rewards' iconLight={icons.rewardsLight} icon={icons.rewards} />
      <NavItem text='To-Do' href='/employee/todos' iconLight={icons.todoLight} icon={icons.todo} />
      {/* <NavItem text='Benefits' href='/employee/benefits' iconLight={icons.benefitsLight} icon={icons.benefits} /> */}
      {/* <NavItem text='Card' href='/employee/card' iconLight={icons.cardLight} icon={icons.card} />
      <NavItem text='Profile' href='/employee/profile' iconLight={icons.profileLight} icon={icons.profile} /> */}
    </div>
  )
}

export default EmployeeNav

