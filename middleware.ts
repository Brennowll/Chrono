import NextAuth from "next-auth"
import authConfig from "./auth.config"
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "./routes"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { nextUrl } = req

  const isAuthApiRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  if (isAuthApiRoute) return

  const isLoggedIn = !!req.auth
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)
  if (isLoggedIn && isAuthRoute) {
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
  } else if (isAuthRoute) {
    return
  }

  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/sign-in", nextUrl))
  }
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
