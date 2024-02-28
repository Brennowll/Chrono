import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon, UserCircleIcon } from "lucide-react"
import Items from "./user-dropdown/items"

export default function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex flex-row items-center px-2 dark:hover:bg-zinc-700"
          variant="ghost"
        >
          <UserCircleIcon className="h-6 w-6" />
          <p className="pl-2 text-xs">Username</p>
          <ChevronDownIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-3 w-56">
        <Items />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
