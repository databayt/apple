import type { NavItem } from "./types"

export const APPLE_NAV_ITEMS: NavItem[] = [
  {
    label: "Store",
    href: "/shop",
    dropdown: {
      columns: [
        {
          title: "Shop",
          items: [
            { label: "Shop the Latest", href: "/shop/buy" },
            { label: "Mac", href: "/shop/buy-mac" },
            { label: "iPad", href: "/shop/buy-ipad" },
            { label: "iPhone", href: "/shop/buy-iphone" },
            { label: "Apple Watch", href: "/shop/buy-watch" },
            { label: "Apple Vision Pro", href: "/shop/buy-vision" },
            { label: "Accessories", href: "/shop/accessories" },
          ],
        },
        {
          title: "Quick Links",
          items: [
            { label: "Find a Store", href: "/retail" },
            { label: "Order Status", href: "/shop/order/list" },
            { label: "Apple Trade In", href: "/shop/trade-in" },
            { label: "Financing", href: "/shop/browse/financing" },
          ],
        },
        {
          title: "Shop Special Stores",
          items: [
            { label: "Certified Refurbished", href: "/shop/refurbished" },
            { label: "Education", href: "/us-edu/shop" },
            { label: "Business", href: "/business" },
            { label: "Veterans and Military", href: "/us-military" },
            { label: "Government", href: "/us-gov" },
          ],
        },
      ],
    },
  },
  {
    label: "Mac",
    href: "/mac",
    dropdown: {
      columns: [
        {
          title: "Explore Mac",
          items: [
            { label: "Explore All Mac", href: "/mac" },
            { label: "MacBook Air", href: "/macbook-air" },
            { label: "MacBook Pro", href: "/macbook-pro" },
            { label: "iMac", href: "/imac" },
            { label: "Mac mini", href: "/mac-mini" },
            { label: "Mac Studio", href: "/mac-studio" },
            { label: "Mac Pro", href: "/mac-pro" },
            { label: "Displays", href: "/displays" },
          ],
        },
        {
          title: "Shop Mac",
          items: [
            { label: "Shop Mac", href: "/shop/buy-mac" },
            { label: "Mac Accessories", href: "/shop/mac/accessories" },
            { label: "Apple Trade In", href: "/shop/trade-in" },
            { label: "Financing", href: "/shop/browse/financing" },
          ],
        },
        {
          title: "More from Mac",
          items: [
            { label: "Mac Support", href: "/support/mac" },
            { label: "AppleCare+ for Mac", href: "/support/products/mac" },
            { label: "macOS Sequoia", href: "/macos/sequoia" },
            { label: "Apps by Apple", href: "/apps" },
            { label: "Continuity", href: "/macos/continuity" },
            { label: "iCloud+", href: "/icloud" },
            { label: "Mac for Business", href: "/business/mac" },
            { label: "Education", href: "/education" },
          ],
        },
      ],
    },
  },
  {
    label: "iPad",
    href: "/ipad",
    dropdown: {
      columns: [
        {
          title: "Explore iPad",
          items: [
            { label: "Explore All iPad", href: "/ipad" },
            { label: "iPad Pro", href: "/ipad-pro" },
            { label: "iPad Air", href: "/ipad-air" },
            { label: "iPad", href: "/ipad-10.9" },
            { label: "iPad mini", href: "/ipad-mini" },
            { label: "Apple Pencil", href: "/apple-pencil" },
            { label: "Keyboards", href: "/ipad-keyboards" },
          ],
        },
        {
          title: "Shop iPad",
          items: [
            { label: "Shop iPad", href: "/shop/buy-ipad" },
            { label: "iPad Accessories", href: "/shop/ipad/accessories" },
            { label: "Apple Trade In", href: "/shop/trade-in" },
            { label: "Financing", href: "/shop/browse/financing" },
          ],
        },
        {
          title: "More from iPad",
          items: [
            { label: "iPad Support", href: "/support/ipad" },
            { label: "AppleCare+ for iPad", href: "/support/products/ipad" },
            { label: "iPadOS 18", href: "/ipados/ipados-18" },
            { label: "Apps by Apple", href: "/apps" },
            { label: "iCloud+", href: "/icloud" },
            { label: "Education", href: "/education" },
          ],
        },
      ],
    },
  },
  {
    label: "iPhone",
    href: "/iphone",
    dropdown: {
      columns: [
        {
          title: "Explore iPhone",
          items: [
            { label: "Explore All iPhone", href: "/iphone" },
            { label: "iPhone 16 Pro", href: "/iphone-16-pro" },
            { label: "iPhone 16", href: "/iphone-16" },
            { label: "iPhone 16e", href: "/iphone-16e", isNew: true },
            { label: "iPhone 15", href: "/iphone-15" },
            { label: "iPhone 14", href: "/iphone-14" },
            { label: "Compare iPhone", href: "/iphone/compare" },
            { label: "Switch from Android", href: "/iphone/switch" },
          ],
        },
        {
          title: "Shop iPhone",
          items: [
            { label: "Shop iPhone", href: "/shop/buy-iphone" },
            { label: "iPhone Accessories", href: "/shop/iphone/accessories" },
            { label: "Apple Trade In", href: "/shop/trade-in" },
            { label: "Carrier Deals at Apple", href: "/shop/iphone/carrier-offers" },
            { label: "Financing", href: "/shop/browse/financing" },
          ],
        },
        {
          title: "More from iPhone",
          items: [
            { label: "iPhone Support", href: "/support/iphone" },
            { label: "AppleCare+ for iPhone", href: "/support/products/iphone" },
            { label: "iOS 18", href: "/ios/ios-18" },
            { label: "Apple Intelligence", href: "/apple-intelligence" },
            { label: "Apps by Apple", href: "/apps" },
            { label: "iPhone Privacy", href: "/privacy" },
            { label: "iCloud+", href: "/icloud" },
            { label: "Wallet, Pay, Card", href: "/wallet" },
            { label: "Siri", href: "/siri" },
          ],
        },
      ],
    },
  },
  {
    label: "Watch",
    href: "/watch",
    dropdown: {
      columns: [
        {
          title: "Explore Watch",
          items: [
            { label: "Explore All Apple Watch", href: "/watch" },
            { label: "Apple Watch Series 10", href: "/apple-watch-series-10" },
            { label: "Apple Watch Ultra 2", href: "/apple-watch-ultra-2" },
            { label: "Apple Watch SE", href: "/apple-watch-se" },
            { label: "Apple Watch Nike", href: "/apple-watch-nike" },
            { label: "Apple Watch Hermès", href: "/apple-watch-hermes" },
            { label: "Compare Watch", href: "/watch/compare" },
            { label: "Why Apple Watch", href: "/watch/why-apple-watch" },
          ],
        },
        {
          title: "Shop Watch",
          items: [
            { label: "Shop Apple Watch", href: "/shop/buy-watch" },
            { label: "Apple Watch Studio", href: "/shop/studio/apple-watch" },
            { label: "Apple Watch Bands", href: "/shop/watch/bands" },
            { label: "Apple Watch Accessories", href: "/shop/watch/accessories" },
            { label: "Apple Trade In", href: "/shop/trade-in" },
            { label: "Financing", href: "/shop/browse/financing" },
          ],
        },
        {
          title: "More from Watch",
          items: [
            { label: "Apple Watch Support", href: "/support/watch" },
            { label: "AppleCare+", href: "/support/products/watch" },
            { label: "watchOS 11", href: "/watchos/watchos-11" },
            { label: "Apple Fitness+", href: "/apple-fitness-plus" },
          ],
        },
      ],
    },
  },
  {
    label: "Vision",
    href: "/apple-vision-pro",
    dropdown: {
      columns: [
        {
          title: "Explore Vision",
          items: [
            { label: "Explore Apple Vision Pro", href: "/apple-vision-pro" },
            { label: "Guided Tour", href: "/apple-vision-pro/guided-tour" },
            { label: "Tech Specs", href: "/apple-vision-pro/specs" },
          ],
        },
        {
          title: "Shop Vision",
          items: [
            { label: "Shop Apple Vision Pro", href: "/shop/buy-vision" },
            { label: "Apple Vision Pro Accessories", href: "/shop/vision/accessories" },
            { label: "Book a Demo", href: "/retail/instore-shopping-sessions/apple-vision-pro" },
            { label: "Financing", href: "/shop/browse/financing" },
          ],
        },
        {
          title: "More from Vision",
          items: [
            { label: "Apple Vision Pro Support", href: "/support/apple-vision-pro" },
            { label: "AppleCare+", href: "/support/products/apple-vision-pro" },
            { label: "visionOS 2", href: "/visionos" },
          ],
        },
      ],
    },
  },
  {
    label: "AirPods",
    href: "/airpods",
    dropdown: {
      columns: [
        {
          title: "Explore AirPods",
          items: [
            { label: "Explore All AirPods", href: "/airpods" },
            { label: "AirPods 4", href: "/airpods-4" },
            { label: "AirPods Pro 2", href: "/airpods-pro" },
            { label: "AirPods Max", href: "/airpods-max" },
            { label: "Compare AirPods", href: "/airpods/compare" },
          ],
        },
        {
          title: "Shop AirPods",
          items: [
            { label: "Shop AirPods", href: "/shop/accessories/all/airpods" },
            { label: "AirPods Accessories", href: "/shop/accessories/all/airpods-accessories" },
          ],
        },
        {
          title: "More from AirPods",
          items: [
            { label: "AirPods Support", href: "/support/airpods" },
            { label: "AppleCare+ for Headphones", href: "/support/products/headphones" },
            { label: "Hearing Health", href: "/airpods/hearing-health" },
            { label: "Apple Music", href: "/apple-music" },
          ],
        },
      ],
    },
  },
  {
    label: "TV & Home",
    href: "/tv-home",
    dropdown: {
      columns: [
        {
          title: "Explore TV & Home",
          items: [
            { label: "Explore TV & Home", href: "/tv-home" },
            { label: "Apple TV 4K", href: "/apple-tv-4k" },
            { label: "HomePod", href: "/homepod" },
            { label: "HomePod mini", href: "/homepod-mini" },
          ],
        },
        {
          title: "Shop TV & Home",
          items: [
            { label: "Shop Apple TV 4K", href: "/shop/buy-tv/apple-tv-4k" },
            { label: "Shop HomePod", href: "/shop/buy-homepod/homepod" },
            { label: "Shop HomePod mini", href: "/shop/buy-homepod/homepod-mini" },
            { label: "Shop Siri Remote", href: "/shop/product/MXX02LL/A" },
            { label: "TV & Home Accessories", href: "/shop/smart-home/accessories" },
          ],
        },
        {
          title: "More from TV & Home",
          items: [
            { label: "Apple TV Support", href: "/support/apple-tv" },
            { label: "HomePod Support", href: "/support/homepod" },
            { label: "AppleCare+", href: "/support/products/appletv" },
            { label: "Apple TV app", href: "/apple-tv-app" },
            { label: "Apple TV+", href: "/apple-tv-plus" },
            { label: "Home app", href: "/home-app" },
            { label: "Apple Music", href: "/apple-music" },
            { label: "Siri", href: "/siri" },
            { label: "AirPlay", href: "/airplay" },
          ],
        },
      ],
    },
  },
  {
    label: "Entertainment",
    href: "/services",
    dropdown: {
      columns: [
        {
          title: "Explore Entertainment",
          items: [
            { label: "Explore Entertainment", href: "/services" },
            { label: "Apple One", href: "/apple-one" },
            { label: "Apple TV+", href: "/apple-tv-plus" },
            { label: "Apple Music", href: "/apple-music" },
            { label: "Apple Arcade", href: "/apple-arcade" },
            { label: "Apple Fitness+", href: "/apple-fitness-plus" },
            { label: "Apple News+", href: "/apple-news" },
            { label: "Apple Podcasts", href: "/apple-podcasts" },
            { label: "Apple Books", href: "/apple-books" },
            { label: "App Store", href: "/app-store" },
          ],
        },
        {
          title: "Support",
          items: [
            { label: "Apple TV+ Support", href: "/support/apple-tv-plus" },
            { label: "Apple Music Support", href: "/support/apple-music" },
          ],
        },
      ],
    },
  },
  {
    label: "Accessories",
    href: "/shop/accessories/all",
    dropdown: {
      columns: [
        {
          title: "Shop Accessories",
          items: [
            { label: "Shop All Accessories", href: "/shop/accessories/all" },
            { label: "Mac", href: "/shop/mac/accessories" },
            { label: "iPad", href: "/shop/ipad/accessories" },
            { label: "iPhone", href: "/shop/iphone/accessories" },
            { label: "Apple Watch", href: "/shop/watch/accessories" },
            { label: "Apple Vision Pro", href: "/shop/vision/accessories" },
            { label: "AirPods", href: "/shop/accessories/all/airpods" },
            { label: "TV & Home", href: "/shop/smart-home/accessories" },
          ],
        },
        {
          title: "Explore Accessories",
          items: [
            { label: "Made by Apple", href: "/shop/accessories/all/made-by-apple" },
            { label: "Beats by Dr. Dre", href: "/shop/accessories/all/beats" },
            { label: "AirTag", href: "/airtag" },
          ],
        },
      ],
    },
  },
  {
    label: "Support",
    href: "/support",
    dropdown: {
      columns: [
        {
          title: "Explore Support",
          items: [
            { label: "iPhone", href: "/support/iphone" },
            { label: "Mac", href: "/support/mac" },
            { label: "iPad", href: "/support/ipad" },
            { label: "Watch", href: "/support/watch" },
            { label: "Apple Vision Pro", href: "/support/apple-vision-pro" },
            { label: "AirPods", href: "/support/airpods" },
            { label: "Music", href: "/support/music" },
            { label: "TV", href: "/support/apple-tv" },
          ],
        },
        {
          title: "Get Help",
          items: [
            { label: "Community", href: "/support/community" },
            { label: "Check Coverage", href: "/support/coverage" },
            { label: "Repair", href: "/support/repair" },
            { label: "Contact Us", href: "/contact" },
          ],
        },
        {
          title: "Helpful Topics",
          items: [
            { label: "Get AppleCare+", href: "/support/products" },
            { label: "Apple ID & Password", href: "/support/apple-id" },
            { label: "Billing & Subscriptions", href: "/support/billing" },
            { label: "Find My", href: "/support/find-my" },
            { label: "Accessibility", href: "/support/accessibility" },
          ],
        },
      ],
    },
  },
]

export const APPLE_SEARCH_SUGGESTIONS = [
  "AirPods",
  "Store locations",
  "Apple Trade In",
  "iPhone",
  "iPad",
  "MacBook",
]
