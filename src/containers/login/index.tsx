'use client'
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { icons } from "@/lib/icons";
import { signIn, signOut } from "@/lib/services/auth";

import Image from "next/image";

const LoginContainer = () => {

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await signOut()
    const { email, password } = event.target.elements;
    console.log(email, password)
    try {
      const user = await signIn(email.value, password.value)
      console.log(user)
    } catch (error: any) {
      console.log(error)
    }
  };

  return (
    <div className="flex w-full h-full">
      <div className="w-1/2 h-full hidden lg:block">
        <Image src={icons.loginHero} alt='plannly logo' className='w-full h-full object-cover' />
      </div>
      <div className="w-1/2 h-full flex flex-col items-center justify-center bg-pWhite gap-12">
        <h2>Log In</h2>
        <form className="w-full lg:w-[400px] flex flex-col gap-7" onSubmit={handleSubmit}>
          <Input label="Work Email" name='email' value='' placeholder="example@company.com" />
          <Input label="Password" name='password' value='' placeholder="Password" />
          <h4 className="text-center text-pPink">Forgot password?</h4>
          <Button text='Log In' className="w-full" />
          <p className="text-center">Don't have an account yet? <span className="text-pPink font-bold cursor-pointer">Sign Up</span></p>
        </form>
      </div>
    </div>
  )
}

export default LoginContainer