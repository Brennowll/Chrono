"use server"

import { signIn } from "@/auth"
import { getUserByEmail } from "@/data/user"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { AuthError } from "next-auth"
import { SignInType, signInSchema } from "./../lib/zod-schemas"

export const login = async ({ email, password }: SignInType) => {
  const validatedFields = signInSchema.safeParse({ email, password })
  if (!validatedFields.success)
    return { error: "Invalid Credentials." }

  const messageIfNotUser = "User with given credentials do not exist."
  const defaultMessage =
    "Something went wrong, please try again later."

  const user = await getUserByEmail(email)
  if (!user || !user.email || !user.password) {
    return { error: messageIfNotUser }
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
  } catch (error) {
    if (!(error instanceof AuthError)) {
      throw error
    }

    switch (error.type) {
      case "CredentialsSignin":
        return { error: messageIfNotUser }
      default:
        return { error: defaultMessage }
    }
  }
}
