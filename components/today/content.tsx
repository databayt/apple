"use client"

import { AppleLink } from "@/components/atom/apple-link"

const sessionTypes = [
  {
    name: "Photo & Video",
    description: "Master iPhone photography and video editing.",
    icon: "📸",
    sessions: ["iPhone Photography", "Video Editing with iMovie", "Portrait Mode Techniques"],
  },
  {
    name: "Music",
    description: "Create beats and songs with GarageBand.",
    icon: "🎵",
    sessions: ["Making Music with GarageBand", "DJ Basics", "Songwriting Workshop"],
  },
  {
    name: "Art & Design",
    description: "Express yourself with digital art tools.",
    icon: "🎨",
    sessions: ["Drawing with iPad", "Design in Keynote", "Procreate Basics"],
  },
  {
    name: "Coding & Apps",
    description: "Learn to code and build apps.",
    icon: "💻",
    sessions: ["Swift Playgrounds", "Everyone Can Code", "App Prototyping"],
  },
  {
    name: "Health & Fitness",
    description: "Get more from Apple Watch and Health app.",
    icon: "❤️",
    sessions: ["Apple Watch Fitness Tour", "Mindfulness with Apple Watch", "Tracking Your Health"],
  },
  {
    name: "Photo Walks",
    description: "Explore your city while learning photography.",
    icon: "🚶",
    sessions: ["Neighborhood Photo Walk", "Urban Photography", "Golden Hour Shots"],
  },
]

const featuredSessions = [
  {
    title: "Today at Apple Creative Studios",
    description: "A program for young creatives in underserved communities.",
    icon: "🌟",
  },
  {
    title: "Apple Camp",
    description: "Free summer sessions for kids ages 8-12.",
    icon: "🏕️",
  },
  {
    title: "Teacher Tuesdays",
    description: "Sessions designed for educators.",
    icon: "📚",
  },
]

export function TodayContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 text-center bg-black text-white">
        <div className="apple-container">
          <h1 className="text-5xl md:text-6xl font-semibold mb-4">
            Today at Apple
          </h1>
          <p className="text-xl text-[#a1a1a6] max-w-2xl mx-auto">
            Free sessions to help you go further with the products you love.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="apple-container text-center">
          <p className="text-lg text-[#6e6e73] max-w-3xl mx-auto">
            Every day, Apple Stores around the world host free sessions where you can learn new skills, get creative, and connect with others. From photography and music to coding and design, there&apos;s something for everyone.
          </p>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10 text-center">
            Discover Sessions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sessionTypes.map((type) => (
              <div
                key={type.name}
                className="p-6 bg-white rounded-2xl"
              >
                <span className="text-4xl">{type.icon}</span>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mt-4 mb-2">
                  {type.name}
                </h3>
                <p className="text-[#6e6e73] mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.sessions.map((session) => (
                    <li key={session}>
                      <a href="#" className="text-sm text-[#0071e3] hover:underline">
                        {session}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-white">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10 text-center">
            Featured Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSessions.map((program) => (
              <a
                key={program.title}
                href="#"
                className="p-8 bg-[#f5f5f7] rounded-2xl text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-5xl">{program.icon}</span>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mt-4 mb-2">
                  {program.title}
                </h3>
                <p className="text-[#6e6e73]">{program.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Find a Store */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container text-center">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Find sessions near you.
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto mb-8">
            Enter your city to see what&apos;s happening at your local Apple Store.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter city or zip code"
                className="flex-1 px-4 py-3 rounded-lg border border-[#d2d2d7] focus:outline-none focus:border-[#0071e3]"
              />
              <button className="px-6 py-3 bg-[#0071e3] text-white rounded-lg font-medium hover:bg-[#0077ed] transition-colors">
                Search
              </button>
            </div>
          </div>
          <div className="mt-6">
            <AppleLink href="/retail">Find an Apple Store</AppleLink>
          </div>
        </div>
      </section>

      {/* Virtual Sessions */}
      <section className="py-16 bg-white text-center">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Can&apos;t make it in person?
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto mb-8">
            Join virtual sessions from anywhere. Learn live from Apple Creatives.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#0071e3] text-white rounded-full text-lg font-medium hover:bg-[#0077ed] transition-colors"
          >
            Browse Virtual Sessions
          </a>
        </div>
      </section>

      {/* Sign Up */}
      <section className="py-16 bg-black text-white text-center">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to get started?
          </h2>
          <p className="text-[#a1a1a6] mb-8">
            Sign up for sessions in the Apple Store app.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1d1d1f] rounded-full text-lg font-medium hover:bg-[#f5f5f7] transition-colors"
          >
            Get the Apple Store App
          </a>
        </div>
      </section>
    </div>
  )
}
