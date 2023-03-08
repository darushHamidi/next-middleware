import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    if (request.cookies.get('user')?.value) return NextResponse.next()
    
    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: '/admin/:path*',
}