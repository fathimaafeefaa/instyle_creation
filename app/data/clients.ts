/**
 * app/data/clients.ts
 *
 * Single source of truth for client / brand logos shown in ClientLogos section.
 * Logo paths will be filled in when assets are supplied.
 */

export interface Client {
  id: string
  name: string
  /** Path to logo SVG/PNG — add after assets are supplied */
  logo?: string
  /** External website (optional, for linking) */
  url?: string
}

export const clients: Client[] = [
  { id: 'emaar',       name: 'Emaar Properties' },
  { id: 'damac',       name: 'DAMAC Properties' },
  { id: 'aldar',       name: 'Aldar Properties' },
  { id: 'meraas',      name: 'Meraas'           },
  { id: 'nakheel',     name: 'Nakheel'          },
  { id: 'deyaar',      name: 'Deyaar'           },
]
