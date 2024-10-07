import { NavItem } from '@/components/left-nav/nav-item'
import { icons } from '@/lib/icons'

const MobileNav = () => {
  return (
    <div className='lg:hidden absolute bottom-0 px-[12px] pb-3 right-0 flex gap-4 items-center justify-evenly w-full bg-basic_black'>
      <NavItem href='/employee/rewards' icon={icons.rewards} text={''} iconLight={icons.rewardsLight} />
      <NavItem href='/employee/todos' icon={icons.todo} text={''} iconLight={icons.todoLight} />
    </div>
  )
}

export default MobileNav