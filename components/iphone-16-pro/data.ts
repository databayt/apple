import type { SpecCategory, Feature } from "./types"

export const specs: SpecCategory[] = [
  {
    title: "Display",
    items: [
      { label: "Size", value: '6.3" or 6.9" Super Retina XDR display' },
      { label: "Resolution", value: "2622x1206 or 2868x1320 pixels" },
      { label: "ProMotion", value: "Up to 120Hz adaptive refresh rate" },
      { label: "Always-On display", value: "Yes" },
      { label: "Peak brightness", value: "2000 nits (outdoor)" },
    ],
  },
  {
    title: "Chip",
    items: [
      { label: "Processor", value: "A18 Pro chip" },
      { label: "CPU", value: "6-core CPU (2 performance + 4 efficiency)" },
      { label: "GPU", value: "6-core GPU with hardware-accelerated ray tracing" },
      { label: "Neural Engine", value: "16-core Neural Engine" },
    ],
  },
  {
    title: "Camera",
    items: [
      { label: "Main", value: "48MP Fusion camera with 2nd gen sensor" },
      { label: "Ultra Wide", value: "48MP Ultra Wide camera" },
      { label: "Telephoto", value: "12MP 5x Telephoto camera" },
      { label: "Front", value: "12MP TrueDepth front camera" },
      { label: "Video", value: "4K Dolby Vision up to 120fps" },
    ],
  },
  {
    title: "Battery",
    items: [
      { label: "Video playback", value: "Up to 27 or 33 hours" },
      { label: "Charging", value: "MagSafe, Qi2 wireless, USB-C" },
      { label: "Fast charge", value: "Up to 50% in 30 minutes" },
    ],
  },
  {
    title: "Design",
    items: [
      { label: "Material", value: "Grade 5 Titanium" },
      { label: "Front glass", value: "Ceramic Shield front" },
      { label: "Water resistance", value: "IP68 (6 meters for 30 minutes)" },
      { label: "Colors", value: "Black Titanium, White Titanium, Natural Titanium, Desert Titanium" },
    ],
  },
]

export const features: Feature[] = [
  {
    title: "Apple Intelligence",
    description:
      "The personal intelligence system that helps you write, express yourself, and get things done effortlessly.",
  },
  {
    title: "Camera Control",
    description:
      "A new way to interact with your camera. Press lightly for quick access, press deeper to lock focus and exposure.",
  },
  {
    title: "A18 Pro chip",
    description:
      "The most powerful chip ever in a smartphone. Enables Apple Intelligence and incredible gaming performance.",
  },
  {
    title: "Pro camera system",
    description:
      "48MP Fusion camera, 48MP Ultra Wide, and 5x Telephoto. Capture stunning photos and 4K120 video.",
  },
]

export const pricing = {
  price: "From $999",
  priceNote: "or $41.62/mo. for 24 mo.",
  tradeIn: "$180–$650",
  tradeInNote: "with Apple Trade In",
}
