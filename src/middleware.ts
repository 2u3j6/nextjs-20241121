import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {

    if(request.nextUrl.pathname !== '/login'){
        const token = request.cookies.get('token')?.value
        if(!token){
            return NextResponse.redirect(new URL('/login',request.url))
        }
    }
}
// 一些静态资源不希望被middleware拦截，所以需要配置
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}