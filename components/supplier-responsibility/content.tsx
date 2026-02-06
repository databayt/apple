"use client"

import { AppleLink } from "@/components/atom/apple-link"

const pillars = [
  {
    title: "Labor and Human Rights",
    description: "Ensuring dignity and respect for everyone in our supply chain.",
    icon: "👥",
    stats: "23M+ hours of worker training",
  },
  {
    title: "Health and Safety",
    description: "Protecting the physical and mental well-being of workers.",
    icon: "🏥",
    stats: "2,000+ supplier audits annually",
  },
  {
    title: "Environment",
    description: "Reducing our environmental footprint across the supply chain.",
    icon: "🌍",
    stats: "300+ suppliers committed to clean energy",
  },
  {
    title: "Ethics",
    description: "Upholding the highest standards of ethical business practices.",
    icon: "⚖️",
    stats: "100% conflict mineral-free",
  },
]

const achievements = [
  {
    year: "2024",
    items: [
      "Over 300 suppliers committed to 100% renewable energy",
      "Zero tolerance for debt-bonded labor violations",
      "Extended worker health programs to mental wellness",
    ],
  },
  {
    year: "2023",
    items: [
      "Achieved 100% traceability for 3TG minerals",
      "Expanded education programs to 5 million workers",
      "Launched new environmental standards for suppliers",
    ],
  },
]

export function SupplierResponsibilityContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 text-center bg-[#f5f5f7]">
        <h1 className="text-5xl font-semibold text-[#1d1d1f] mb-4">
          Supplier Responsibility
        </h1>
        <p className="text-xl text-[#6e6e73] max-w-2xl mx-auto px-4">
          People and the planet are at the heart of everything we make.
        </p>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="apple-container text-center">
          <p className="text-lg text-[#6e6e73] max-w-3xl mx-auto">
            Apple is committed to ensuring the highest standards of social and environmental responsibility throughout our supply chain. We work with our suppliers to protect workers&apos; rights, advance educational opportunities, and drive environmental progress.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10 text-center">
            Our Four Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="p-8 bg-white rounded-2xl">
                <span className="text-4xl">{pillar.icon}</span>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mt-4 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-[#6e6e73] mb-4">{pillar.description}</p>
                <p className="text-sm font-medium text-[#0071e3]">{pillar.stats}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code of Conduct */}
      <section className="py-16 bg-white">
        <div className="apple-container text-center">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Supplier Code of Conduct
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto mb-8">
            All Apple suppliers must meet the requirements of our Supplier Code of Conduct. We audit compliance rigorously and take action when standards are not met.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#0071e3] text-white rounded-full text-lg font-medium hover:bg-[#0077ed] transition-colors"
          >
            Download Code of Conduct (PDF)
          </a>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10 text-center">
            Recent Achievements
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {achievements.map((year) => (
              <div key={year.year}>
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">{year.year}</h3>
                <ul className="space-y-3">
                  {year.items.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-[#34c759]">✓</span>
                      <span className="text-[#6e6e73]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Report */}
      <section className="py-16 bg-white text-center">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Progress Report
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto mb-8">
            Read our annual report on supplier responsibility initiatives and progress.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="px-6 py-3 bg-[#0071e3] text-white rounded-full font-medium hover:bg-[#0077ed] transition-colors">
              2024 Progress Report
            </a>
            <a href="#" className="px-6 py-3 bg-[#f5f5f7] text-[#1d1d1f] rounded-full font-medium hover:bg-[#e8e8ed] transition-colors">
              View All Reports
            </a>
          </div>
        </div>
      </section>

      {/* Supplier List */}
      <section className="py-16 bg-[#f5f5f7] text-center">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Supplier List
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto mb-8">
            We publish a list of suppliers who provide materials, manufacturing, and assembly of Apple products.
          </p>
          <AppleLink href="/supplier-responsibility/supplier-list">View supplier list</AppleLink>
        </div>
      </section>
    </div>
  )
}
