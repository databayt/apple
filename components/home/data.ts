import type { Dictionary } from "@/components/local/dictionaries"

/**
 * Exact content model of the live apple.com homepage (mirrors the real
 * sections, tiles, copy keys, images, and links). Text lives in the
 * dictionaries; this file carries the structural data only.
 */

const APPLE = "https://www.apple.com"

/** Apple serves three art-directed crops per tile: small / medium / large. */
export type ImgSize = "small" | "medium" | "large"
export const imgSrc = (base: string, size: string) => `${APPLE}${base}_${size}.jpg`

/**
 * The mzstatic CDN encodes the crop size in the path (`/980x522sr.jpg`). Swap
 * that token to request other widths so each viewport/DPR downloads an
 * appropriately sized image instead of one fixed ~980px JPEG everywhere.
 * Heights track the stored crop's aspect ratio. Returns `undefined` for URLs
 * that don't carry a size token (left to plain `src`).
 */
const MZ_SIZE = /\/(\d+)x(\d+)(sr|nr)?\.jpg/
const GALLERY_WIDTHS = [560, 688, 930, 1376, 1860]
export function gallerySrcSet(url: string): string | undefined {
  const m = url.match(MZ_SIZE)
  if (!m) return undefined
  const ratio = Number(m[2]) / Number(m[1])
  const suffix = m[3] ?? ""
  return GALLERY_WIDTHS.map(
    (w) =>
      `${url.replace(MZ_SIZE, `/${w}x${Math.round(w * ratio)}${suffix}.jpg`)} ${w}w`
  ).join(", ")
}

/** Tile slot widths per breakpoint, matching the `--mg-tile-w` CSS variable. */
export const GALLERY_SIZES =
  "(max-width: 734px) calc(100vw - 48px), (max-width: 1068px) 688px, 930px"

/** Keys of the `home` dictionary section that map to a tile (everything but the gallery headline). */
export type HomeTileKey = Exclude<keyof Dictionary["home"], "entertainment">

export interface CTA {
  labelKey: keyof Dictionary["common"]
  href: string
  variant: "primary" | "secondary"
  external?: boolean
}

export interface Tile {
  id: string
  dictKey: HomeTileKey
  theme: "light" | "dark"
  /** Apple CDN image base path; `imgSrc()` appends `_{size}.jpg`. */
  img: string
  alt: string
  /** Render the Apple logo glyph before the headline (e.g.  Privacy). */
  appleLogo?: boolean
  /** Italicize the last word of the headline (the iPad Air wordmark). */
  italicLastWord?: boolean
  ctas: CTA[]
  tileId?: string
  componentList?: string
  sectionEngagement?: string
}

/** Full-bleed stacked hero sections. */
export const heroes: Tile[] = [
  {
    id: "iphone-17-pro",
    dictKey: "iphone17Pro",
    theme: "dark",
    img: "/v/home/images/iphone-17-pro/a/hero_iphone_17_pro__dbaaq3mt8u2q",
    alt: "iPhone 17 Pro in cosmic orange finish, Pro Fusion camera system, 3 lenses, microphone, flash",
    ctas: [
      { labelKey: "learnMore", href: "/iphone-17-pro", variant: "primary" },
      { labelKey: "buy", href: "/store/buy-iphone", variant: "secondary" },
    ],
    tileId: "iphone-17-pro",
    sectionEngagement: "name:hero-iphone-17-pro",
  },
  {
    id: "iphone-17",
    dictKey: "iphone17",
    theme: "light",
    img: "/v/home/images/iphone-17/a/hero_iphone_17__ekga3xh1n5aq",
    alt: "iPhone 17 in all 5 finishes, fanned out side view",
    ctas: [
      { labelKey: "learnMore", href: "/iphone-17", variant: "primary" },
      { labelKey: "buy", href: "/store/buy-iphone", variant: "secondary" },
    ],
    tileId: "iphone-17",
    sectionEngagement: "name:hero-iphone-17",
  },
  {
    id: "macbook-air",
    dictKey: "macbookAir",
    theme: "light",
    img: "/v/home/images/macbook-air-m5/a/hero_macbook_air_m5__eb1idggd120y",
    alt: "Two open MacBook Air laptops in sky blue color forming arrow shape, emphasizing narrow profile",
    ctas: [
      { labelKey: "learnMore", href: "/macbook-air", variant: "primary" },
      { labelKey: "buy", href: "/store/buy-mac", variant: "secondary" },
    ],
    tileId: "macbook-air-m5",
    sectionEngagement: "name:hero-macbook-air-m5",
  },
]

