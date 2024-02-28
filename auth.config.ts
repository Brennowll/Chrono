import bcryptjs from "bcryptjs"
import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import { getUserByEmail } from "./data/user"
import { signInSchema } from "./lib/zod-schemas"

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = signInSchema.safeParse(credentials)
        if (!validatedFields.success) return null

        const { email, password } = validatedFields.data
        const user = await getUserByEmail(email)
        if (!user || !user?.password) return null

        const passwordsMatch = await bcryptjs.compare(
          password,
          user.password,
        )

        if (passwordsMatch) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
} satisfies NextAuthConfig
