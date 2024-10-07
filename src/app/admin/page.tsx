import { CompaniesContainer } from '@/containers/admin/companies'
import axios from 'axios'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { COMAPANY_BASE_URL, GET_EMPLOYEE_BY_EMAIL } from '@/lib/helpers/api-urls'

const baseUrl = `${process.env.NEXT_PUBLIC_PLANNLY_API_URL}/companies`

async function AdminPanel() {
  const session: any = await getServerSession(authOptions)

  const employees = await axios.get(`${GET_EMPLOYEE_BY_EMAIL}/${session.user.email}`)
  const employee = employees.data[0]
  if (employee.role !== 'Super Admin') {
    return redirect('/')
  }

  let companies = null
  if (session?.user) {
    try {
      const companyApiCall = await axios.get(COMAPANY_BASE_URL)
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