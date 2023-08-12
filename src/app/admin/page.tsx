import { CompaniesContainer } from '@/containers/admin/companies'
import axios from 'axios'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

const baseUrl = `${process.env.NEXT_PUBLIC_PLANNLY_API_URL}/companies`

async function AdminPanel() {
  const session: any = await getServerSession(authOptions)
  if (session?.user) {
    const companyApiCall = await axios.get(baseUrl)
    const companies = companyApiCall.data || null
    return (
      <CompaniesContainer companies={companies} />
    )
  } else {
    redirect('/auth/login')
  }
}

export default AdminPanel