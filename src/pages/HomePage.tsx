import { Link } from 'react-router-dom'
export function HomePage() { return <>
  <section className="hero"><p className="eyebrow">IL NOSTRO ARCHIVIO</p><h1>Ogni sentiero racconta una storia.</h1><p>Conserviamo percorsi, giornate e persone delle nostre camminate in montagna.</p><div className="actions"><Link className="button" to="/escursioni">Esplora l’archivio</Link><Link className="button secondary" to="/importa">Importa GPX</Link></div></section>
  <section className="quick-grid"><article><span>🥾</span><h2>Escursioni</h2><p>Percorsi, dettagli tecnici e ricordi.</p></article><article><span>📖</span><h2>Diario</h2><p>Ogni volta che siamo tornati sui sentieri.</p></article><article><span>🗺️</span><h2>Mappa</h2><p>Tutte le nostre montagne in un solo colpo d’occhio.</p></article></section>
</> }
