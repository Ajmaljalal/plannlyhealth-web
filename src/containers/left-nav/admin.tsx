
import { NavItem } from '@/components/left-nav/nav-item'
import { icons } from '@/lib/icons'

const AdminNav = () => {
  return (
    <div>
      <NavItem text='Dashboard' href='/dashboard' icon={icons.dashboard} />
      <NavItem text='Benefit Programs' href='/benefit-programs' icon={icons.programs} />
      <NavItem text='Assessments' href='/assessments' icon={icons.survey} />
      <NavItem text='All Claims' href='/all-claims' icon={icons.claims} />
      <NavItem text='All Transactions' href='/all-transactions' icon={icons.claims} />
      <NavItem text='Payouts' href='/payouts' icon={icons.payouts} />
      <NavItem text='Users' href='/users' icon={icons.users} />
      <NavItem text='Bank Account' href='/bank-account' icon={icons.bankAcc} />
      {/* <NavItem text='Settings' href='/settings' icon={icons.settings} /> */}
    </div>
  )
}

export default AdminNav

