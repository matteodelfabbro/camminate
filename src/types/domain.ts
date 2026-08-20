export type DatePrecision = 'day' | 'month' | 'year' | 'unknown'
export type HikeStatus = 'done' | 'wishlist' | 'archived'
export type RouteShape = 'loop' | 'point-to-point' | 'out-and-back' | 'unknown'
export type DataSource = 'manual' | 'gpx' | 'derived'

export interface ApproximateDate { value?: string; precision: DatePrecision }
export interface GeoPoint { lat: number; lng: number; elevation?: number; time?: string }
export interface RouteStats {
  distanceM?: number; ascentM?: number; descentM?: number; elevationMinM?: number; elevationMaxM?: number;
  durationS?: number; shape?: RouteShape
}
export interface Hike {
  id: string; familyId: string; name: string; area?: string; status: HikeStatus; stats?: RouteStats;
  difficulty?: string; exposure?: string; sunShade?: 'sun' | 'shade' | 'mixed'; recommendedMonths?: number[];
  geometry?: GeoPoint[]; notes?: string; createdAt: string; updatedAt: string
}
export interface Outing {
  id: string; familyId: string; hikeId: string; date: ApproximateDate; participantIds: string[];
  source: DataSource; sourceFingerprint?: string; notes?: string; createdAt: string
}
export interface Person { id: string; familyId: string; displayName: string; userId?: string }
export interface Family { id: string; name: string }
export interface AppUser { id: string; familyIds: string[]; email: string; personId?: string }
