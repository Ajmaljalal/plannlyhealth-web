import Image from 'next/image';
import logo from '../../../public/logos/logo.svg'
import Navbar from '@/containers/shared/left-nav/company';
import { SignOut } from '@/components/signout';
import { Divider } from '@/components/divider';
import { NavItem } from '@/components/left-nav/nav-item';
import { icons } from '@/lib/icons';

export const metadata = {
  title: 'Plannly Health',
  description: 'Plannly Health is a wellbeing app that helps you to plan your day, track your mood and sleep, and set goals to achieve your best self.',
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {

  return (
    <div className='w-full h-screen p-[16px] flex overflow-hidden bg-basic_white'>
      <div className='hidden lg:flex flex-col min-w-[200px] h-full bg-basic_black text-basic_white px-[32px] py-[24px] px-[20px] rounded-[32px]'>
        <Image src={logo} alt='plannly logo' className='mt-[16px]' />
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
        <div className='flex justify-end items-center ml-[50px] gap-4'>
          <Image src={icons.notifications} alt='plannly logo' />
          <Image src={icons.lightMode} alt='plannly logo' />
          <div className='flex justify-center items-center w-[40px] h-[40px] rounded-[50%] bg-purple big-text text-basic_white'>
            A
          </div>
        </div>
        <div className='lg:p-[32px] lg:pt-[0px] max-w-[1600px] h-[calc(100%-40px)] mx-auto'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default RootLayout