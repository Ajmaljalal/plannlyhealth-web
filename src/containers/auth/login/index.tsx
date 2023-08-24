"use client"
import { Button } from "@/components/button";
import { icons } from "@/lib/icons";
// import { loginRequest } from "@/lib/services/auth";
import { useSession, signIn } from "next-auth/react"
// import { useMsal } from '@azure/msal-react';
import { useEffect } from "react";
import { useDispatch } from "@/store/store";
import { setUser } from "@/store/user";
import { useRouter } from "next/navigation";

const LoginContainer = () => {
  const session = useSession();
  // const { instance } = useMsal();
  const dispatch = useDispatch();
  const router = useRouter();

  // const activeAccount = instance.getActiveAccount();
  useEffect(() => {
    const user = session?.data?.user
    if (user) {
      router.push('/employee/rewards')
      dispatch(setUser(user));
    }
    // if (activeAccount) {
    //   setUserName(activeAccount.username);
    // } else {
    //   setUserName("");
    // }
  }, [session]);

  const handleGoogleSignIn = async (event: any) => {
    try {
      await signIn('google')
    } catch (error: any) {
      return error
    }
  };

  // const handleMicrosoftLogin = async () => {
  //   await instance.loginRedirect(loginRequest);
  // }

  const renderForm = () => {
    if (!session?.data?.user) {
      return (
        <div className="w-[440px] flex flex-col items-center px-[8px] text-center">
          <img src="/logos/logo-icon-only-v2.svg" alt="Plannly" className="mb-[32px]" width={50} height={50} />
          <h2 className="mb-[12px] text-center">Welcome Back!</h2>
          <p className="text-basic_grey_1 mb-[32px]">Login to Plannly Health to continue</p>
          <Button text="Continue with Google" className="mb-[16px] w-[300px]" icon={icons.googleIcon} onClick={handleGoogleSignIn} />
          {/* <Button text="Continue with Microsoft" className="w-[300px]" icon={icons.microsoftIcon} onClick={handleMicrosoftLogin} /> */}
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