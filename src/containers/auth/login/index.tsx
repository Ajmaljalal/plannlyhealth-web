"use client"
import { Button } from "@/components/button";
import { icons } from "@/lib/icons";
import { loginRequest } from "@/lib/services/auth";
import { useSession, signIn } from "next-auth/react"
import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from "react";
import { useDispatch } from "@/store/store";
import { setUser } from "@/store/user";
import { useRouter } from "next/navigation";
import axios from "axios";

const employeeBaseURL = process.env.NEXT_PUBLIC_PLANNLY_API_URL

const LoginContainer = () => {
  const [noEmployeeAccount, setNoEmployeeAccount] = useState(false);
  const [email, setEmail] = useState('');
  const session = useSession();
  const { instance } = useMsal();
  const dispatch = useDispatch();
  const router = useRouter();

  // const activeAccount = instance.getActiveAccount();

  const getEmployee = (user: any) => {
    axios.get(`${employeeBaseURL}/employees/${user.sub}`).then((res) => {
      const employee = res?.data
      if (employee) {
        dispatch(setUser({ ...user, ...employee }));
        if (employee.role === 'Super Admin') {
          return router.push(`/admin`)
        }
        if (employee.role === 'Admin') {
          return router.push(`/company/dashboard`)
        }
        if (employee.role === 'Standard') {
          return router.push(`/employee/rewards`)
        }
      } else {
        setNoEmployeeAccount(true)
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    instance.acquireTokenSilent({
      scopes: ['user.read'],
      account: instance.getActiveAccount() as any
    }).then((res) => {
      console.log('res:', res)
    }).catch((err) => {
      console.log('err:', err)

    })
  }, [instance]);

  const handleMicrosoftLogin = async () => {
    const result = await instance.loginRedirect(loginRequest);
  }

  console.log('result:', instance)


  const renderForm = () => {
    if (!session?.data?.user) {
      return (
        <div className="w-[440px] flex flex-col items-center px-[8px] text-center">
          <div className="flex flex-col gap-2 items-center mb-[64px]">
            <img src="/logos/logo-icon-only-v2.svg" alt="Plannly" className="" width={64} height={64} />
            <h1 className="text-[40px] text-brand_voilet">Plannly Health</h1>
          </div>
          {/* <h2 className="mb-[12px] text-center">Welcome Back!</h2>
          <p className="text-basic_grey_1 mb-[32px]">Login to Plannly Health to continue</p>
          <Button text="Continue with Google" className="mb-[16px] w-[300px]" icon={icons.googleIcon} onClick={handleGoogleSignIn} />*/}
          <Button text="Continue with Microsoft" className="w-[300px]" icon={icons.microsoftIcon} onClick={handleMicrosoftLogin} />
          {/* <Input
            type="email"
            placeholder="Email"
            className="mb-[16px] w-[300px]"
            name={"email"} value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          /> */}
          {/* <Button text="Send me a magic link" className="w-[300px]" isPrimary onClick={async () => {
            const user = await signIn('email', {
              email: email,
              redirect: false,
              callbackUrl: '/',
            })
          }} /> */}
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