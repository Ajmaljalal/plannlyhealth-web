import { CompaniesContainer } from '@/containers/admin/companies'
import axios from 'axios'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

const baseUrl = `${process.env.NEXT_PUBLIC_PLANNLY_API_URL}/companies`

async function AdminPanel() {
  const session: any = await getServerSession(authOptions)
  let companies = null
  if (session?.user) {
    try {
      const companyApiCall = await axios.get(baseUrl)
      companies = companyApiCall.data || null
    } catch (error) {
      console.log(error)
    }
    return (
      <CompaniesContainer companies={companies} />
    )
  } else {
    redirect('/auth/login')
  }
}

export default AdminPanel