import Links from "./sidebar/links"
import SidebarToggle from "./sidebar/sidebar-toggle"
import ThemeSelector from "./sidebar/theme-selector"
import UserDropdown from "./sidebar/user-dropdown"

export default function Sidebar() {
  return (
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
          <UserDropdown />
          <div className="flex flex-row items-center gap-2 pr-9">
            <ThemeSelector />
            <SidebarToggle />
          </div>
        </header>
        <nav className="flex flex-col px-3 py-3">
          <Links />
        </nav>
      </aside>
    </div>
  )
}
