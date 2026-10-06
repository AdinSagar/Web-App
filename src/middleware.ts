import { NextRequest, NextResponse } from 'next/server'

// The public marketing service retains legacy admin routes. Its production
// admin console lives elsewhere, so these routes must not be publicly exposed.
export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/api/admin/:path*', '/api/create-super-admin']
}
