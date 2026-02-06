"use client"

import Link from "next/link"

const legalDocuments = [
  {
    category: "Website",
    docs: [
      { name: "Terms of Use", href: "/legal/internet-services/terms/site.html" },
      { name: "Privacy Policy", href: "/legal/privacy" },
      { name: "Cookie Policy", href: "/legal/privacy/cookies" },
    ],
  },
  {
    category: "Products & Services",
    docs: [
      { name: "Apple Media Services Terms", href: "/legal/internet-services/itunes" },
      { name: "iCloud Terms of Service", href: "/legal/internet-services/icloud" },
      { name: "Apple Pay Terms", href: "/legal/applepay" },
      { name: "Apple Card Customer Agreement", href: "/legal/apple-card" },
      { name: "AppleCare Terms", href: "/legal/applecare" },
    ],
  },
  {
    category: "Intellectual Property",
    docs: [
      { name: "Trademark List", href: "/legal/trademark" },
      { name: "Guidelines for Using Apple Trademarks", href: "/legal/trademark/guidelinesfor3rdparties.html" },
      { name: "Rights and Permissions", href: "/legal/contact" },
    ],
  },
  {
    category: "Software",
    docs: [
      { name: "Software License Agreements", href: "/legal/sla" },
      { name: "Open Source", href: "/opensource" },
    ],
  },
]

const quickLinks = [
  { name: "Privacy Policy", href: "/legal/privacy", icon: "🔒" },
  { name: "Terms of Use", href: "/legal/internet-services/terms/site.html", icon: "📄" },
  { name: "Sales & Refunds", href: "/shop/help/returns_refund", icon: "🔄" },
  { name: "Cookie Policy", href: "/legal/privacy/cookies", icon: "🍪" },
]

export function LegalContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 text-center bg-[#f5f5f7]">
        <h1 className="text-5xl font-semibold text-[#1d1d1f] mb-4">
          Legal
        </h1>
        <p className="text-xl text-[#6e6e73]">
          Legal information and resources.
        </p>
      </section>

      {/* Quick Links */}
      <section className="py-8 border-b border-[#d2d2d7]">
        <div className="apple-container">
          <div className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 text-[#0071e3] hover:underline"
              >
                <span>{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Documents */}
      <section className="py-16 bg-white">
        <div className="apple-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {legalDocuments.map((section) => (
              <div key={section.category}>
                <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-6">
                  {section.category}
                </h2>
                <ul className="space-y-4">
                  {section.docs.map((doc) => (
                    <li key={doc.name}>
                      <Link
                        href={doc.href}
                        className="text-[#0071e3] hover:underline"
                      >
                        {doc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container text-center">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Privacy at Apple
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto mb-6">
            At Apple, we believe privacy is a fundamental human right. Learn about how we protect your data.
          </p>
          <Link
            href="/privacy"
            className="text-[#0071e3] hover:underline"
          >
            Learn more about Privacy at Apple &gt;
          </Link>
        </div>
      </section>

      {/* Regional */}
      <section className="py-16 bg-white">
        <div className="apple-container">
          <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-6 text-center">
            More Legal Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Link
              href="/legal/government-information-requests"
              className="p-4 bg-[#f5f5f7] rounded-xl text-center hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-[#1d1d1f] mb-1">Government Requests</h3>
              <p className="text-sm text-[#6e6e73]">Transparency report</p>
            </Link>
            <Link
              href="/legal/law-enforcement"
              className="p-4 bg-[#f5f5f7] rounded-xl text-center hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-[#1d1d1f] mb-1">Law Enforcement</h3>
              <p className="text-sm text-[#6e6e73]">Guidelines for requests</p>
            </Link>
            <Link
              href="/legal/warranty"
              className="p-4 bg-[#f5f5f7] rounded-xl text-center hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-[#1d1d1f] mb-1">Warranty</h3>
              <p className="text-sm text-[#6e6e73]">Hardware warranty info</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-[#f5f5f7] text-center">
        <div className="apple-container">
          <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
            Have a legal question?
          </h2>
          <p className="text-[#6e6e73] mb-6">
            Contact our legal team for inquiries about Apple&apos;s legal matters.
          </p>
          <Link
            href="/legal/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#0071e3] text-white rounded-full font-medium hover:bg-[#0077ed] transition-colors"
          >
            Contact Legal
          </Link>
        </div>
      </section>
    </div>
  )
}
