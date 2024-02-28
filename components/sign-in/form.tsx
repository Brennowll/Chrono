"use client"

import { login } from "@/actions/login"
import { SignInType, signInSchema } from "@/lib/zod-schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { Alert } from "../ui/alert"
import { Button } from "../ui/button"
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Form as ShadcnForm,
} from "../ui/form"
import { Input } from "../ui/input"

const useSignInForm = () => {
  const [error, setError] = useState<string | undefined>()
  const [isPending, startTransition] = useTransition()

  const form = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (values: SignInType) => {
    setError(undefined)

    startTransition(() => {
      login(values).then((data) => {
        setError(data?.error)
      })
    })
  }

  return { error, isPending, form, onSubmit }
}

export default function Form() {
  const { error, isPending, form, onSubmit } = useSignInForm()

  return (
    <ShadcnForm {...form}>
      <form
        className="flex w-full max-w-md flex-col gap-2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="example@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {error && <Alert variant={"destructive"}>{error}</Alert>}
        <Button
          type="submit"
          className="w-full max-w-none"
          disabled={isPending}
        >
          {isPending && <Loader2 className="mr-2 animate-spin" />}
          Submit
        </Button>
      </form>
    </ShadcnForm>
  )
}
