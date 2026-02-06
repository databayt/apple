"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

interface MainNavProps {
  className?: string
}

const NAV_ITEMS = [
  { href: "/docs", label: "Docs" },
  { href: "/atoms", label: "Atoms" },
  { href: "/templates", label: "Templates" },
  { href: "/blocks", label: "Blocks" },
  { href: "/micros", label: "Micros" },
  { href: "/vibes", label: "Vibes" },
]

export function MainNav({ className }: MainNavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex items-center gap-4 text-sm xl:gap-6", className)}>
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            pathname?.startsWith(item.href)
              ? "text-foreground"
              : ""
          )}
        >
          <h6>{item.label}</h6>
        </Link>
      ))}
    </nav>
  )
}
