// "use client"
import { Button } from "@/components/button";
import { useSession, signIn } from "next-auth/react";
import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "@/store/store";
import { setUser } from "@/store/user";
import { useRouter } from "next/navigation";
import { Input } from "@/components/input";
import { getEmployeeByEmail } from "@/lib/services/employee";

const LoginContainer = () => {
  const [isEmployeeExist, setIsEmployeeExist] = useState(false);
  const [error, setError] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState('');
  const { data: sessionData, status: sessionStatus } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSignIn = useCallback(async () => {
    if (!email.trim()) return;

    try {
      const user = await signIn('email', {
        email,
        redirect: false,
        callbackUrl: '/',
      });

      if (user?.error) {
        setError(true);
      } else {
        setEmailSent(true);
      }
    } catch (err) {
      console.error(err);  // Log errors to console for easier debugging
    }
  }, [email]);

  const getEmployee = useCallback((user: any) => {  // Used useCallback for memoization
    getEmployeeByEmail(user.email).then((employee) => {
      if (employee) {
        dispatch(setUser({ ...user, ...employee }));
        const redirectPath = {
          'Super Admin': '/admin',
          'Admin': '/company/dashboard',
          'Standard': '/employee/rewards',
        }[employee.role as string];

        if (redirectPath) router.push(redirectPath);
      } else {
        setIsEmployeeExist(true);
      }
    }).catch(console.error);  // Log errors to console for easier debugging
  }, [dispatch, router]);

  useEffect(() => {
    const user = sessionData?.user;
    if (user) getEmployee(user);
  }, [sessionData, getEmployee]);

  const renderForm = useCallback(() => {  // Used useCallback for memoization
    return sessionData?.user ? null : (
      <div className="w-[440px] flex flex-col items-center px-[8px] text-center">
        <div className="flex flex-col gap-2 items-center mb-[64px]">
          <img src="/logos/logo-icon-only-v2.svg" alt="Plannly" className="" width={64} height={64} />
          <h1 className="text-[40px] text-brand_voilet">Plannly Health</h1>
        </div>
        <Input
          type="email"
          placeholder="Email"
          className="mb-[16px] w-[300px]"
          name={"email"} value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Button text="Send me a magic link" className="w-[300px]" isPrimary onClick={handleSignIn} />
      </div>
    );
  }, [sessionData, email, handleSignIn]);

  const renderMessage = ({ title, description }: { title: string, description: string }) => (
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
        <h2 className="text-normal mb-[12px]">{title}</h2>
        <p className="text-basic_grey_1 mb-[32px]">{description}</p>
      </div>
    </div>
  )


  const renderContent = () => {
    if (sessionStatus === 'loading') {
      return 'Loading...';
    }
    if (isEmployeeExist || error) {
      return renderMessage(
        {
          title: 'Oops! Something went wrong',
          description: 'Please contact your employer'
        }
      );
    }
    if (emailSent) {
      return renderMessage(
        {
          title: 'Check your email',
          description: 'We have sent you a magic link to sign in'
        }
      );
    }
    return renderForm();
  };

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
      {renderContent()}
    </div>
  );
};

export default LoginContainer;