/** 2-column promo grid (12px gutters, sharp corners, full-bleed product art). */
export const promos: Tile[] = [
  {
    id: "ipad-air",
    dictKey: "ipadAir",
    theme: "light",
    italicLastWord: true,
    img: "/v/home/images/ipad-air-m4/a/promo_ipad_air_m4__bgcv7t286k8y",
    alt: "iPad Air models floating, back exterior, single-lens camera, front exterior, rounded corners, black display bezel",
    ctas: [
      { labelKey: "learnMore", href: "/ipad-air", variant: "primary" },
      { labelKey: "buy", href: "/store/buy-ipad", variant: "secondary" },
    ],
  },
  {
    id: "macbook-pro",
    dictKey: "macbookPro",
    theme: "dark",
    img: "/v/home/images/macbook-pro/a/promo_macbook_pro__c9td9w1mc8ia",
    alt: "MacBook Pro positioned into the shape of a V, referencing the M5 chip family",
    ctas: [
      { labelKey: "learnMore", href: "/macbook-pro", variant: "primary" },
      { labelKey: "buy", href: "/store/buy-mac", variant: "secondary" },
    ],
  },
  {
    id: "airpods-pro-3",
    dictKey: "airpodsPro3",
    theme: "dark",
    img: "/v/home/images/airpods-pro-3/a/promo_airpods_pro_3_wc__dtqp7mcsx0a6",
    alt: "Person wearing white shirt, head turned to the side, left AirPods Pro 3 earbud visible",
    ctas: [
      { labelKey: "learnMore", href: "/airpods-pro", variant: "primary" },
      { labelKey: "buy", href: "/store/buy-airpods", variant: "secondary" },
    ],
  },
  {
    id: "apple-watch-series-11",
    dictKey: "appleWatchSeries11",
    theme: "light",
    appleLogo: true,
    img: "/v/home/images/apple-watch-series-11/a/promo_apple_watch_series_11__gnlwqxe1jlu2",
    alt: "Apple Watch Series 11, rose gold color, aluminum case, sleep score, right side exterior, Digital Crown, microphone, side button, starlight Sport Band",
    ctas: [
      { labelKey: "learnMore", href: "/apple-watch-series-11", variant: "primary" },
      { labelKey: "buy", href: "/store/buy-watch", variant: "secondary" },
    ],
  },
  {
    id: "trade-in",
    dictKey: "tradeIn",
    theme: "light",
    appleLogo: true,
    img: "/v/home/images/iphone-tradein/a/promo_iphone_tradein__e4hrjxmgmf0i",
    alt: "Side-by-side, hand holding iPhone 13 in silicon case with stickers on back exterior, trade-in with hand holding new iPhone box for iPhone 17 Pro",
    ctas: [{ labelKey: "getYourEstimate", href: "/store/trade-in", variant: "primary" }],
  },
  {
    id: "apple-card",
    dictKey: "appleCard",
    theme: "light",
    appleLogo: true,
    img: "/v/home/images/apple-card/a/promo_apple_card__d8xz4kd4evwy",
    alt: "Apple Card, front, Apple logo in top left, cardholder name in middle left Marisa Robertson, card chip in middle right.",
    ctas: [
      { labelKey: "learnMore", href: "/apple-card", variant: "primary" },
      {
        labelKey: "applyNow",
        href: "https://card.apple.com/apply/application?referrer=cid%3Dapy-200-10000036&start=false",
        variant: "secondary",
        external: true,
      },
    ],
  },
]

/** "Endless entertainment." — Apple TV+/Music/Arcade/Fitness+ scroll gallery. */
export interface GalleryItem {
  tag: string
  title: string
  ctaKey: keyof Dictionary["common"]
  img: string
  href: string
}

