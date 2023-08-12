import { NextResponse, type NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // const session: any = await getServerSession()
  // if (session?.user) {
  return NextResponse.next()
  // } else {
  //   return NextResponse.redirect(new URL('/auth/login', request.url))
  // }
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
    // '/'
    // '/auth/login',
    // '/company',
    // '/employee',
  ],
}