'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { icons } from '@/lib/icons';
import { companyDetailsSelector, setCompanyDetails, setEmployees } from '@/store/company';
import { useDispatch, useSelector } from '@/store/store';
import { setAssessmentPostponed, setUser, userProfileSelector } from '@/store/user';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { getCompanyById } from '@/lib/services/company';
import { getEmployeeByEmail } from '@/lib/services/employee';
import { Role } from '@/lib/types/employee';

const HEADER_STYLES = `sticky top-[-16px] right-0 flex justify-end items-center gap-4 h-[65px] mt-[-16px] bg-basic_white z-[100]`;
const BACK_BUTTON_STYLES = `flex items-center gap-2 mr-10 border border-brand_voilet_light px-2
py-1 rounded-[8px] text-brand_voilet text-small cursor-pointer hover:bg-brand_voilet hover:text-basic_white shadow-md`;

export const Header: React.FC = () => {
  const { data: userSession } = useSession();
  const router = useRouter();
  const company = useSelector(companyDetailsSelector);
  const user = useSelector(userProfileSelector);
  const dispatch = useDispatch();
  const params = useSearchParams();
  const pathname = usePathname()
  const companyIdFromParams = params.get('org_id');

  const isSuperAdmin = user?.role === Role.SuperAdmin;
  const isAdmin = user?.role === Role.Admin;
  const isEmployeeVeiw = pathname?.includes('employee') && isAdmin

  const SUPER_ADMIN_BACK_URL = '/admin';
  const EMPLOYEE_BACK_URL = '/employee/rewards';


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
    if (isSuperAdmin && !company && companyIdFromParams) {
      fetchCompanyData(companyIdFromParams);
    } else if (user) {
      fetchCompanyData(user.company_id);
    }
  }, [user, companyIdFromParams]);

  useEffect(() => {
    if (!isSuperAdmin) {
      const assessmentProgress = window.localStorage.getItem(`assessment_${user?.id}_postponed`);
      console.log('assessmentProgress', assessmentProgress)
      if (assessmentProgress === 'true') {
        dispatch(setAssessmentPostponed(true))
      }
    }
  }, [user])

  const routeBackToSuperAdminView = () => {
    router.push(SUPER_ADMIN_BACK_URL);
    dispatch(setCompanyDetails(null));
    dispatch(setEmployees(null));
  }

  return (
    <div className={HEADER_STYLES}>
      {isSuperAdmin && (
        <div className={BACK_BUTTON_STYLES} onClick={routeBackToSuperAdminView}>
          <Image src={icons.linkIcon} alt='link' width={20} height={20} />
          <div className='text-small text-basic_grey mt-0.3'>Back to Admin Dashboard</div>
        </div>
      )}
      {!isSuperAdmin && isAdmin && !isEmployeeVeiw && (
        <div className={BACK_BUTTON_STYLES} onClick={() => router.push(EMPLOYEE_BACK_URL)}>
          <Image src={icons.linkIcon} alt='link' width={20} height={20} />
          <div className='text-small text-basic_grey mt-0.3'>Employee View</div>
        </div>
      )}
      <Image src={icons.notifications} alt='notifications' width={32} height={32} />
      <div className='flex justify-center items-center w-[32px] h-[32px] rounded-[50%] bg-purple big-text text-basic_white'>
        {user?.first_name?.charAt(0)?.toUpperCase()}
      </div>
    </div>
  );
}
