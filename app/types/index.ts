/**
 * app/types/index.ts
 *
 * Centralized TypeScript type definitions used across components and data layers.
 */

export interface Service {
  id: string
  icon: string
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string
}

export interface Client {
  id: string
  name: string
  logo?: string
  url?: string
}

export interface Testimonial {
  id: string
  author: string
  role: string
  company: string
  quote: string
  avatar?: string
  rating: 1 | 2 | 3 | 4 | 5
}
