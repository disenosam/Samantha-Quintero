export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  challenge?: string
  solution?: string
  image: string
  gallery: string[]
  categories: string[]
  year: string
  client: string
  testimonial?: {
    quote: string
    author: string
    role: string
  }
}
