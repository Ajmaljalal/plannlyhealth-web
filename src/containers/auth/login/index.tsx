"use client"
import { useEffect } from "react";
import { Button } from "@/components/button";
import { useMsal } from '@azure/msal-react';
import { icons } from "@/lib/icons";
import { loginRequest } from "@/lib/services/auth";
import { useDispatch, useSelector } from "@/store/store";
import { setUser, userProfileSelector } from "@/store/user";
// import { useSession, signIn } from "next-auth/react"

const LoginContainer = async () => {
  // const session = useSession();
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount() || undefined
  // const token = await instance.acquireTokenSilent(
  //   {
  //     ...loginRequest,
  //     account: activeAccount
  //   }
  // )
  const user = useSelector(userProfileSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (activeAccount) {
      dispatch(setUser(activeAccount))
    }
  }, []);

  // const handleGoogleSignIn = async (event: any) => {
  //   try {
  //     await signIn('google')
  //   } catch (error: any) {
  //     console.log('error', error)
  //   }
  // };

  const handleMicrosoftLogin = async () => {
    await instance.loginRedirect(loginRequest);
  }

  const renderSignInError = () => {
    if (user) {
      return (
        <div className="w-[360px] flex flex-col items-center px-[24px] text-center">
          <img src="/logos/logo-icon-only-v2.svg" alt="Plannly" className="mb-[32px]" width={70} height={70} />
          <h2 className="text-normal mb-[12px]">User Does Not Exist!</h2>
          <p className="text-basic_grey_1 mb-[32px]">Please contact support for help!</p>
          <p>{user?.username}</p>
        </div>
      )
    } else {
      return null
    }
  }

  const renderForm = () => {
    if (!user) {
      return (
        <div className="w-[440px] flex flex-col items-center px-[8px] text-center">
          <img src="/logos/logo-icon-only-v2.svg" alt="Plannly" className="mb-[32px]" width={50} height={50} />
          <h2 className="mb-[12px] text-center">Welcome Back!</h2>
          <p className="text-basic_grey_1 mb-[32px]">Login to Plannly Health to continue</p>
          {/* <Button text="Continue with Google" className="mb-[16px] w-[300px]" icon={icons.googleIcon} onClick={handleGoogleSignIn} /> */}
          <Button text="Continue with Microsoft" className="w-[300px]" icon={icons.microsoftIcon} onClick={handleMicrosoftLogin} />
        </div>
      )
    } else {
      return null
    }
  }

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
      {renderSignInError()}
      {renderForm()}
    </div>
  )
}

export default LoginContainer