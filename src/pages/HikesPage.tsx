import { useEffect, useState } from 'react'
import { hikeRepository } from '../repositories'
import type { Hike } from '../types/domain'
import { km, metres } from '../utils/format'

export function HikesPage({ wishlist = false }: { wishlist?: boolean }) {
  const [hikes, setHikes] = useState<Hike[]>([])
  useEffect(() => { void hikeRepository.listHikes('family-demo').then(items => setHikes(wishlist ? items.filter(h => h.status === 'wishlist') : items)) }, [wishlist])
  return <section className="page"><p className="eyebrow">{wishlist ? 'PROSSIME AVVENTURE' : 'ARCHIVIO'}</p><h1>{wishlist ? 'Da fare' : 'Le nostre escursioni'}</h1><div className="filters"><input aria-label="Cerca escursione" placeholder="Cerca per nome o zona…"/><button>Filtri</button></div><div className="card-list">{hikes.map(h => <article className="hike-card" key={h.id}><div className="card-landscape" aria-hidden="true">▲</div><div><p className="eyebrow">{h.area ?? 'Zona da definire'}</p><h2>{h.name}</h2><dl><div><dt>Distanza</dt><dd>{km(h.stats?.distanceM)}</dd></div><div><dt>Dislivello</dt><dd>+{metres(h.stats?.ascentM)}</dd></div><div><dt>Difficoltà</dt><dd>{h.difficulty ?? '—'}</dd></div></dl></div></article>)}</div></section>
}
