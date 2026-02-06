import Link from "next/link"
import { cn } from "@/lib/utils"
import type { BuyStripProps } from "./types"

export function BuyStrip({
  price,
  priceNote,
  tradeIn,
  tradeInNote,
  buyHref,
  learnMoreHref,
  className,
}: BuyStripProps) {
  return (
    <section
      className={cn(
        "bg-[#f5f5f7] py-16 border-t border-[#d2d2d7]",
        className
      )}
    >
      <div className="apple-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Pricing Info */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-semibold text-[#1d1d1f]">
                {price}
              </p>
              {priceNote && (
                <p className="text-sm text-[#6e6e73] mt-1">{priceNote}</p>
              )}
            </div>

            {tradeIn && (
              <div className="text-center md:text-left">
                <p className="text-lg text-[#1d1d1f]">
                  <span className="text-[#6e6e73]">Apple Trade In</span>{" "}
                  <span className="font-semibold">{tradeIn}</span>
                </p>
                {tradeInNote && (
                  <p className="text-sm text-[#6e6e73] mt-1">{tradeInNote}</p>
                )}
              </div>
            )}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            {learnMoreHref && (
              <Link
                href={learnMoreHref}
                className="inline-flex items-center justify-center px-6 py-3 text-[#0071e3] hover:underline text-lg"
              >
                Learn more
              </Link>
            )}
            <Link
              href={buyHref}
              className="inline-flex items-center justify-center px-8 py-3 bg-[#0071e3] text-white rounded-full text-lg font-medium hover:bg-[#0077ed] transition-colors"
            >
              Buy
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function BuyStripCompact({
  price,
  buyHref,
  className,
}: Pick<BuyStripProps, "price" | "buyHref" | "className">) {
  return (
    <div
      className={cn(
        "sticky bottom-0 z-50 bg-white/80 backdrop-blur-xl border-t border-[#d2d2d7] py-4",
        className
      )}
    >
      <div className="apple-container flex items-center justify-between">
        <p className="text-lg font-semibold text-[#1d1d1f]">{price}</p>
        <Link
          href={buyHref}
          className="inline-flex items-center justify-center px-6 py-2 bg-[#0071e3] text-white rounded-full text-sm font-medium hover:bg-[#0077ed] transition-colors"
        >
          Buy
        </Link>
      </div>
    </div>
  )
}
