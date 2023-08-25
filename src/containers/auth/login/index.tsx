"use client"
import { Button } from "@/components/button";
import { icons } from "@/lib/icons";
// import { loginRequest } from "@/lib/services/auth";
import { useSession, signIn } from "next-auth/react"
// import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from "react";
import { useDispatch } from "@/store/store";
import { setUser } from "@/store/user";
import { useRouter } from "next/navigation";
import axios from "axios";

const employeeBaseURL = process.env.NEXT_PUBLIC_PLANNLY_API_URL

const LoginContainer = () => {
  const [noEmployeeAccount, setNoEmployeeAccount] = useState(false);
  const session = useSession();
  // const { instance } = useMsal();
  const dispatch = useDispatch();
  const router = useRouter();

  // const activeAccount = instance.getActiveAccount();

  const getEmployee = (user: any) => {
    axios.get(`${employeeBaseURL}/employees/${user.sub}`).then((res) => {
      const employee = res?.data
      if (employee) {
        dispatch(setUser({ ...user, ...employee }));
        if (employee.role === 'Super Admin') {
          return router.push(`/admin?acc=${user.sub}`)
        }
        if (employee.role === 'Admin') {
          return router.push(`/company/dashboard?acc=${user.sub}`)
        }
        if (employee.role === 'Standard') {
          return router.push(`/employee/rewards?acc=${user.sub}`)
        }
      } else {
        setNoEmployeeAccount(true)
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    const user: any = session?.data?.user
    if (user) {
      getEmployee(user)
    }
    // if (activeAccount) {
    //   setUserName(activeAccount.username);
    // } else {
    //   setUserName("");
    // }
  }, [session]);

  const handleGoogleSignIn = async (event: any) => {
    try {
      await signIn('google', {
        callbackUrl: '/',
      })
    } catch (error: any) {
      return error
    }
  };

  // const handleMicrosoftLogin = async () => {
  //   await instance.loginRedirect(loginRequest);
  // }

  const renderForm = () => {
    if (!session?.data?.user) {
      return (
        <div className="w-[440px] flex flex-col items-center px-[8px] text-center">
          <img src="/logos/logo-icon-only-v2.svg" alt="Plannly" className="mb-[32px]" width={50} height={50} />
          <h2 className="mb-[12px] text-center">Welcome Back!</h2>
          <p className="text-basic_grey_1 mb-[32px]">Login to Plannly Health to continue</p>
          <Button text="Continue with Google" className="mb-[16px] w-[300px]" icon={icons.googleIcon} onClick={handleGoogleSignIn} />
          {/* <Button text="Continue with Microsoft" className="w-[300px]" icon={icons.microsoftIcon} onClick={handleMicrosoftLogin} /> */}
        </div>
      )
    } else {
      return null
    }
  }

  if (session?.status === 'loading') return (
    <div className="
      flex 
      w-full 
      h-full 
      justify-center 
      xl:custom-bg
      bg-basic_white
      items-center
      ">
      <div className="w-[360px] flex flex-col items-center px-[24px] text-center">
        <img src="/logos/logo-icon-only-v2.svg" alt="Plannly" className="mb-[32px]" width={70} height={70} />
        <h2 className="text-normal mb-[12px]">Loading...</h2>
      </div>
    </div>
  )

  if (noEmployeeAccount) return (
    <div className="
      flex 
      w-full 
      h-full 
      justify-center 
      xl:custom-bg
      bg-basic_white
      items-center
      ">
      <div className="w-[360px] flex flex-col items-center px-[24px] text-center">
        <img src="/logos/logo-icon-only-v2.svg" alt="Plannly" className="mb-[32px]" width={70} height={70} />
        <h2 className="text-normal mb-[12px]">Oops! someting did not work.</h2>
        <p className="text-basic_grey_1 mb-[32px]">Please contact support</p>
      </div>
    </div>
  )

  return (
    <div className="
      flex 
      w-full 
      h-full 
      justify-center 
      xl:custom-bg
      bg-basic_white
      items-center
      ">
      {/* {renderSignInError()} */}
      {renderForm()}
    </div>
  )
}

export default LoginContainer