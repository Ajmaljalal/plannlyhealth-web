import Image from 'next/image';
import logo from '../../../public/logos/plannly-logo-white-horizontal.png'
import Navbar from '@/containers/employee/left-nav/employee';
import { SignOut } from '@/components/signout';
import { icons } from '@/lib/icons';
import AssessmentAlertModal from '@/components/assessment/assessment-alert-modal';
import { NavItem } from '@/components/left-nav/nav-item';

export const metadata = {
  title: 'Plannly Health',
  description: 'Plannly Health is dedicated to mitigating the risk of human errors in hospitals, by offering a digital health solution that addresses provider stress, burnout, and critical life events or changes.',
}

const rootContainerStyles = `w-full min-w-[320px] h-screen p-[16px] flex bg-basic_white overflow-auto`
const navContainerStyles = `z-50 sticky top-0 left-0 hidden lg:flex flex-col gap-8 min-w-[200px] h-full bg-basic_black text-basic_white px-[16px] py-[24px] rounded-[32px]`
const headerStyles = `w-full pr-[16px] absolute top-0 right-0 flex justify-end items-center gap-4 h-[50px] lg:h-[65px] bg-basic_white`

const RootLayout = async ({ children }: { children: React.ReactNode }) => {

  return (
    <div className={rootContainerStyles}>
      <div className={navContainerStyles}>
        <div className='w-full flex items-center justify-center'>
          <Image src={logo} width={150} height={32} alt='plannly logo' className='mt-[6px]' />
        </div>
        <Navbar />
        <div className='align-end mt-auto'>
          <SignOut />
        </div>
      </div>
      <div className='w-full'>
        <div className={headerStyles}>
          <Image src={icons.notifications} alt='plannly logo' width={32} height={32} />
          {/* <Image src={icons.lightMode} alt='plannly logo' width={32} height={32} /> */}
          <div className='flex justify-center items-center w-[32px] h-[32px] rounded-[50%] bg-purple big-text text-basic_white'>
            A
          </div>
        </div>
        <div className='pb-[32px] lg:p-[32px] lg:pt-[0px] max-w-[1440px] h-fit mx-auto mt-[55px] pb-[80px]'>
          {children}
        </div>
      </div>
      <AssessmentAlertModal />
      <div className='lg:hidden absolute bottom-0 px-[12px] pb-3 right-0 flex gap-4 items-center justify-evenly w-full bg-basic_black'>
        <NavItem href='/employee/rewards' icon={icons.rewards} text={''} iconLight={icons.rewardsLight} />
        <NavItem href='/employee/todos' icon={icons.todo} text={''} iconLight={icons.todoLight} />
        <NavItem href='/employee/benefits' icon={icons.benefits} text={''} iconLight={icons.benefitsLight} />
      </div>
    </div>
  )
}

export default RootLayout