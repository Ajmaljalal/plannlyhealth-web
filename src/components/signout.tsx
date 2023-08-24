'use client'
import { icons } from '@/lib/icons'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { signOut } from 'next-auth/react'

const signOutBtnStyles = `
    flex
    items-center
    justify-start
    w-full
    h-[40px]
    text-basic_grey_3
    text-[14px]
    font-bold-700
    p-[10px]
    rounded-[8px]
    hover:bg-brand_voilet
    hover:text-basic_white
    cursor-pointer
    leading-[1.2]
    focus:bg-pPink
`
export const SignOut = () => {
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut({
      redirect: true,
      callbackUrl: '/auth/login',
    })
  }
  return (
    <p className={`${signOutBtnStyles}`} onClick={handleSignOut}>
      <Image src={icons.logoutLight} alt='logout button' width='18' height='18' className='mr-[10px]' />
      Log Out
    </p>
  )
}