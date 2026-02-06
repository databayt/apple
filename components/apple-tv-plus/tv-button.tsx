import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface TvButtonProps {
  children: ReactNode
  size?: "small" | "medium" | "large"
  className?: string
  href?: string
}

const sizeClasses = {
  small: "px-4 py-1.5 text-sm",
  medium: "px-6 py-2 text-base",
  large: "px-8 py-3 text-lg",
}

export function TvButton({
  children,
  size = "medium",
  className,
  href,
}: TvButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full bg-white text-[#1d1d1f] font-medium transition-transform hover:scale-105",
    sizeClasses[size],
    className
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return <button className={classes}>{children}</button>
}
