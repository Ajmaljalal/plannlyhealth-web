'use client'
import { LoadingButton } from "@/components/loading-button";
import { icons } from "@/lib/icons";
import { signIn } from "@/lib/services/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";




const LoginContainer = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true)
    const { email, password } = event.target.elements;
    try {
      const user = await signIn(email.value, password.value)
      if (user && user.id) {
        router.push('/dashboard')
        setIsLoading(false)
      }
    } catch (error: any) {
      console.log(error)
      setIsLoading(false)
    }
  };

  return (
    <div className="
      flex 
      w-full 
      h-full 
      justify-center 
      custom-bg
      ">
      <div className="w-[360px] h-full flex flex-col items-center justify-center px-[24px]">
        <img src="/logos/logo-white.svg" alt="Plannly" className="mb-[112px] mr-[27px]" />
        <h2 className="text-[32px] text-simibold mb-[12px]">Welcome to Plannly!</h2>
        <p className="text-darkgrey mb-[32px]">Login to continue</p>
        <LoadingButton isLoading={isLoading} text="Continue with Microsoft" className="w-full mb-[16px]" icon={icons.microsoftIcon} />
        <LoadingButton isLoading={isLoading} text="Continue with Google" className="w-full" icon={icons.googleIcon} />
      </div>
    </div>
  )
}

export default LoginContainer