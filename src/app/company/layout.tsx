import Image from 'next/image';
import logo from '../../../public/logos/logo.svg'
import Navbar from '@/containers/shared/left-nav/company';
import { SignOut } from '@/components/signout';
import { Divider } from '@/components/divider';
import { NavItem } from '@/components/left-nav/nav-item';
import { icons } from '@/lib/icons';

export const metadata = {
  title: 'Plannly | wellbeing simplified',
  description: 'Plannly is a wellbeing app that helps you to plan your day, track your mood and sleep, and set goals to achieve your best self.',
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {

  return (
    <div className='w-full h-screen p-[16px] flex overflow-hidden'>
      <div className='hidden lg:flex flex-col min-w-[244px] h-full bg-basic_black text-basic_white px-[32px] p-[24px] rounded-[32px]'>
        <Image src={logo} alt='plannly logo' />
        <div className='w-full mt-[16px]'>
          <Navbar />
        </div>
        <div className='align-end mt-auto'>
          <Divider />
          <NavItem href='/company/settings' text='Settings' icon={icons.settingsLight} />
          <SignOut />
        </div>
      </div>
      <div className='overflow-auto w-[calc(100%)]'>
        <div className='lg:p-[32px]'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default RootLayout