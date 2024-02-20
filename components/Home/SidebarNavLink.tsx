import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ElementType } from "react"

interface Props {
  name: string
  href: string
  Icon: ElementType
}

export default function SidebarNavLink({ name, href, Icon }: Props) {
  return (
    <Button
      variant="ghost"
      className="justify-normal px-2 dark:hover:bg-zinc-700"
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
