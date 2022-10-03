import { withAuth } from "next-auth/middleware"

const basePath = process.env.NEXT_PATH_PREFIX ?? '';
// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      // `/admin` requires admin role
      if (req.nextUrl.pathname === "/admin") {
        return token?.userRole === "admin"
      }
      // `/me` only requires the user to be logged in
      return !!token
    },
  },
  pages: {
    signIn: `${basePath}/api/auth/signin`
  },
})

export const config = { matcher: ["/admin", "/me"] }
