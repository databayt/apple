export interface Show {
  poster: string
  name: string
  nameAr: string
}

export const shows: Show[] = [
  {
    poster:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1280&h=720&fit=crop",
    name: "Severance",
    nameAr: "انفصال",
  },
  {
    poster:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1280&h=720&fit=crop",
    name: "Silo",
    nameAr: "صومعة",
  },
  {
    poster:
      "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=1280&h=720&fit=crop",
    name: "Shrinking",
    nameAr: "تقلّص",
  },
  {
    poster:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1280&h=720&fit=crop",
    name: "Ted Lasso",
    nameAr: "تيد لاسو",
  },
  {
    poster:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1280&h=720&fit=crop",
    name: "The Morning Show",
    nameAr: "البرنامج الصباحي",
  },
  {
    poster:
      "https://images.unsplash.com/photo-1518676590747-1e3dcf5a4e32?w=1280&h=720&fit=crop",
    name: "Foundation",
    nameAr: "الأساس",
  },
  {
    poster:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1280&h=720&fit=crop",
    name: "Slow Horses",
    nameAr: "أحصنة بطيئة",
  },
]

// Duplicated for seamless CSS animation loop (no Math.random to avoid hydration mismatch)
export const carouselSet1: Show[] = [...shows, ...shows]

const showsOffset = [...shows.slice(3), ...shows.slice(0, 3)]
export const carouselSet2: Show[] = [...showsOffset, ...showsOffset]
