import { cn } from "@/lib/utils"
import type { FeatureGridProps } from "./types"

export function FeatureGrid({
  features,
  columns = 3,
  variant = "light",
  className,
}: FeatureGridProps) {
  const variantStyles = {
    dark: "bg-black text-[#f5f5f7]",
    light: "bg-white text-[#1d1d1f]",
    gray: "bg-[#f5f5f7] text-[#1d1d1f]",
  }

  const descriptionColor = {
    dark: "text-[#a1a1a6]",
    light: "text-[#6e6e73]",
    gray: "text-[#6e6e73]",
  }

  const columnClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <section className={cn("py-20", variantStyles[variant], className)}>
      <div className="apple-container">
        <div className={cn("grid grid-cols-1 gap-12", columnClasses[columns])}>
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {feature.icon && (
                <div className="mb-6 text-[#0071e3]">{feature.icon}</div>
              )}
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className={cn("text-lg leading-relaxed", descriptionColor[variant])}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FeatureList({
  features,
  variant = "light",
  className,
}: Omit<FeatureGridProps, "columns">) {
  const variantStyles = {
    dark: "bg-black text-[#f5f5f7]",
    light: "bg-white text-[#1d1d1f]",
    gray: "bg-[#f5f5f7] text-[#1d1d1f]",
  }

  const descriptionColor = {
    dark: "text-[#a1a1a6]",
    light: "text-[#6e6e73]",
    gray: "text-[#6e6e73]",
  }

  return (
    <section className={cn("py-20", variantStyles[variant], className)}>
      <div className="apple-container max-w-4xl">
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-8 items-start">
              {feature.icon && (
                <div className="flex-shrink-0 text-[#0071e3]">{feature.icon}</div>
              )}
              <div>
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className={cn("text-lg leading-relaxed", descriptionColor[variant])}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
