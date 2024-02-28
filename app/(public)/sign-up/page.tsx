import Form from "@/components/sign-up/form"
import { Button } from "@/components/ui/button"
import GoogleIcon from "@/public/google.svg"
import TodoistIcon from "@/public/todoist.svg"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sign-Up",
}

export default function SignUp() {
  return (
    <main className="absolute flex h-screen w-full flex-col items-center justify-center gap-5">
      <h2 className="text-3xl font-bold">Create an account</h2>
      <p className="text-sm opacity-70">
        Enter your credentials below to create your account
      </p>
      <Form />
      <div className="relative w-full max-w-md">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="flex w-full max-w-md flex-col gap-2">
        <Button variant="outline">
          <Image
            src={GoogleIcon}
            alt="Google logo"
            className="mr-2 h-4 w-4"
          />
          Gmail
        </Button>
        <Button variant="outline">
          <Image
            src={TodoistIcon}
            alt="Todoist logo"
            className="mr-2 h-4 w-4"
          />
          Todoist
        </Button>
      </div>
      <Button
        variant={"ghost"}
        asChild
        className="absolute right-6 top-7 flex items-center justify-center p-0"
      >
        <Link href={"/sign-in"} className="px-4 py-3">
          SIGN-IN
        </Link>
      </Button>
    </main>
  )
}
