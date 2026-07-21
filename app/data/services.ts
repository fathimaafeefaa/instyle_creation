/**
 * app/data/services.ts
 *
 * Single source of truth for service offerings and company statistics.
 * Components import from here — never hardcode content inline.
 */

export interface Service {
  id: string
  icon: string // emoji icon; swap for SVG import when assets are ready
  /** i18n key: services.items.<id>.title / .description */
}


export const services: Service[] = [
  { id: 'interior-design',    icon: '🏛️' },
  { id: 'fit-out',            icon: '🔨' },
  { id: 'space-planning',     icon: '📐' },
  { id: 'furniture-supply',   icon: '🪑' },
  { id: 'lighting-design',    icon: '💡' },
  { id: 'project-management', icon: '📋' },
]
