import { Providers } from "@/components/Home/Providers"
import SidebarNavLink from "@/components/Home/SidebarNavLink"
import SidebarToggle from "@/components/Home/SidebarToggle"
import ThemeModeToggle from "@/components/Home/ThemeModeToggle"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  ActivitySquareIcon,
  ChevronDownIcon,
  ClipboardListIcon,
  UserCircleIcon,
} from "lucide-react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chrono",
  description: "By Brenno Bomtempo",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="flex h-screen w-full flex-row">
            <div
              className="w-72 transition-all duration-300
              has-[:checked]:w-0"
            >
              <aside
                className={`fixed left-0 top-0 z-50 h-full w-72 translate-x-0
                transform bg-zinc-200 transition-all duration-300
                has-[:checked]:-translate-x-full dark:bg-zinc-800
              `}
              >
                <header className="flex w-full flex-row items-center justify-between p-3">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        className="flex flex-row items-center px-2
                      dark:hover:bg-zinc-700"
                        variant="ghost"
                      >
                        <UserCircleIcon className="h-6 w-6" />
                        <p className="pl-2 text-xs">Username</p>
                        <ChevronDownIcon className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="ml-3 w-56">
                      <DropdownMenuItem>Sair</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <div className="flex flex-row items-center gap-2 pr-9">
                    <ThemeModeToggle />
                    <SidebarToggle />
                  </div>
                </header>
                <nav className="flex flex-col px-3 py-3">
                  <SidebarNavLink
                    name="Tasks"
                    href="tasks"
                    Icon={ClipboardListIcon}
                  />
                  <SidebarNavLink
                    name="Habit Tracker"
                    href="habit-tracker"
                    Icon={ActivitySquareIcon}
                  />
                </nav>
              </aside>
            </div>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
