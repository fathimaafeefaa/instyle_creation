/**
 * app/data/testimonials.ts
 *
 * Single source of truth for client testimonials shown in Testimonials section.
 * Quotes are stored in English here; Arabic translations go into ar.json.
 */

export interface Testimonial {
  id: string
  author: string
  role: string
  company: string
  quote: string
  /** Path to avatar image — add after assets are supplied */
  avatar?: string
  rating: 1 | 2 | 3 | 4 | 5
}

export const testimonials: Testimonial[] = [
  {
    id: 'sarah-al-mansouri',
    author: 'Sarah Al Mansouri',
    role: 'Homeowner',
    company: 'Private Client',
    quote:
      'InStyle Creation transformed our villa into a breathtaking space. Their attention to detail and deep understanding of our lifestyle made all the difference.',
    rating: 5,
  },
  {
    id: 'james-hartley',
    author: 'James Hartley',
    role: 'General Manager',
    company: 'The Grand Hotel Abu Dhabi',
    quote:
      'Professional, creative, and on time. The lobby fit-out exceeded our expectations and set a new benchmark for hospitality design in the region.',
    rating: 5,
  },
  {
    id: 'layla-ibrahim',
    author: 'Layla Ibrahim',
    role: 'Head of Real Estate',
    company: 'Emaar Properties',
    quote:
      'We have partnered with InStyle on multiple projects. Their ability to deliver premium interiors at scale while maintaining quality is truly remarkable.',
    rating: 5,
  },
]
