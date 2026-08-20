export const km = (metres?: number) => metres == null ? '—' : `${(metres / 1000).toLocaleString('it-IT', { maximumFractionDigits: 1 })} km`
export const metres = (value?: number) => value == null ? '—' : `${Math.round(value).toLocaleString('it-IT')} m`
