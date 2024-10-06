'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { icons } from '@/lib/icons';
import { useDispatch, useSelector } from '@/store/store';
import {
  setUser,
  userProfileSelector
} from '@/store/user';
import {
  useRouter,
} from 'next/navigation';
import { useSession } from 'next-auth/react';
import { getEmployeeByEmail } from '@/lib/services/employee';
import { Role } from '@/lib/types/employee';

export const Header: React.FC = () => {
  const { data: userSession } = useSession();
  const router = useRouter();
  const user = useSelector(userProfileSelector);
  const dispatch = useDispatch();

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

  useEffect(() => {
    fetchUserData();
  }, [userSession]);


  return (
    <div className='flex gap-2'>
      <Image src={icons.notifications} alt='plannly logo' width={32} height={32} className='border border-1 border-basic_grey_3 rounded-full cursor-pointer' />
      {/* <Image src={icons.lightMode} alt='plannly logo' width={32} height={32} /> */}
      <div className='flex justify-center items-center w-[32px] h-[32px] rounded-[50%] bg-purple big-text text-basic_white cursor-pointer'>
        {user?.first_name?.charAt(0)}
      </div>
    </div>
  );
}