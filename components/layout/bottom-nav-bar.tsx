"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { HomeIcon, CatalogIcon, ContactIcon, AboutIcon } from "@/components/icons/custom-icons"
import { cn } from "@/lib/utils"

export function BottomNavBar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", icon: HomeIcon, label: "Главная" },
    { href: "/catalog", icon: CatalogIcon, label: "Каталог" },
    { href: "/contacts", icon: ContactIcon, label: "Контакты" },
    { href: "/about", icon: AboutIcon, label: "О нас" },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200/50 z-40">
      <div className="grid grid-cols-4">
        {navItems.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex flex-col items-center py-3 px-1 text-xs transition-all duration-200",
              pathname === href
                ? "text-blue-600 bg-blue-50/50"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50/50",
            )}
          >
            <Icon className="w-5 h-5 mb-1" />
            <span className="font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
