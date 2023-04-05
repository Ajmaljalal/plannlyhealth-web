'use client'
import { Container } from '@/components/container'
import { Input } from '@/components/input'
import { LoadingButton } from '@/components/loading-button'
import { icons } from '@/lib/icons'
import { resetPassword } from '@/lib/services/auth'
import { useRouter } from 'next/navigation'
import React from 'react'

export const ResetPasswordContainer = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    const { password, confirmPassword, code } = e.target.elements
    if (password.value !== confirmPassword.value) {
      setIsLoading(false)
      return alert('Passwords do not match')
    }
    const email = window.location.search.split('=')[1]
    const result = await resetPassword({ email, password: password.value, code: code.value })
    if (result.code === 200) {
      router.push('/login')
    }
    setIsLoading(false)
  }
  return (
    <div className='w-full h-full md:w-1/2 lg:w-1/3 max-w-[380px] m-auto pt-[100px]' >
      <Container className='h-fit flex flex-col gap-10'>
        <h3 className='text-center'>Reset Password</h3>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
          <Input name='code' label='Verification code' value='' />
          <Input type='password' name='password' label='New password' value='' icon={icons.see} />
          <Input type='password' name='confirmPassword' label='Confirm password' value='' icon={icons.see} />
          <LoadingButton isLoading={isLoading} text={'Reset'} />
        </form>
      </Container>
    </div>
  )

}
