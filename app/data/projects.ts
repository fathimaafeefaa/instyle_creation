/**
 * app/data/projects.ts
 *
 * Single source of truth for portfolio / project case studies.
 * Images will be added as NuxtImg src values in a subsequent step.
 */

export type ProjectCategory =
  | 'residential'
  | 'commercial'
  | 'hospitality'
  | 'retail'
  | 'office'

export interface Project {
  id: string
  category: ProjectCategory
  year: number
  /** Path to hero image — add after image assets are supplied */
  image?: string
  /** i18n keys: projects.items.<id>.title / .description / .location */
}

export const projects: Project[] = [
  { id: 'villa-arabesque',     category: 'residential',  year: 2024 },
  { id: 'downtown-penthouse',  category: 'residential',  year: 2024 },
  { id: 'grand-lobby-dubai',   category: 'commercial',   year: 2023 },
  { id: 'boutique-hotel-abu',  category: 'hospitality',  year: 2023 },
  { id: 'flagship-store-dxb',  category: 'retail',       year: 2023 },
  { id: 'tech-campus-office',  category: 'office',       year: 2022 },
]
