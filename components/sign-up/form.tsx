"use client"

import { login } from "@/actions/login"
import { register } from "@/actions/register"
import { SignUpType, signUpSchema } from "@/lib/zod-schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckIcon, Loader2, X } from "lucide-react"
import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { Alert, AlertTitle } from "../ui/alert"
import { Button } from "../ui/button"
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Form as ShadcnForm,
} from "../ui/form"
import { Input } from "../ui/input"

const useSignUpForm = () => {
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()
  const [isPending, startTransition] = useTransition()

  const form = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(values: SignUpType) {
    setError(undefined)
    setSuccess(undefined)

    startTransition(() => {
      register(values).then((data) => {
        setError(data.error)
        setSuccess(data.success)

        if (data.success) {
          login({
            email: values.email,
            password: values.password,
          })
        }
      })
    })
  }

  return { error, success, isPending, form, onSubmit }
}

export default function Form() {
  const { error, success, isPending, form, onSubmit } =
    useSignUpForm()

  return (
    <ShadcnForm {...form}>
      <form
        className="flex w-full max-w-md flex-col gap-2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field} />
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
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder="confirm password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {error && (
          <Alert variant={"destructive"} className="mt-2">
            <AlertTitle className="mb-0 flex flex-row gap-2">
              <X className="h-4 w-4" />
              {error}
            </AlertTitle>
          </Alert>
        )}
        {success && (
          <Alert className="mt-2 border-green-300 text-green-300">
            <AlertTitle className="mb-0 flex flex-row gap-2">
              <CheckIcon className="h-4 w-4" />
              {success}
            </AlertTitle>
          </Alert>
        )}
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
