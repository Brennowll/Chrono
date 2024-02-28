import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ElementType } from "react"

interface Props {
  name: string
  href: string
  Icon: ElementType
  isActive: boolean
}

export default function NavLink({
  name,
  href,
  Icon,
  isActive,
}: Props) {
  return (
    <Button
      variant="ghost"
      className={`justify-normal px-2 py-[0.40rem] dark:hover:bg-zinc-700
      ${isActive ? "bg-zinc-300 dark:bg-zinc-600" : ""}`}
      asChild
    >
      <Link
        href={href}
        className="flex h-full w-full flex-row items-center text-xs"
      >
        <Icon className="mr-2" />
        {name}
      </Link>
    </Button>
  )
}
