'use client'
import { Button } from "@/components/button";
import { icons } from "@/lib/icons";
import { loginRequest, signInWithMicrosoft } from "@/lib/services/auth";
import { useSession, signIn } from "next-auth/react"
import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from "react";

const LoginContainer = () => {
  const session = useSession();
  const { instance } = useMsal();
  const [userName, setUserName] = useState("");

  const activeAccount = instance.getActiveAccount();
  useEffect(() => {
    if (activeAccount) {
      setUserName(activeAccount.username);
    } else {
      setUserName("");
    }
  }, [activeAccount]);

  const handleGoogleSignIn = async (event: any) => {
    try {
      await signIn('google')
    } catch (error: any) {
    }
  };

  // const handleMicrosoftSignIn = async (event: any) => {
  //   try {
  //     // const result = await signIn('azure-ad')
  //     const result = await signInWithMicrosoft()
  //     console.log('result', result)
  //     redirect('/')

  //   } catch (error: any) {
  //     console.log('error', error)
  //   }
  // };



  const handleLogin = async () => {
    await instance.loginRedirect(loginRequest);
  }

  const renderSignInError = () => {
    if (session?.data?.user?.name || userName) {
      return (
        <div className="w-[360px] h-full flex flex-col items-center px-[24px] text-center">
          <img src="/logos/logo-icon-only-v2.svg" alt="Plannly" className="mb-[32px]" width={70} height={70} />
          <h2 className="text-normal mb-[12px]">User Does Not Exist!</h2>
          <p className="text-basic_grey_1 mb-[32px]">Please contact support for help!</p>
        </div>
      )
    } else {
      return null
    }
  }


  const renderForm = () => {
    if (!session?.data?.user?.name && !userName) {
      return (
        <div className="w-[440px] flex flex-col items-center px-[8px] text-center">
          <img src="/logos/logo-icon-only-v2.svg" alt="Plannly" className="mb-[32px]" width={50} height={50} />
          <h2 className="mb-[12px] text-center">Welcome Back!</h2>
          <p className="text-basic_grey_1 mb-[32px]">Login to Plannly Health to continue</p>
          <Button text="Continue with Google" className="mb-[16px] w-[300px]" icon={icons.googleIcon} onClick={handleGoogleSignIn} />
          <Button text="Continue with Microsoft" className="w-[300px]" icon={icons.microsoftIcon} onClick={handleLogin} />
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