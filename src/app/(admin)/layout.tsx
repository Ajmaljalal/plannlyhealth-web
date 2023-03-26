import Image from 'next/image';
import logo from '../../../public/logos/logo.svg'
import AdminNav from '@/containers/left-nav/admin';
import { Header } from '@/containers/header';

export const metadata = {
  title: 'Plannly | wellbeing simplified',
  description: 'Plannly is a wellbeing app that helps you to plan your day, track your mood and sleep, and set goals to achieve your best self.',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full h-full flex overflow-hidden'>
      <div className='hidden lg:flex flex-col min-w-[240px] h-screen bg-pDark px-[32px] p-[24px]'>
        <Image src={logo} alt='plannly logo' />
        <div className='w-full mt-[16px]'>
          <p className='text-pWhite mb-[16px] font-bold'>Admin</p>
          <AdminNav />
        </div>
        <div className='w-full h-[1px] mt-[4px] bg-pDarkGray' />
      </div>
      <div className='overflow-auto w-[calc(100%)]'>
        {/* <div className='overflow-auto' style={{ minWidth: 'calc(100% - 240px)' }}> */}
        <Header />
        <div className='lg:p-[32px]'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default RootLayout