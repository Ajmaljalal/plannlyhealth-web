'use client'
import LoginContainer from '@/containers/login'
import auth from '@/lib/services/auth/firebase'

import React from 'react'

const Login = () => {

  const firebaseAuth = auth
  return (
    <LoginContainer />
  )
}

export default Login