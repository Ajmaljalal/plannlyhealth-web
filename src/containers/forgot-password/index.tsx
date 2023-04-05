'use client'
import { Input } from "@/components/input";
import { LoadingButton } from "@/components/loading-button";
import { icons } from "@/lib/icons";
import { forgotPassword } from "@/lib/services/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ForgotPasswordContainer = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true)
    const { email } = event.target.elements;
    try {
      const result = await forgotPassword(email.value)
      if (result.code === 200) {
        setIsLoading(false)
        router.push('/reset-password?email=' + email.value)
      }
      if (result.code >= 400) {
        setIsLoading(false)
      }
      setIsLoading(false)
    } catch (error: any) {
      console.log(error)
      setIsLoading(false)
    }
  };

  return (
    <div className="flex w-full h-full">
      <div className="w-1/2 h-full hidden lg:block">
        <Image src={icons.loginHero} alt='plannly logo' className='w-full h-full object-cover' priority />
      </div>
      <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center bg-pWhite gap-6 px-[24px]">
        <h2>Forgot password?</h2>
        <p>Enter your work email and we will send you instructions</p>
        <form className="w-full lg:w-[400px] flex flex-col gap-7" onSubmit={handleSubmit}>
          <Input label="Work Email" name='email' value='' placeholder="example@company.com" required />
          <LoadingButton isLoading={isLoading} text="Submit" className="w-full" />
          <p className="text-center">Back to <Link href='/login' className="text-pPink font-bold cursor-pointer ml-1">Log In</Link></p>
        </form>
      </div>
    </div>
  )
}

export default ForgotPasswordContainer