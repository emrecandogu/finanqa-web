import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const auth = request.headers.get('authorization')

  if (auth) {
    const [, base64] = auth.split(' ')
    const [user, pass] = atob(base64).split(':')

    const validUser = 'finanqa'
    const validPass = '1234'

    if (user === validUser && pass === validPass) {
      return NextResponse.next()
    }
  }

  return new NextResponse('Authorization Required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Finanqa Private Access"',
    },
  })
}

export const config = {
  matcher: ['/:path*'],
}