export const galleryItems: GalleryItem[] = [
  {
    tag: "Major League Baseball",
    title: "Live MLB games, every Friday.",
    ctaKey: "seeTheSchedule",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/33/9e/cf/339ecfe7-f515-8594-2e48-d991803409ea/5a944fdc-acd7-47a8-89e7-274d84cf4276.png/980x522sr.jpg",
    href: "https://tv.apple.com/us/room/friday-night-baseball/edt.item.62327df1-6874-470e-98b2-a5bbeac509a2",
  },
  {
    tag: "Drama",
    title: "Sugar — new season.",
    ctaKey: "streamNow",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Hm4A4O3VorNjFFadQnyhcA/980x522sr.jpg",
    href: "https://tv.apple.com/us/show/sugar/umc.cmc.4r6q7tdquewehwvb3rzl0k3dt",
  },
  {
    tag: "F1 on Apple TV",
    title: "Every Grand Prix™, live and on demand.",
    ctaKey: "streamNow",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/11/cd/47/11cd47ca-af61-71a8-6b02-4a0af9d55077/a54b4338-9340-422f-b5c6-1420bf850b01.png/980x522sr.jpg",
    href: "https://tv.apple.com/us/room/formula-1/uts.room.formula-1",
  },
  {
    tag: "Thriller",
    title: "Cape Fear — fear takes hold.",
    ctaKey: "streamNow",
    img: "https://is1-ssl.mzstatic.com/image/thumb/qkaEsaFl5id_Gx38S0IVLw/980x522sr.jpg",
    href: "https://tv.apple.com/us/show/cape-fear/umc.cmc.377zdzwefgtzkvykexeca9qrc",
  },
  {
    tag: "MLS Season Pass",
    title: "Every club, every match, live.",
    ctaKey: "streamNow",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/78/57/f6/7857f6ec-a4ed-87dc-dea9-a6ed02888722/ebd59c17-8e95-49b1-aec0-44aec57388ee.png/980x522sr.jpg",
    href: "https://tv.apple.com/us/channel/mls/tvs.sbd.7000",
  },
  {
    tag: "Drama",
    title: "Your Friends & Neighbors.",
    ctaKey: "streamNow",
    img: "https://is1-ssl.mzstatic.com/image/thumb/pa_Dd2CLL-BlWQRqIurClw/980x522sr.jpg",
    href: "https://tv.apple.com/us/show/your-friends--neighbors/umc.cmc.74o37kzay0yuuub8iumddjsg",
  },
  {
    tag: "Comedy",
    title: "Everyone's got a side hustle.",
    ctaKey: "streamNow",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Hj0w3h6_8b-NM4nnDwjfzQ/980x522sr.jpg",
    href: "https://tv.apple.com/us/show/margos-got-money-troubles/umc.cmc.6wgw0u6vuwydp6obbzzccup3w",
  },
  {
    tag: "Apple Arcade",
    title: "Hello Kitty Island Adventure",
    ctaKey: "playNow",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/5b/b3/4a/5bb34a60-695c-a96f-75ec-8a957fc2a20b/45899847-e52c-44a1-9ce5-09aedebb7a78.png/417x234.jpg",
    href: "https://apps.apple.com/us/app/hello-kitty-island-adventure/id1553505132",
  },
  {
    tag: "Apple Music",
    title: "Sabrina Carpenter: The Zane Lowe Interview",
    ctaKey: "listenNow",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/55/2b/5f/552b5f86-46e6-d848-ee06-5395bf09c206/83e0ed3d-c824-4ed9-9572-ae9e784568cb.png/980x522sr.jpg",
    href: "https://music.apple.com/us/station/sabrina-carpenter-the-zane-lowe-interview/ra.1837392419",
  },
  {
    tag: "Apple Fitness+",
    title: "30 Days of Gratitude and Kindness",
    ctaKey: "watchNow",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/80/20/29/80202998-1f1e-7f47-dc4d-3e4ac4dd801a/8712fa0d-f863-469e-8ac0-000b8a462629.png/980x522sr.jpg",
    href: "https://fitness.apple.com/us/studio-collection/30-days-of-gratitude-and-kindness/1671857394",
  },
  {
    tag: "Apple Arcade",
    title: "PowerWash Simulator",
    ctaKey: "playNow",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/53/55/d7/5355d758-e5b7-b406-f004-bb98d03ecb38/9388d284-2a0b-43e8-86e0-5852e8559d18.png/980x522sr.jpg",
    href: "https://apps.apple.com/us/app/powerwash-simulator/id6477445344",
  },
]
