import type { Hike, Outing } from '../types/domain'

export interface HikeRepository {
  listHikes(familyId: string): Promise<Hike[]>
  getHike(id: string): Promise<Hike | null>
  saveHike(hike: Hike): Promise<void>
  listOutings(familyId: string, hikeId?: string): Promise<Outing[]>
  saveOuting(outing: Outing): Promise<void>
}
