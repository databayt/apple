"use client"

const regions = [
  {
    name: "United States",
    storeCount: 270,
    cities: ["New York", "Los Angeles", "Chicago", "Houston", "San Francisco", "Seattle"],
  },
  {
    name: "China",
    storeCount: 54,
    cities: ["Shanghai", "Beijing", "Shenzhen", "Guangzhou", "Chengdu", "Hangzhou"],
  },
  {
    name: "United Kingdom",
    storeCount: 40,
    cities: ["London", "Manchester", "Birmingham", "Edinburgh", "Glasgow", "Liverpool"],
  },
  {
    name: "Japan",
    storeCount: 10,
    cities: ["Tokyo", "Osaka", "Nagoya", "Fukuoka", "Kyoto", "Yokohama"],
  },
  {
    name: "Australia",
    storeCount: 22,
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra"],
  },
  {
    name: "Canada",
    storeCount: 28,
    cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa", "Edmonton"],
  },
]

const featuredStores = [
  {
    name: "Apple Fifth Avenue",
    location: "New York, NY",
    image: "🏙️",
    feature: "Open 24/7",
  },
  {
    name: "Apple Park Visitor Center",
    location: "Cupertino, CA",
    image: "🍎",
    feature: "Experience Apple Park",
  },
  {
    name: "Apple Regent Street",
    location: "London, UK",
    image: "🇬🇧",
    feature: "Iconic location",
  },
]

export function StoreListContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 text-center bg-[#f5f5f7]">
        <h1 className="text-5xl font-semibold text-[#1d1d1f] mb-4">
          Find a Store
        </h1>
        <p className="text-xl text-[#6e6e73]">
          Visit any of our 500+ stores worldwide.
        </p>
      </section>

      {/* Search */}
      <section className="py-8 border-b border-[#d2d2d7]">
        <div className="apple-container">
          <div className="max-w-lg mx-auto">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter city, zip code, or address"
                className="flex-1 px-4 py-3 rounded-lg border border-[#d2d2d7] focus:outline-none focus:border-[#0071e3]"
              />
              <button className="px-6 py-3 bg-[#0071e3] text-white rounded-lg font-medium hover:bg-[#0077ed] transition-colors">
                Search
              </button>
            </div>
            <button className="mt-3 text-sm text-[#0071e3] hover:underline flex items-center gap-1 mx-auto">
              <span>📍</span> Use my current location
            </button>
          </div>
        </div>
      </section>

      {/* Featured Stores */}
      <section className="py-16 bg-white">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10 text-center">
            Featured Stores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStores.map((store) => (
              <a
                key={store.name}
                href="#"
                className="flex flex-col items-center p-8 bg-[#f5f5f7] rounded-2xl hover:shadow-lg transition-shadow"
              >
                <span className="text-6xl mb-4">{store.image}</span>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-1">
                  {store.name}
                </h3>
                <p className="text-[#6e6e73] mb-2">{store.location}</p>
                <span className="text-sm text-[#0071e3]">{store.feature}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Region */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10 text-center">
            Browse by Region
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region) => (
              <div key={region.name} className="p-6 bg-white rounded-2xl">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-[#1d1d1f]">
                    {region.name}
                  </h3>
                  <span className="text-sm text-[#6e6e73]">
                    {region.storeCount} stores
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {region.cities.map((city) => (
                    <a
                      key={city}
                      href="#"
                      className="text-sm text-[#0071e3] hover:underline"
                    >
                      {city}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="apple-container text-center">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            What you&apos;ll find at an Apple Store
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
            <div>
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Shop</h3>
              <p className="text-sm text-[#6e6e73]">
                Get the products you love with personalized help.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Genius Bar</h3>
              <p className="text-sm text-[#6e6e73]">
                Get expert help and hardware service.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Today at Apple</h3>
              <p className="text-sm text-[#6e6e73]">
                Join free creative sessions.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">📦</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Pickup</h3>
              <p className="text-sm text-[#6e6e73]">
                Order online and pick up in store.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f5f5f7] text-center">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Make a reservation.
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto mb-8">
            Schedule a shopping appointment or get Genius Bar support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="px-8 py-4 bg-[#0071e3] text-white rounded-full text-lg font-medium hover:bg-[#0077ed] transition-colors"
            >
              Book Genius Bar
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-white text-[#1d1d1f] rounded-full text-lg font-medium border border-[#d2d2d7] hover:bg-[#f5f5f7] transition-colors"
            >
              Schedule Shopping
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
