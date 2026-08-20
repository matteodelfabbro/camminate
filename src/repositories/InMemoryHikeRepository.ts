import type { Hike, Outing } from '../types/domain'
import type { HikeRepository } from './HikeRepository'

const now = new Date().toISOString()
const hikes: Hike[] = [
  { id: 'monte-demo', familyId: 'family-demo', name: 'Anello del Monte Demo', area: 'Dolomiti', status: 'done',
    stats: { distanceM: 12400, ascentM: 780, elevationMaxM: 2190, shape: 'loop' }, difficulty: 'E', sunShade: 'mixed',
    createdAt: now, updatedAt: now },
  { id: 'rifugio-demo', familyId: 'family-demo', name: 'Sentiero del Rifugio', area: 'Prealpi', status: 'wishlist',
    stats: { distanceM: 8200, ascentM: 510, shape: 'out-and-back' }, createdAt: now, updatedAt: now },
]
const outings: Outing[] = [{ id: 'outing-demo', familyId: 'family-demo', hikeId: 'monte-demo', date: { value: '2025-08', precision: 'month' }, participantIds: ['persona-1', 'persona-2'], source: 'manual', createdAt: now }]

export class InMemoryHikeRepository implements HikeRepository {
  async listHikes(familyId: string) { return hikes.filter(h => h.familyId === familyId) }
  async getHike(id: string) { return hikes.find(h => h.id === id) ?? null }
  async saveHike(hike: Hike) { const i = hikes.findIndex(h => h.id === hike.id); i < 0 ? hikes.push(hike) : hikes.splice(i, 1, hike) }
  async listOutings(familyId: string, hikeId?: string) { return outings.filter(o => o.familyId === familyId && (!hikeId || o.hikeId === hikeId)) }
  async saveOuting(outing: Outing) { const i = outings.findIndex(o => o.id === outing.id); i < 0 ? outings.push(outing) : outings.splice(i, 1, outing) }
}
