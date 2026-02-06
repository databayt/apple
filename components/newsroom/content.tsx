"use client"

import { AppleLink } from "@/components/atom/apple-link"

const featuredStories = [
  {
    title: "Apple introduces iPhone 16 and iPhone 16 Pro",
    date: "September 9, 2024",
    category: "Press Release",
    image: "📱",
  },
  {
    title: "Apple announces Apple Intelligence at WWDC24",
    date: "June 10, 2024",
    category: "Feature Story",
    image: "🧠",
  },
  {
    title: "Apple Watch Series 10 delivers breakthrough health features",
    date: "September 9, 2024",
    category: "Press Release",
    image: "⌚",
  },
]

const categories = [
  "All News",
  "Press Releases",
  "Feature Stories",
  "Updates",
  "Photos & Video",
]

const recentNews = [
  {
    title: "Apple expands self-service repair program",
    date: "January 15, 2025",
  },
  {
    title: "Apple reports Q1 FY25 results",
    date: "January 30, 2025",
  },
  {
    title: "Mac App Store celebrates 15 years",
    date: "January 6, 2025",
  },
  {
    title: "Apple extends recycling programs worldwide",
    date: "December 12, 2024",
  },
]

export function NewsroomContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 text-center bg-[#f5f5f7]">
        <h1 className="text-5xl font-semibold text-[#1d1d1f] mb-4">
          Newsroom
        </h1>
        <p className="text-xl text-[#6e6e73]">
          The latest news and updates from Apple.
        </p>
      </section>

      {/* Categories */}
      <section className="py-6 border-b border-[#d2d2d7]">
        <div className="apple-container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16 bg-white">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10">
            Featured
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <a
                key={story.title}
                href="#"
                className="group"
              >
                <div className="aspect-video bg-[#f5f5f7] rounded-2xl flex items-center justify-center text-6xl mb-4">
                  {story.image}
                </div>
                <p className="text-sm text-[#6e6e73] mb-1">{story.category}</p>
                <h3 className="text-lg font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors mb-2">
                  {story.title}
                </h3>
                <p className="text-sm text-[#6e6e73]">{story.date}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10">
            Recent News
          </h2>
          <div className="space-y-6">
            {recentNews.map((news) => (
              <a
                key={news.title}
                href="#"
                className="flex justify-between items-center py-4 border-b border-[#d2d2d7] group"
              >
                <h3 className="text-lg text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                  {news.title}
                </h3>
                <span className="text-sm text-[#6e6e73]">{news.date}</span>
              </a>
            ))}
          </div>
          <div className="mt-8">
            <AppleLink href="/newsroom/archive">View all news</AppleLink>
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-16 bg-white">
        <div className="apple-container text-center">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Media Resources
          </h2>
          <p className="text-lg text-[#6e6e73] mb-8 max-w-2xl mx-auto">
            Download press images, product photos, executive bios, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="px-6 py-3 bg-[#0071e3] text-white rounded-full font-medium hover:bg-[#0077ed] transition-colors">
              Press Images
            </a>
            <a href="#" className="px-6 py-3 bg-[#f5f5f7] text-[#1d1d1f] rounded-full font-medium hover:bg-[#e8e8ed] transition-colors">
              Executive Bios
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-[#f5f5f7] text-center">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Media Contact
          </h2>
          <p className="text-lg text-[#6e6e73] mb-4">
            For press inquiries, contact Apple Media Helpline.
          </p>
          <p className="text-[#1d1d1f]">media.help@apple.com</p>
        </div>
      </section>
    </div>
  )
}
