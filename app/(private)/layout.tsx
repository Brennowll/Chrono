import Sidebar from "@/components/home/sidebar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen w-full flex-row">
      <Sidebar />
      {children}
    </div>
  )
}
