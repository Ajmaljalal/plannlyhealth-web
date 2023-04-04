'use client'
// import { signOut } from '@/lib/services/auth'
import React from 'react'

export const SignOut = () => {

  const handleSignOut = async () => {
    // await signOut()
  }
  return (
    <p onClick={handleSignOut} className='text-pWhite cursor-pointer'>Logout</p>
  )
}
