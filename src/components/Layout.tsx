import { NavLink, Outlet } from 'react-router-dom'

export function Layout() {
  return <div className="app-shell">
    <header><div className="brand"><span aria-hidden="true">▲</span><div><strong>Le nostre montagne</strong><small>Archivio di famiglia</small></div></div>
      <nav aria-label="Navigazione principale">
        <NavLink to="/">Home</NavLink><NavLink to="/escursioni">Escursioni</NavLink><NavLink to="/diario">Diario</NavLink><NavLink to="/mappa">Mappa</NavLink><NavLink to="/da-fare">Da fare</NavLink>
      </nav>
    </header>
    <main><Outlet /></main>
  </div>
}
