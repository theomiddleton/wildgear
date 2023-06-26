import { type Product } from "@/db/schema"
import type { Option } from "@/types"

export const sortOptions = [
  { label: "Date: Old to new", value: "createdAt.asc" },
  {
    label: "Date: New to old",
    value: "createdAt.desc",
  },
  { label: "Price: Low to high", value: "price.asc" },
  { label: "Price: High to low", value: "price.desc" },
  {
    label: "Alphabetical: A to Z",
    value: "name.asc",
  },
  {
    label: "Alphabetical: Z to A",
    value: "name.desc",
  },
]

export const productCategories: {
  title: Product["category"]
  subcategories: {
    title: string
    description?: string
    image?: string
    slug: string
  }[]
}[] = [
  {
    title: "camping",
    subcategories: [
      {
        title: "Tents",
        description: "Stay warm and dry with our sick tents.",
        image: "/images/tent-one.jfif",
        slug: "tents",
      },
      {
        title: "Sleeping Bags",
        description: "Keep warm and cozy.",
        image: "/images/sleeping-bag-one.webp",
        slug: "sleeping-bags",
      },
      {
        title: "Sleeping Pads",
        description: "Stay comfy with our rad sleeping pads.",
        image: "/images/sleeping-mat-one.jpg",
        slug: "sleeping-pads",
      },
      {
        title: "Stoves",
        description: "Cook up a storm with our rad stoves.",
        image: "/images/stove-one.jpg",
        slug: "stoves",
      },
      {
        title: "Lanterns & Torches",
        description: "Light up the night.",
        image: "/images/griptape-one.webp",
        slug: "light",
      },
      {
        title: "Water Serilizers",
        description: "To make sure you have clean water.",
        image: "/images/hardware-one.webp",
        slug: "water",
      },
      {
        title: "Misceallaneous",
        description: "All the other stuff you need.",
        image: "/images/tool-one.webp",
        slug: "misc",
      },
    ],
  },
  {
    title: "climbing",
    subcategories: [
      {
        title: "Ropes",
        description: "Stay safe with our rad ropes.",
        slug: "ropes",
      },
      {
        title: "Harnesses",
        description: "Pretty important.",
        slug: "harnesses",
      },
      {
        title: "Helmets",
        description: "Protect your noggin.",
        slug: "helmets",
      },
      {
        title: "Climbing Shoes",
        description: "Get a grip.",
        slug: "climbing-shoes",
      },
      {
        title: "Trad gear",
        description: "All the trad gear you need.",
        slug: "trad-gear",
      },
    ],
  },
  {
    title: "tents",
    subcategories: [
      {
        title: "one person",
        description: "lightweight one person tents.",
        slug: "one-person",
      },
      {
        title: "Two person",
        description: "two person tents. for two people.",
        slug: "two-person",
      },
      {
        title: "Three person",
        description: "three person tents. for three people.",
        slug: "three-person",
      },
      {
        title: "More than three person",
        description: "i think you get the idea.",
        slug: "more-than-three",
      },
      {
        title: "Tent Accessories",
        description: "All the other stuff you need.",
        slug: "tent-accessories",
      },
    ],
  },
  {
    title: "hiking",
    subcategories: [
      {
        title: "Hiking Boots",
        description:"Stay comfy with our rad hiking boots.",
        slug: "hiking-boots",
      },
      {
        title: "Water proof jackets",
        description: "Stay dry with our rad water proof jackets.",
        slug: "water-proof-jackets",
      },
      {
        title: "Down jackets",
        description:"Stay warm with our rad down jackets.",
        slug: "down-jackets",
      },
      {
        title: "Walking poles",
        description:"poles. for walking.",
        slug: "walking-poles",
      },
      {
        title: "Headtorches",
        description: "Stay bright.",
        slug: "headtorches",
      },
      {
        title: "Water bottles",
        description: "Stay hydrated.",
        slug: "water-bottles",
      },
      {
        title: "Backpacks",
        description: "Carry your stuff.",
        slug: "backpacks",
      },
    ],
  },
]

export const productTags = [
  "new",
  "sale",
  "bestseller",
  "featured",
  "popular",
  "trending",
  "limited",
  "exclusive",
]

export function getSubcategories(category?: string): Option[] {
  if (!category) return []

  const subcategories =
    productCategories
      .find((c) => c.title === category)
      ?.subcategories.map((s) => ({
        label: s.title,
        value: s.slug,
      })) ?? []

  return subcategories
}
