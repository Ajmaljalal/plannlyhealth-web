'use client'
import { Input } from "@/components/input";
import { LoadingButton } from "@/components/loading-button";
import { icons } from "@/lib/icons";
import { signIn } from "@/lib/services/auth";
import Image from "next/image";
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
    <div className="flex w-full h-full">
      <div className="w-1/2 h-full hidden lg:block">
        <Image src={icons.loginHero} alt='plannly logo' className='w-full h-full object-cover' />
      </div>
      <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center bg-pWhite gap-12 px-[24px]">
        <h2>Log In</h2>
        <form className="w-full lg:w-[400px] flex flex-col gap-7" onSubmit={handleSubmit}>
          <Input label="Work Email" name='email' value='' placeholder="example@company.com" required />
          <Input label="Password" name='password' value='' placeholder="Password" required />
          <h4 className="text-center text-pPink">Forgot password?</h4>
          <LoadingButton isLoading={isLoading} text="Log In" className="w-full" />
          <p className="text-center">Don't have an account yet? <span className="text-pPink font-bold cursor-pointer">Sign Up</span></p>
        </form>
      </div>
    </div>
  )
}

export default LoginContainer