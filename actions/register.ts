"use server"

import { getUserByEmail } from "@/data/user"
import { db } from "@/lib/db"
import { SignUpType, signUpSchema } from "@/lib/zod-schemas"
import bcryptjs from "bcryptjs"

export const register = async ({
  name,
  email,
  password,
  confirmPassword,
}: SignUpType) => {
  const validateFields = signUpSchema.safeParse({
    name,
    email,
    password,
    confirmPassword,
  })

  if (!validateFields.success)
    return { error: "Invalid user credentials." }

  const userExists = await getUserByEmail(email)
  if (userExists) return { error: "Email already in use." }

  const salt = await bcryptjs.genSalt()
  const hashedPassword = await bcryptjs.hash(password, salt)

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  })

  return { success: "User created!" }
}
