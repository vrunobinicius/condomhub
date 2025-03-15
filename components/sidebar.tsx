"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  CreditCard,
  MessageSquare,
  Calendar,
  FileText,
  AlertTriangle,
  UserCheck,
  ChevronDown,
  ChevronRight,
} from "lucide-react"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    pagamentos: true,
    comunicacao: true,
    reservas: true,
    documentos: true,
    ocorrencias: true,
    acesso: true,
  })

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }))
  }

  const menuItems = [
    {
      id: "pagamentos",
      title: "Pagamentos",
      icon: CreditCard,
      href: "/pagamentos",
      submenu: [
        { title: "Boletos Pendentes", href: "/pagamentos/pendentes" },
        { title: "Histórico", href: "/pagamentos/historico" },
        { title: "Segunda Via", href: "/pagamentos/segunda-via" },
      ],
    },
    {
      id: "comunicacao",
      title: "Comunicação",
      icon: MessageSquare,
      href: "/comunicacao",
      submenu: [
        { title: "Mensagens", href: "/comunicacao/mensagens" },
        { title: "Comunicados", href: "/comunicacao/comunicados" },
        { title: "Contatos", href: "/comunicacao/contatos" },
      ],
    },
    {
      id: "reservas",
      title: "Reservas",
      icon: Calendar,
      href: "/reservas",
      submenu: [
        { title: "Áreas Comuns", href: "/reservas/areas-comuns" },
        { title: "Minhas Reservas", href: "/reservas/minhas" },
        { title: "Calendário", href: "/reservas/calendario" },
      ],
    },
    {
      id: "documentos",
      title: "Documentos",
      icon: FileText,
      href: "/documentos",
      submenu: [
        { title: "Atas", href: "/documentos/atas" },
        { title: "Regulamentos", href: "/documentos/regulamentos" },
        { title: "Contratos", href: "/documentos/contratos" },
      ],
    },
    {
      id: "ocorrencias",
      title: "Ocorrências",
      icon: AlertTriangle,
      href: "/ocorrencias",
      submenu: [
        { title: "Registrar", href: "/ocorrencias/registrar" },
        { title: "Minhas Ocorrências", href: "/ocorrencias/minhas" },
        { title: "Acompanhamento", href: "/ocorrencias/acompanhamento" },
      ],
    },
    {
      id: "acesso",
      title: "Controle de Acesso",
      icon: UserCheck,
      href: "/acesso",
      submenu: [
        { title: "Visitantes", href: "/acesso/visitantes" },
        { title: "Autorizações", href: "/acesso/autorizacoes" },
        { title: "Registros", href: "/acesso/registros" },
      ],
    },
  ]

  return (
    <div className={cn("pb-12 w-64 border-r", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Menu Principal</h2>
          <div className="space-y-1">
            <Link
              href="/"
              className="flex w-full items-center rounded-md px-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Página Inicial
            </Link>
            {menuItems.map((item) => (
              <div key={item.id} className="space-y-1">
                <button
                  onClick={() => toggleMenu(item.id)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-md px-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href ? "bg-accent text-accent-foreground" : "transparent",
                  )}
                >
                  <div className="flex items-center">
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.title}</span>
                  </div>
                  {openMenus[item.id] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </button>
                {openMenus[item.id] && (
                  <div className="pl-6 space-y-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.href}
                        href={subitem.href}
                        className={cn(
                          "flex w-full items-center rounded-md px-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                          pathname === subitem.href ? "bg-accent text-accent-foreground" : "transparent",
                        )}
                      >
                        {subitem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

