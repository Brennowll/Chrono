"use client"

import { ActivitySquareIcon, ClipboardListIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import NavLink from "./nav-link"

export default function Links() {
  const pathname = usePathname()

  return (
    <>
      <NavLink
        name="Tasks"
        href="tasks"
        Icon={ClipboardListIcon}
        isActive={pathname == "/tasks"}
      />
      <NavLink
        name="Habit Tracker"
        href="habit-tracker"
        Icon={ActivitySquareIcon}
        isActive={pathname == "/habit-tracker"}
      />
    </>
  )
}
