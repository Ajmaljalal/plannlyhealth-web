'use client';
import React, { useEffect, } from 'react';
import Image from 'next/image';
import { icons } from '@/lib/icons';
import { companyDetailsSelector, setCompanyDetails } from '@/store/company';
import { useDispatch, useSelector } from '@/store/store';
import { setAssessmentPostponed, setUser, userAssessmentProgressSelector, userProfileSelector } from '@/store/user';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { getCompanyById } from '@/lib/services/company';
import { getEmployeeByEmail } from '@/lib/services/employee';
import { Role } from '@/lib/types/employee';
import { get_month_year } from '@/lib/helpers';

const HEADER_STYLES = `sticky top-[-16px] right-0 flex justify-end items-center gap-4 h-[65px] mt-[-16px] bg-basic_white z-[100]`;
const BACK_BUTTON_STYLES = `flex items-center gap-2 mr-10 border border-brand_voilet_light px-2
py-1 rounded-[8px] text-brand_voilet text-small cursor-pointer hover:bg-brand_voilet hover:text-basic_white shadow-md`;

export const Header: React.FC = () => {
  const { data: userSession } = useSession();
  const router = useRouter();
  const company = useSelector(companyDetailsSelector);
  const user = useSelector(userProfileSelector);
  const assessmentProgress = useSelector(userAssessmentProgressSelector);
  const dispatch = useDispatch();
  const pathname = usePathname()

  const isAdmin = user?.role === Role.Admin;
  const isEmployeeVeiw = pathname?.includes('employee')

  const ADMIN_BACK_URL = `/company/dashboard`;


  const fetchUserData = async () => {
    if (!userSession || user) return;

    try {
      const fetchedUser = await getEmployeeByEmail(userSession?.user?.email as string);
      dispatch(setUser(fetchedUser));
      if (fetchedUser?.role === Role.Standard) {
        router.push(`/employee/rewards`);
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  const fetchCompanyData = async (companyId: string) => {
    if (company) return;

    try {
      const fetchedCompany = await getCompanyById(companyId);
      dispatch(setCompanyDetails(fetchedCompany));
    } catch (error) {
      console.error("Failed to fetch company data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [userSession]);

  useEffect(() => {
    if (!user) return;
    fetchCompanyData(user.company_id);
  }, [user]);


  useEffect(() => {
    const assessmentProgress = window.localStorage.getItem(`assessment-postponded-${get_month_year()}`);
    if (assessmentProgress === 'true') {
      dispatch(setAssessmentPostponed(true))
    }
  }, [user])

  return (
    <div className={HEADER_STYLES}>
      {
        assessmentProgress && isEmployeeVeiw && (
          <div onClick={() => router.push('/assessment')} className='flex items-center gap-2 border border-basic_orange px-2
          py-1 rounded-[8px] text-small cursor-pointer bg-system_error/[0.1]'>
            <div className='text-small text-system_error mt-0.3'>Complete Your Assessment!</div>
          </div>
        )
      }
      {isEmployeeVeiw && isAdmin && (
        <div className={`${BACK_BUTTON_STYLES} hidden lg:flex`} onClick={() => router.push(ADMIN_BACK_URL)}>
          <Image src={icons.linkIcon} alt='link' width={20} height={20} />
          <div className='text-small text-basic_grey mt-0.3'>Admin View</div>
        </div>
      )}
      <Image src={icons.notifications} alt='notifications' width={32} height={32} />
      <div className='flex justify-center items-center w-[32px] h-[32px] rounded-[50%] bg-purple big-text text-basic_white'>
        {user?.email?.charAt(0)?.toUpperCase()}
      </div>
    </div>
  );
}
