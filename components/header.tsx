"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { UserNav } from "@/components/user-nav"

export function Header() {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <header id="header" className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="logo">
              <Link href="/" className="flex items-center">
                <span className="text-primary font-bold text-2xl">Condom</span>
                <span className="text-white font-bold text-2xl">Hub</span>
              </Link>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-8">
            <form className="relative">
              <Input
                type="text"
                placeholder="Buscar no CondomHub"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary border-secondary-foreground/20 text-white placeholder:text-gray-400"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </form>
          </div>

          <div className="flex items-center gap-4">
            <ModeToggle />
            {isLoggedIn ? (
              <UserNav />
            ) : (
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Entrar
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

