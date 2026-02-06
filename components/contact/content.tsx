"use client"

import { HeroSection } from "@/components/template/hero-section"
import { FeatureGrid } from "@/components/template/product-detail"

const features = [
  {
    title: "Apple Support",
    description: "Get help online or by phone for all Apple products.",
  },
  {
    title: "Genius Bar",
    description: "Make an appointment at your local Apple Store.",
  },
  {
    title: "Community",
    description: "Ask questions and get answers from Apple users.",
  },
  {
    title: "Feedback",
    description: "Send feedback directly to Apple.",
  },
]

export function ContactContent() {
  return (
    <div className="flex flex-col">
      <HeroSection
        headline="Contact Us"
        subheadline="We're here to help."
        variant="light"
        size="medium"
      />

      <section className="bg-white py-16">
        <div className="apple-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#f5f5f7] rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Get Support</h3>
              <p className="text-[#6e6e73] mb-6">
                Get help with your Apple products from our support team.
              </p>
              <a
                href="https://support.apple.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#0071e3] text-white rounded-full font-medium hover:bg-[#0077ed] transition-colors"
              >
                Apple Support
              </a>
            </div>

            <div className="bg-[#f5f5f7] rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Find a Store</h3>
              <p className="text-[#6e6e73] mb-6">
                Visit an Apple Store for hands-on help.
              </p>
              <a
                href="/retail/storelist"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#0071e3] text-white rounded-full font-medium hover:bg-[#0077ed] transition-colors"
              >
                Store Locator
              </a>
            </div>

            <div className="bg-[#f5f5f7] rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Call Us</h3>
              <p className="text-[#6e6e73] mb-6">
                Speak with an Apple support representative.
              </p>
              <a
                href="tel:1-800-275-2273"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#0071e3] text-white rounded-full font-medium hover:bg-[#0077ed] transition-colors"
              >
                1-800-275-2273
              </a>
            </div>

            <div className="bg-[#f5f5f7] rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Feedback</h3>
              <p className="text-[#6e6e73] mb-6">
                Send us your feedback and suggestions.
              </p>
              <a
                href="https://www.apple.com/feedback"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#0071e3] text-white rounded-full font-medium hover:bg-[#0077ed] transition-colors"
              >
                Submit Feedback
              </a>
            </div>
          </div>
        </div>
      </section>

      <FeatureGrid features={features} variant="gray" columns={4} />
    </div>
  )
}
