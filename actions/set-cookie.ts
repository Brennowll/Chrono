"use server"

import { cookies } from "next/headers"

interface Props {
  name: string
  value: string
}

export async function setCookie({ name, value }: Props) {
  cookies().set(name, value)
}
