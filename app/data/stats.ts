/**
 * app/data/stats.ts
 *
 * Single source of truth for company statistics.
 * The UI reads from here; do not hardcode numbers inline.
 */

export interface Stat {
  id: string
  value: string
  /** i18n key: stats.<id> */
}

export const stats: Stat[] = [
  { id: 'products', value: '20+' },
  { id: 'projects', value: '50+' },
  { id: 'followers', value: '100+' },
  { id: 'employees', value: '40+' },
]
