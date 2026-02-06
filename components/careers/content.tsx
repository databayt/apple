"use client"

import { AppleLink } from "@/components/atom/apple-link"

const teams = [
  {
    name: "Hardware Engineering",
    description: "Design and build the next generation of Apple products.",
    openings: 250,
    icon: "⚙️",
  },
  {
    name: "Software Engineering",
    description: "Create the software that powers every Apple device.",
    openings: 500,
    icon: "💻",
  },
  {
    name: "Machine Learning & AI",
    description: "Develop intelligent features that transform user experiences.",
    openings: 150,
    icon: "🧠",
  },
  {
    name: "Design",
    description: "Shape the look, feel, and experience of Apple products.",
    openings: 75,
    icon: "🎨",
  },
  {
    name: "Retail",
    description: "Deliver amazing experiences at Apple Stores worldwide.",
    openings: 1000,
    icon: "🏪",
  },
  {
    name: "Corporate Functions",
    description: "Support the operations that make Apple possible.",
    openings: 200,
    icon: "📊",
  },
]

const locations = [
  "Cupertino, CA",
  "Austin, TX",
  "Seattle, WA",
  "New York, NY",
  "London, UK",
  "Shanghai, China",
  "Tokyo, Japan",
  "Munich, Germany",
]

export function CareersContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 text-center bg-black text-white">
        <div className="apple-container">
          <h1 className="text-5xl md:text-6xl font-semibold mb-4">
            Join us.
          </h1>
          <p className="text-xl text-[#a1a1a6] max-w-2xl mx-auto">
            Help us leave the world better than we found it.
          </p>
        </div>
      </section>

      {/* Why Apple */}
      <section className="py-16 bg-white">
        <div className="apple-container text-center">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-6">
            Why Apple?
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-3xl mx-auto mb-12">
            At Apple, new ideas have a way of becoming extraordinary products, services, and customer experiences. Bring passion and dedication to your job and there&apos;s no telling what you could accomplish.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">Impact</h3>
              <p className="text-[#6e6e73]">
                Your work will reach billions of people around the world.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">Innovation</h3>
              <p className="text-[#6e6e73]">
                Push the boundaries of what&apos;s possible.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">Inclusion</h3>
              <p className="text-[#6e6e73]">
                Be part of a diverse and welcoming community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10 text-center">
            Explore Teams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team) => (
              <a
                key={team.name}
                href="#"
                className="flex flex-col p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl mb-4">{team.icon}</span>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">
                  {team.name}
                </h3>
                <p className="text-[#6e6e73] mb-4 flex-grow">
                  {team.description}
                </p>
                <p className="text-sm text-[#0071e3]">
                  {team.openings}+ open positions
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-white">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4 text-center">
            Locations
          </h2>
          <p className="text-lg text-[#6e6e73] text-center mb-10">
            With offices around the world, you can find opportunities near you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {locations.map((location) => (
              <span
                key={location}
                className="px-4 py-2 bg-[#f5f5f7] rounded-full text-[#1d1d1f]"
              >
                {location}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container text-center">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-6">
            Benefits
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto mb-8">
            We want to help our employees live their best lives. Our comprehensive benefits program supports you and your family.
          </p>
          <AppleLink href="/careers/us/benefits">View all benefits</AppleLink>
        </div>
      </section>

      {/* Search Jobs */}
      <section className="py-16 bg-black text-white text-center">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold mb-4">
            Find your next role.
          </h2>
          <p className="text-[#a1a1a6] mb-8">
            Search thousands of open positions at Apple.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1d1d1f] rounded-full text-lg font-medium hover:bg-[#f5f5f7] transition-colors"
          >
            Search Jobs
          </a>
        </div>
      </section>
    </div>
  )
}
