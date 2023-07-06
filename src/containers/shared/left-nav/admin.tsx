
import { NavItem } from '@/components/left-nav/nav-item'
import { icons } from '@/lib/icons'

const AdminNav = () => {
  return (
    <div>
      <NavItem text='Dashboard' href='/dashboard' icon={icons.add} />
      <NavItem text='Benefit Programs' href='/benefit-programs' icon={icons.add} />
      <NavItem text='Assessments' href='/assessments' icon={icons.add} />
      <NavItem text='All Claims' href='/all-claims' icon={icons.add} />
      <NavItem text='All Transactions' href='/all-transactions' icon={icons.add} />
      <NavItem text='Payouts' href='/payouts' icon={icons.add} />
      <NavItem text='Users' href='/users' icon={icons.add} />
      <NavItem text='Bank Account' href='/bank-account' icon={icons.add} />
      <NavItem text='Subscription' href='/subscription' icon={icons.add} />
      <NavItem text='Back Office' href='/back-office' icon={icons.add} />
      <NavItem text='Companies' href='/companies' icon={icons.add} />
      <NavItem text='Card Categories' href='/card-categories' icon={icons.add} />
      <NavItem text='Notifications' href='/notifications' icon={icons.add} />
      <NavItem text='Settings' href='/settings' icon={icons.add} />
    </div>
  )
}

export default AdminNav

