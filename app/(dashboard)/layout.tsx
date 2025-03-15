import type React from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home } from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="wrapper">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="mb-4">
            <Button variant="ghost" size="sm" asChild className="flex items-center gap-1">
              <Link href="/">
                <Home className="h-4 w-4" />
                <span>Voltar para Página Inicial</span>
              </Link>
            </Button>
          </div>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

