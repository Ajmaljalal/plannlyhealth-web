import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/login', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    //   '/all-claims',
    //   '/all-transactions',
    //   '/assessments',
    //   '/back-office',
    //   '/bank-account',
    //   '/benefit-programs',
    //   '/card-categories',
    //   '/companies',
    //   '/dashboard',
    //   '/notifications',
    //   '/payouts',
    //   '/settings',
    //   '/subscription',
    //   '/users',
    //   '/forgot-password',
    //   '/marketplace',
    //   '/my-account',
    //   '/my-benefits',
    //   '/my-cards',
    //   '/my-claims',
    //   '/wellness-policy',
    //   '/home',
  ],
}