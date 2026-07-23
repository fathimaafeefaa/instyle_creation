/**
 * app/data/clients.ts
 *
 * Single source of truth for client / brand logos shown in ClientLogos section.
 * Logo paths will be filled in when assets are supplied.
 */

import type { Client } from '~/types'

export const clients: Client[] = [
  { id: 'emaar',       name: 'Emaar Properties' },
  { id: 'damac',       name: 'DAMAC Properties' },
  { id: 'aldar',       name: 'Aldar Properties' },
  { id: 'meraas',      name: 'Meraas'           },
  { id: 'nakheel',     name: 'Nakheel'          },
  { id: 'deyaar',      name: 'Deyaar'           },
]
