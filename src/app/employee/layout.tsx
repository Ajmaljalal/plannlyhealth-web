import Image from 'next/image';
import logo from '../../../public/logos/logo-white-full-v2.svg'
import Navbar from '@/containers/employee/left-nav/employee';
import { SignOut } from '@/components/signout';
import { icons } from '@/lib/icons';

export const metadata = {
  title: 'Plannly Health',
  description: 'Plannly Health is dedicated to mitigating the risk of human errors in hospitals, by offering a digital health solution that addresses provider stress, burnout, and critical life events or changes.',
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {

  return (
    <div className='w-full h-screen p-[16px] flex bg-basic_white'>
      <div className='hidden lg:flex flex-col min-w-[200px] h-full bg-basic_black text-basic_white px-[16px] py-[24px] rounded-[32px]'>
        <Image src={logo} width={150} height={53} alt='plannly logo' className='ml-[-6px] mt-[6px] w-[140px] h-[50px]' />
        <div className='w-full mt-[30px]'>
          <Navbar />
        </div>
        <div className='align-end mt-auto'>
          <SignOut />
        </div>
      </div>
      <div className='overflow-hidden w-[calc(100%)]'>
        <div className='flex justify-end items-center gap-4 h-[65px] mt-[-16px]'>
          <Image src={icons.notifications} alt='plannly logo' width={32} height={32} />
          <Image src={icons.lightMode} alt='plannly logo' width={32} height={32} />
          <div className='flex justify-center items-center w-[32px] h-[32px] rounded-[50%] bg-purple big-text text-basic_white'>
            A
          </div>
        </div>
        <div className='lg:p-[32px] lg:pt-[0px] max-w-[1440px] h-[calc(100%-40px)] mx-auto overflow-auto'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default RootLayout