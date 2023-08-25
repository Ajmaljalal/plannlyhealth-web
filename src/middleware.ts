import { get } from "http"
import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

const employeesBaseUrl = `${process.env.NEXT_PUBLIC_PLANNLY_API_URL}/employees`

const getRedirectUrl = (role: any) => {
  const urls: any = {
    Admin: `${process.env.NEXT_PUBLIC_PLANNLY_WEB_URL}/company/dashboard`,
    "Super Admin": `${process.env.NEXT_PUBLIC_PLANNLY_WEB_URL}/admin`,
    Standard: `${process.env.NEXT_PUBLIC_PLANNLY_WEB_URL}/employee/rewards`
  }
  return urls[role]
}


export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  async function middleware(req) {
    const { token } = req.nextauth
    const employeeAccount = await fetch(`${employeesBaseUrl}/email/${token?.email}`, {
      method: "GET",
    })
    const employees = await employeeAccount.json()
    const employee = employees?.[0]
    if (!employee) {
      NextResponse.redirect(`${process.env.NEXT_PUBLIC_PLANNLY_WEB_URL}/auth/login`)
    } else {
      const redirectUrl = `${getRedirectUrl(employee?.role)}?acc=${employee.id}`
      NextResponse.redirect(redirectUrl)
    }
  },
  {
    // callbacks: {
    //   authorized: async ({ token }) => {
    //     const employeeAccount = await fetch(`${employeesBaseUrl}/email/${token?.email}`, {
    //       method: "GET",
    //     })
    //     const employee = await employeeAccount.json()
    //     return employee?.role === "Admin" || employee?.role === "Super Admin"
    //   }
    // },
  }
)

export const config = { matcher: ["/admin", "/company/:path*", "/employee/:path*"] }