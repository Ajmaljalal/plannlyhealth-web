'use client'
import { signOut } from '@/lib/services/auth'
import { useRouter } from 'next/navigation'
import React from 'react'

export const SignOut = () => {
  const router = useRouter()

  const handleSignOut = async () => {
    const result: any = await signOut()
    if (!result?.message) {
      router.push('/auth/login')
    } else {
      return
    }
  }
  return (
    <p onClick={handleSignOut} className='text-pWhite cursor-pointer'>Logout</p>
  )
}
