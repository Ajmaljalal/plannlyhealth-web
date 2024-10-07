
import { NavItem } from '@/components/left-nav/nav-item'
import { icons } from '@/lib/icons'

const WebNav = () => {
  return (
    <div>
      <NavItem text='Rewards' href='/employee/rewards' iconLight={icons.rewardsLight} icon={icons.rewards} />
      <NavItem text='To-Do' href='/employee/todos' iconLight={icons.todoLight} icon={icons.todo} />
    </div>
  )
}

export default WebNav