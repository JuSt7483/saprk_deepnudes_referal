import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { clerkMiddleware } from '@clerk/nextjs/server';

 
// Initialize the next-intl middleware
const intlMiddleware = createMiddleware(routing);

export default clerkMiddleware((_, req) => {
  req.headers.set("x-pathname", req.nextUrl.pathname);
  return intlMiddleware(req)
})
 
export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    // '/(en|de|es|ja|tr|hi|zh|pt|it|ar|fr|id|ko|ru)/:path*',
    '/(en)/:path*',
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|json)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ]
};