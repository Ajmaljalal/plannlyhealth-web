import Image from 'next/image';
import logo from '../../../public/logos/plannly-logo-white-horizontal.png'
import Navbar from '@/containers/company/left-nav/company';
import { SignOut } from '@/components/signout';
import { Divider } from '@/components/divider';
import { NavItem } from '@/components/left-nav/nav-item';
import { icons } from '@/lib/icons';
import { Header } from '@/components/header';

export const metadata = {
  title: 'Plannly Health',
  description: 'Plannly Health is dedicated to mitigating the risk of human errors in hospitals, by offering a digital health solution that addresses provider stress, burnout, and critical life events or changes.',
}

const rootContainerStyles = `w-full h-screen p-[16px] flex bg-basic_white overflow-auto relative`
const navContainerStyles = `sticky top-0 left-0 hidden lg:flex flex-col gap-8 min-w-[200px] h-full bg-basic_black text-basic_white px-[16px] py-[24px] rounded-[32px]`

const RootLayout = async ({ children }: { children: React.ReactNode }) => {

  return (
    <div className={rootContainerStyles}>
      <div className={navContainerStyles}>
        <div className='w-full flex items-center justify-center'>
          <Image src={logo} width={150} height={32} alt='plannly logo' className='mt-[6px]' />
        </div>
        <Navbar />
        <div className='align-end mt-auto'>
          <Divider />
          <NavItem href='/company/settings' text='Settings' icon={icons.settings} iconLight={icons.settingsLight} />
          <SignOut />
        </div>
      </div>
      <div className='w-full'>
        <Header />
        <div className='pb-[32px] lg:p-[32px] lg:pt-[0px] max-w-[1440px] h-fit mx-auto'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default RootLayout