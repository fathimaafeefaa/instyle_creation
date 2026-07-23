/**
 * app/data/services.ts
 *
 * Single source of truth for service offerings and company statistics.
 * Components import from here — never hardcode content inline.
 */

import type { Service } from '~/types'


export const services: Service[] = [
  { id: 'customized-curtains-upholstery', icon: '🛋️' },
  { id: 'blinds', icon: '🪟' },
  { id: 'carpets', icon: '🧶' },
  { id: 'wallpapers', icon: '🖼️' },
  { id: 'motorized-curtains', icon: '🔌' },
  { id: 'decor-products', icon: '🏺' },
  { id: 'bedroom-furnishing', icon: '🛏️' },
  { id: 'living-space', icon: '🛋️' },
  { id: 'commercial-space', icon: '🏢' },
  { id: 'office-interior', icon: '💻' },
  { id: 'false-ceilings', icon: '🧱' },
  { id: 'light-partitions', icon: '🚧' },
  { id: 'glass-aluminium-works', icon: '🪟' },
  { id: 'plumbing-sanitary', icon: '🚰' },
  { id: 'painting', icon: '🎨' },
  { id: 'carpentry-flooring', icon: '🪵' },
  { id: 'metal-parts-erection', icon: '🏗️' },
  { id: 'steel-products', icon: '⛓️' },
  { id: 'plastering', icon: '🧱' },
  { id: 'insulation-technical-works', icon: '🛠️' },
]
