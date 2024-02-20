import { Button } from "@/components/ui/button"
import { PanelLeftIcon } from "lucide-react"

export default function SidebarToggle() {
  return (
    <>
      <input
        type="checkbox"
        id="aside-toggle"
        className="peer hidden"
      />
      <Button
        variant="ghost"
        className="fixed right-3 top-3 translate-x-0 transform p-0
                      transition-all duration-300 peer-checked:translate-x-16 
                      peer-checked:hover:bg-accent dark:hover:bg-zinc-700"
      >
        <label htmlFor="aside-toggle" className="h-full w-full p-2">
          <PanelLeftIcon className="h-5 w-5" />
        </label>
      </Button>
    </>
  )
}
