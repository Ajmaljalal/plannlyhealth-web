import '../globals.css'
import { Lato } from '@next/font/google';
import Image from 'next/image';
import logo from '../../public/logos/logo.svg'
import { icons } from '@/lib/icons';
import { NavItem } from '@/components/left-nav/nav-item';

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
})
export const metadata = {
  title: 'Plannly | wellbeing simplified',
  description: 'Plannly is a wellbeing app that helps you to plan your day, track your mood and sleep, and set goals to achieve your best self.',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div className='w-full h-full flex'>
          <div className='hidden lg:flex flex-col min-w-[240px] h-screen bg-pDark px-[32px] p-[24px]'>
            <Image src={logo} alt='plannly logo' />
            <div className='w-full mt-[16px]'>
              <h1 className='text-pWhite mb-[16px]'>Member</h1>
              <NavItem text='My Benefits' href='/my-benefits' icon={icons.myBenefits} />
              <NavItem text='Marketplace' href='/marketplace' icon={icons.marketPlace} />
              <NavItem text='My Claims' href='/my-claims' icon={icons.claims} />
              <NavItem text='My Card' href='/my-cards' icon={icons.card} />
              <NavItem text='My Account' href='/my-account' icon={icons.account} />
              <NavItem text='Wellness Policy' href='/wellness-policy' icon={icons.policy} />
            </div>
            <div className='w-full h-[1px] mt-[4px] bg-pDarkGray' />
            <div className='w-full mt-[16px]'>
              <h1 className='text-pWhite mb-[16px]'>Admin</h1>
              <NavItem text='Dashboard' href='/dashboard' icon={icons.dashboard} />
              <NavItem text='Benefit Programs' href='/benefit-programs' icon={icons.programs} />
              <NavItem text='Assessments' href='/assessments' icon={icons.survey} />
              <NavItem text='All Claims' href='/all-claims' icon={icons.claims} />
              <NavItem text='All Transactions' href='/all-transactions' icon={icons.claims} />
              <NavItem text='Payouts' href='/payouts' icon={icons.payouts} />
              <NavItem text='Users' href='/users' icon={icons.users} />
              <NavItem text='Bank Account' href='/bank-account' icon={icons.bankAcc} />
              <NavItem text='Settings' href='/settings' icon={icons.settings} />
            </div>
            <div className='w-full h-[1px] mt-[4px] bg-pDarkGray' />
          </div>
          <div style={{ minWidth: 'calc(100% - 240px)' }}>
            <div className='w-full h-[80px] bg-pWhite'>Header</div>
            <div className='lg:p-[32px]'>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html >
  )
}

export default RootLayout