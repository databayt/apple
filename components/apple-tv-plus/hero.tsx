"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { TvButton } from "./tv-button"
import type { Locale } from "@/components/local/config"

interface HeroProps {
  lang: Locale
}

export function Hero({ lang }: HeroProps) {
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0])

  const isAr = lang === "ar"

  return (
    <div className="bg-black text-white">
      {/* 200vh scroll zone — the image sticks while opacity fades */}
      <motion.div
        ref={targetRef}
        style={{ opacity }}
        className="h-[200vh]"
      >
        <img
          className="sticky top-0 h-screen w-full object-cover"
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1920&h=1080&fit=crop"
          alt=""
        />
      </motion.div>

      {/* Content floats above the image via negative margin */}
      <div className="container-apple relative z-10 -mt-[100vh] h-screen pb-7">
        <motion.div
          className="flex h-full flex-col items-start justify-end"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.98 }}
        >
          <h1 className="mb-10 text-4xl font-bold md:text-5xl">
            {isAr ? (
              <>
                كل محتوى Apple الأصلي.
                <br />
                حصريًا على Apple TV+‎.
              </>
            ) : (
              <>
                All Apple Originals.
                <br />
                Only on Apple TV+.
              </>
            )}
          </h1>
          <TvButton size="large" className="mb-16">
            {isAr ? "شاهد الآن" : "Stream now"}
          </TvButton>
          <p className="font-semibold">
            {isAr ? "شاهد على تطبيق Apple TV." : "Watch on the Apple TV app."}
          </p>
        </motion.div>
      </div>
    </div>
  )
}
