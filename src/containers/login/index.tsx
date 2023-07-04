'use client'
import { Button } from "@/components/button";
import { icons } from "@/lib/icons";
import { useSession, signIn } from "next-auth/react"




const LoginContainer = () => {
  const session = useSession();

  const handleGoogleSignIn = async (event: any) => {
    try {
      await signIn('google')
    } catch (error: any) {
    }
  };

  const renderSignInError = () => {
    if (session?.data?.user?.name) {
      return (
        <div className="w-[360px] h-full flex flex-col items-center px-[24px] text-center">
          <img src="/logos/ph-logo-dark.svg" alt="Plannly" className="mr-[27px]" />
          <h2 className="text-[32px] text-simibold mb-[12px]">User Does Not Exist!</h2>
          <p className="text-darkgrey mb-[32px]">Please contact support for help!</p>
        </div>
      )
    }
  }


  const renderForm = () => {
    if (!session?.data?.user?.name) {
      return (
        <div className="w-[440px] h-full flex flex-col items-center px-[8px] text-center">
          <img src="/logos/ph-logo-dark.svg" alt="Plannly" className="mr-[27px]" />
          <h2 className="text-[32px] text-simibold mb-[12px] text-center">Welcome to Plannly Health!</h2>
          <p className="text-darkgrey mb-[32px]">Login to continue</p>
          <Button text="Continue with Google" className="w-full mb-[16px]" icon={icons.googleIcon} onClick={handleGoogleSignIn} />
          {/* <Button text="Continue with Microsoft" className="w-full" icon={icons.microsoftIcon} onClick={() => console.log('clicked')} /> */}
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
      ">
      {renderSignInError()}
      {renderForm()}
    </div>
  )
}

export default LoginContainer