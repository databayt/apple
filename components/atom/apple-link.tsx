import Link from "next/link"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/atom/icons"

interface AppleLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  showChevron?: boolean
  variant?: "default" | "small" | "large"
  external?: boolean
}

export function AppleLink({
  href,
  children,
  className,
  showChevron = true,
  variant = "default",
  external = false,
}: AppleLinkProps) {
  const sizeClasses = {
    small: "text-sm",
    default: "text-base",
    large: "text-lg",
  }

  const Component = external ? "a" : Link

  return (
    <Component
      href={href}
      className={cn(
        "inline-flex items-center gap-1 text-[#0071e3] hover:underline transition-all",
        sizeClasses[variant],
        className
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {showChevron && (
        <Icons.chevronRight className="size-2.5 mt-px" />
      )}
    </Component>
  )
}

interface AppleCTAProps {
  href: string
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "ghost"
}

export function AppleCTA({
  href,
  children,
  className,
  variant = "primary",
}: AppleCTAProps) {
  const variantClasses = {
    primary:
      "bg-[#0071e3] text-white hover:bg-[#0077ed] px-5 py-2.5 rounded-full text-sm font-medium",
    secondary:
      "bg-transparent text-[#0071e3] hover:bg-[#0071e3]/5 px-5 py-2.5 rounded-full text-sm font-medium border border-[#0071e3]",
    ghost: "text-[#0071e3] hover:underline text-sm",
  }

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center transition-all",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </Link>
  )
}
