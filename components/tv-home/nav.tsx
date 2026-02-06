"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface TvHomeNavProps {
  lang: string
}

// Apple-style icons as inline SVGs
const AppleTv4kIcon = () => (
  <svg width="35" height="35" viewBox="0 0 35 35" className="fill-current">
    <path d="M28.5 7h-22C4.57 7 3 8.57 3 10.5v12c0 1.93 1.57 3.5 3.5 3.5h22c1.93 0 3.5-1.57 3.5-3.5v-12C32 8.57 30.43 7 28.5 7zm1.5 15.5c0 .83-.67 1.5-1.5 1.5h-22c-.83 0-1.5-.67-1.5-1.5v-12c0-.83.67-1.5 1.5-1.5h22c.83 0 1.5.67 1.5 1.5v12zM10 28h15v1H10z"/>
  </svg>
)

const AppleTvAppIcon = () => (
  <svg width="35" height="35" viewBox="0 0 35 35" className="fill-current">
    <rect x="6" y="8" width="23" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M14.5 13.5v7l6-3.5-6-3.5z"/>
    <path d="M13 27h9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

const AppleTvPlusIcon = () => (
  <svg width="35" height="35" viewBox="0 0 35 35" className="fill-current">
    <circle cx="17.5" cy="17.5" r="9" fill="none" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M14.5 14v7l6-3.5-6-3.5z"/>
  </svg>
)

const HomePodIcon = () => (
  <svg width="35" height="35" viewBox="0 0 35 35" className="fill-current">
    <path d="M17.5 6C12.8 6 9 9.8 9 14.5v10c0 2.5 2 4.5 4.5 4.5h8c2.5 0 4.5-2 4.5-4.5v-10C26 9.8 22.2 6 17.5 6zm0 1.5c3.6 0 6.5 2.9 6.5 6.5v10c0 1.65-1.35 3-3 3h-8c-1.65 0-3-1.35-3-3v-10c0-3.6 2.9-6.5 6.5-6.5z"/>
    <circle cx="17.5" cy="13.5" r="2.5"/>
  </svg>
)

const HomePodMiniIcon = () => (
  <svg width="35" height="35" viewBox="0 0 35 35" className="fill-current">
    <path d="M17.5 9c-3.6 0-6.5 2.9-6.5 6.5v6c0 2.2 1.8 4 4 4h5c2.2 0 4-1.8 4-4v-6c0-3.6-2.9-6.5-6.5-6.5zm0 1.5c2.75 0 5 2.25 5 5v6c0 1.4-1.1 2.5-2.5 2.5h-5c-1.4 0-2.5-1.1-2.5-2.5v-6c0-2.75 2.25-5 5-5z"/>
    <circle cx="17.5" cy="15" r="2"/>
  </svg>
)

const HomeAppIcon = () => (
  <svg width="35" height="35" viewBox="0 0 35 35" className="fill-current">
    <path d="M17.5 5L5 15v12c0 1.65 1.35 3 3 3h7v-9h5v9h7c1.65 0 3-1.35 3-3V15L17.5 5zm0 2.5l10 8v11.5c0 .83-.67 1.5-1.5 1.5H22v-9h-9v9H8.5c-.83 0-1.5-.67-1.5-1.5V15.5l10.5-8z"/>
  </svg>
)

const AccessoriesIcon = () => (
  <svg width="35" height="35" viewBox="0 0 35 35" className="fill-current">
    <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="23" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="12" cy="23" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="23" cy="23" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.2"/>
  </svg>
)

const navItems = [
  { label: "Apple TV 4K", href: "/apple-tv-4k", Icon: AppleTv4kIcon },
  { label: "Apple TV app", href: "/apple-tv-app", Icon: AppleTvAppIcon },
  { label: "Apple TV+", href: "/apple-tv-plus", Icon: AppleTvPlusIcon },
  { label: "HomePod", href: "/homepod", Icon: HomePodIcon },
  { label: "HomePod mini", href: "/homepod-mini", Icon: HomePodMiniIcon },
  { label: "Home app", href: "/home-app", Icon: HomeAppIcon },
  { label: "Accessories", href: "/shop/accessories/all-accessories/homekit", Icon: AccessoriesIcon },
]

export function TvHomeNav({ lang }: TvHomeNavProps) {
  const pathname = usePathname()

  return (
    <nav className="bg-[#f5f5f7] border-b border-[#d2d2d7]/60">
      <div className="max-w-[980px] mx-auto px-[22px]">
        <ul className="flex items-center justify-center gap-0 overflow-x-auto scrollbar-hide">
          {navItems.map((item) => {
            const href = `/${lang}${item.href}`
            const isActive =
              pathname === href ||
              (item.href !== "/shop/accessories/all-accessories/homekit" &&
                pathname.startsWith(href + "/"))

            return (
              <li key={item.href}>
                <Link
                  href={href}
                  className={cn(
                    "flex flex-col items-center justify-center gap-1.5 px-[18px] py-4 min-w-[76px] transition-opacity text-[#1d1d1f]",
                    isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
                  )}
                >
                  <span className="w-[35px] h-[35px] flex items-center justify-center">
                    <item.Icon />
                  </span>
                  <span className="text-[12px] leading-[1.33] font-normal whitespace-nowrap">
                    {item.label}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
