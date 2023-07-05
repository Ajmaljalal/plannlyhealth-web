'use client'
import { Button } from "@/components/button";
import { icons } from "@/lib/icons";
import { signInWithMicrosoft } from "@/lib/services/auth";
import { useSession, signIn } from "next-auth/react"




const LoginContainer = () => {
  const session = useSession();

  const handleGoogleSignIn = async (event: any) => {
    try {
      await signIn('google')
    } catch (error: any) {
    }
  };

  const handleMicrosoftSignIn = async (event: any) => {
    try {
      const result = await signIn('azure-ad')
      console.log('result', result)
    } catch (error: any) {
      console.log('error', error)
    }
  };

  const renderSignInError = () => {
    if (session?.data?.user?.name) {
      return (
        <div className="w-[360px] h-full flex flex-col items-center px-[24px] text-center">
          <img src="/logos/ph-logo-dark.svg" alt="Plannly" className="mr-[27px]" />
          <h1 className="text-[32px] text-simibold mb-[12px]">User Does Not Exist!</h1>
          <p className="text-basic_grey_1 mb-[32px]">Please contact support for help!</p>
        </div>
      )
    }
  }


  const renderForm = () => {
    if (!session?.data?.user?.name) {
      return (
        <div className="w-[440px] h-full flex flex-col items-center px-[8px] text-center">
          <img src="/logos/ph-logo-dark.svg" alt="Plannly" className="mr-[27px]" />
          <h1 className="mb-[12px] text-center">Welcome Back!</h1>
          <p className="text-basic_grey_1 mb-[32px]">Login to Plannly Health to continue</p>
          <Button text="Continue with Google" className="mb-[16px] w-[300px]" icon={icons.googleIcon} onClick={handleGoogleSignIn} />
          <Button text="Continue with Microsoft" className="w-[300px]" icon={icons.microsoftIcon} onClick={handleMicrosoftSignIn} />
        </div>
      )
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
      ">
      {renderSignInError()}
      {renderForm()}
    </div>
  )
}

export default LoginContainer