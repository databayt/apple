"use client"

import { AppleLink } from "@/components/atom/apple-link"

const products = [
  {
    name: "iPad",
    description: "A powerful learning device that inspires creativity.",
    icon: "📋",
    price: "From $299 for education",
  },
  {
    name: "Mac",
    description: "The computer for university and beyond.",
    icon: "💻",
    price: "From $899 for education",
  },
  {
    name: "Apple Pencil",
    description: "Perfect for notes, art, and everything in between.",
    icon: "✏️",
    price: "From $79",
  },
]

const resources = [
  {
    title: "Everyone Can Code",
    description: "Free curriculum to teach coding with Swift.",
    icon: "💻",
  },
  {
    title: "Everyone Can Create",
    description: "Free guides to spark creativity in every subject.",
    icon: "🎨",
  },
  {
    title: "Apple Teacher",
    description: "Free professional learning program.",
    icon: "📚",
  },
  {
    title: "Schoolwork",
    description: "Powerful tools for teachers to manage assignments.",
    icon: "📝",
  },
]

export function EducationContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 text-center bg-gradient-to-b from-[#00c853] to-[#64dd17]">
        <div className="apple-container">
          <h1 className="text-5xl md:text-6xl font-semibold text-white mb-4">
            Education
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Apple technology empowers educators and inspires students to learn in new ways.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white text-center">
        <div className="apple-container">
          <p className="text-lg text-[#6e6e73] max-w-3xl mx-auto">
            We believe technology has the power to transform learning. That&apos;s why we create products, provide professional learning for educators, and develop free resources that help bring creativity and critical thinking into every lesson.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10 text-center">
            Products for Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="flex flex-col items-center p-8 bg-white rounded-2xl"
              >
                <span className="text-5xl mb-4">{product.icon}</span>
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">
                  {product.name}
                </h3>
                <p className="text-[#6e6e73] text-center mb-4">{product.description}</p>
                <p className="text-sm font-medium text-[#1d1d1f]">{product.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <AppleLink href="/us-edu/shop">Shop for education</AppleLink>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-white">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10 text-center">
            Free Resources for Educators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <a
                key={resource.title}
                href="#"
                className="flex gap-4 p-6 bg-[#f5f5f7] rounded-2xl hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl">{resource.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-[#6e6e73]">{resource.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Higher Ed */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container text-center">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            College Students
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto mb-8">
            Save on Mac and iPad with education pricing. Plus get AppleCare+ at a discount.
          </p>
          <a
            href="/us-edu/shop"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#0071e3] text-white rounded-full text-lg font-medium hover:bg-[#0077ed] transition-colors"
          >
            Shop for College
          </a>
        </div>
      </section>

      {/* K-12 */}
      <section className="py-16 bg-white text-center">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            K-12 Schools
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto mb-8">
            Discover solutions for classrooms, including volume purchasing and Apple School Manager.
          </p>
          <AppleLink href="/education/k12">Learn about K-12 solutions</AppleLink>
        </div>
      </section>

      {/* IT */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container text-center">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            For IT Administrators
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto mb-8">
            Deploy and manage Apple devices at scale with powerful tools designed for education.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AppleLink href="/education/it">Apple School Manager</AppleLink>
            <AppleLink href="/education/docs">Deployment guides</AppleLink>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white text-center">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Talk to an education specialist.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-8">
            Call 1-800-800-2775 or find a local store.
          </p>
          <AppleLink href="/retail">Find a store</AppleLink>
        </div>
      </section>
    </div>
  )
}
