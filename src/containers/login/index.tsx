'use client'
import { Button } from "@/components/button";
import { icons } from "@/lib/icons";
import { signIn } from "@/lib/services/auth";
import { signInWithGoogle } from "@/lib/services/auth/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";




const LoginContainer = () => {
  const router = useRouter()
  const [signInDone, setSignInDone] = useState(false)
  const [signInError, setSignInError] = useState('')

  const handleGoogleSignIn = async (event: any) => {
    try {
      const user = await signInWithGoogle()
      if (user) {
        console.log(user)
        setSignInDone(true)
        setSignInError(`User with email ${user?.user?.email} does not exists`)
      }
    } catch (error: any) {
      console.log(error)
      setSignInDone(true)
    }
  };

  const renderSignInError = () => {
    if (signInError && signInDone) {
      return (
        <div className="w-[360px] h-full flex flex-col items-center justify-center px-[24px]">
          <img src="/logos/logo-white.svg" alt="Plannly" className="mb-[90px] mr-[27px]" />
          <h2 className="text-[32px] text-simibold mb-[12px]">User Does Not Exist!</h2>
          <p className="text-darkgrey mb-[32px]">Please contact support for help!</p>
        </div>
      )
    }
  }


  const renderForm = () => {
    if (!signInDone) {
      return (
        <div className="w-[360px] h-full flex flex-col items-center justify-center px-[24px]">
          <img src="/logos/logo-white.svg" alt="Plannly" className="mb-[112px] mr-[27px]" />
          <h2 className="text-[32px] text-simibold mb-[12px]">Welcome to Plannly!</h2>
          <p className="text-darkgrey mb-[32px]">Login to continue</p>
          <Button text="Continue with Microsoft" className="w-full mb-[16px]" icon={icons.microsoftIcon} onClick={() => console.log('clicked')} />
          <Button text="Continue with Google" className="w-full" icon={icons.googleIcon} onClick={handleGoogleSignIn} />
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
      custom-bg
      ">
      {renderSignInError()}
      {renderForm()}
    </div>
  )
}

export default LoginContainer