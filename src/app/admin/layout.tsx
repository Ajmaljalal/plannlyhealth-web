import Image from 'next/image';
import logo from '../../../public/logos/logo-white-full-v2.svg'
import { Header } from '@/components/header/admin-header';

export const metadata = {
  title: 'Plannly Health',
  description: 'Plannly Health is dedicated to mitigating the risk of human errors in hospitals, by offering a digital health solution that addresses provider stress, burnout, and critical life events or changes.',
}

const rootContainerStyles = `w-full h-screen flex bg-basic_white overflow-auto relative`
const headerStyles = `px-[32px] flex justify-between sticky top-[-16px] right-0 flex justify-end items-center gap-4 h-[65px] bg-basic_white border-b border-basic_grey_4 z-10`

const Layout = async ({ children }: { children: React.ReactNode }) => {

  return (
    <div className={rootContainerStyles}>
      <div className='w-full'>
        <div className={headerStyles}>
          <Image src={logo} width={200} height={53} alt='plannly logo' className='ml-[-6px] w-[200px] h-[50px]' />
          <Header />
        </div>
        <div className='pb-[32px] lg:p-[32px] lg:pt-[0px] max-w-[1440px] h-fit mt-[32px] mx-auto'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout