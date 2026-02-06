"use client"

import { AppleLink } from "@/components/atom/apple-link"

const financialHighlights = [
  {
    label: "Revenue",
    value: "$383.3B",
    period: "FY 2024",
  },
  {
    label: "Net Income",
    value: "$96.9B",
    period: "FY 2024",
  },
  {
    label: "Earnings Per Share",
    value: "$6.30",
    period: "FY 2024",
  },
  {
    label: "Cash & Investments",
    value: "$162.1B",
    period: "Q4 2024",
  },
]

const recentFilings = [
  {
    title: "Quarterly Report (10-Q)",
    date: "January 31, 2025",
    period: "Q1 FY 2025",
  },
  {
    title: "Annual Report (10-K)",
    date: "November 1, 2024",
    period: "FY 2024",
  },
  {
    title: "Proxy Statement (DEF 14A)",
    date: "January 3, 2025",
    period: "2025 Annual Meeting",
  },
]

const events = [
  {
    title: "Q1 FY 2025 Earnings Call",
    date: "January 30, 2025",
    time: "2:00 p.m. PT",
  },
  {
    title: "Annual Shareholders Meeting",
    date: "February 25, 2025",
    time: "9:00 a.m. PT",
  },
]

export function InvestorRelationsContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 text-center bg-[#f5f5f7]">
        <h1 className="text-5xl font-semibold text-[#1d1d1f] mb-4">
          Investor Relations
        </h1>
        <p className="text-xl text-[#6e6e73]">
          Financial information and resources for Apple investors.
        </p>
      </section>

      {/* Stock Quote */}
      <section className="py-8 border-b border-[#d2d2d7]">
        <div className="apple-container flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-sm text-[#6e6e73]">NASDAQ: AAPL</span>
            <p className="text-3xl font-semibold text-[#1d1d1f]">
              $232.15 <span className="text-lg text-[#34c759]">+1.2%</span>
            </p>
          </div>
          <p className="text-sm text-[#6e6e73]">
            Market data delayed by at least 15 minutes.
          </p>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-16 bg-white">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10 text-center">
            Financial Highlights
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {financialHighlights.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-sm text-[#6e6e73] mb-2">{item.label}</p>
                <p className="text-3xl font-semibold text-[#1d1d1f]">{item.value}</p>
                <p className="text-sm text-[#6e6e73]">{item.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEC Filings */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10">
            SEC Filings
          </h2>
          <div className="space-y-4">
            {recentFilings.map((filing) => (
              <a
                key={filing.title}
                href="#"
                className="flex justify-between items-center p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="font-semibold text-[#1d1d1f]">{filing.title}</h3>
                  <p className="text-sm text-[#6e6e73]">{filing.period}</p>
                </div>
                <span className="text-sm text-[#6e6e73]">{filing.date}</span>
              </a>
            ))}
          </div>
          <div className="mt-6">
            <AppleLink href="/investor/sec-filings">View all SEC filings</AppleLink>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10">
            Upcoming Events
          </h2>
          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.title}
                className="flex justify-between items-center p-4 bg-[#f5f5f7] rounded-xl"
              >
                <div>
                  <h3 className="font-semibold text-[#1d1d1f]">{event.title}</h3>
                  <p className="text-sm text-[#6e6e73]">{event.time}</p>
                </div>
                <span className="text-sm font-medium text-[#0071e3]">{event.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10 text-center">
            Investor Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="#" className="p-6 bg-white rounded-xl hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Annual Reports</h3>
              <p className="text-sm text-[#6e6e73]">
                Download Apple&apos;s annual reports and shareholder letters.
              </p>
            </a>
            <a href="#" className="p-6 bg-white rounded-xl hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Earnings Calls</h3>
              <p className="text-sm text-[#6e6e73]">
                Listen to quarterly earnings call replays.
              </p>
            </a>
            <a href="#" className="p-6 bg-white rounded-xl hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Email Alerts</h3>
              <p className="text-sm text-[#6e6e73]">
                Sign up for investor news and SEC filing alerts.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white text-center">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Contact Investor Relations
          </h2>
          <p className="text-[#6e6e73] mb-2">investor_relations@apple.com</p>
          <p className="text-[#6e6e73]">(408) 974-3123</p>
        </div>
      </section>
    </div>
  )
}
