"use client"

import { logout } from "@/actions/logout"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

export default function Items() {
  return (
    <DropdownMenuItem
      onClick={() => {
        logout()
      }}
    >
      Sair
    </DropdownMenuItem>
  )
}
