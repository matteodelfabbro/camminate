import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { HikesPage } from './pages/HikesPage'
import { PlaceholderPage } from './pages/PlaceholderPage'

const router = createBrowserRouter([{ path: '/', element: <Layout />, children: [
  { index: true, element: <HomePage /> }, { path: 'escursioni', element: <HikesPage /> }, { path: 'da-fare', element: <HikesPage wishlist /> },
  { path: 'diario', element: <PlaceholderPage title="Diario delle uscite" text="Qui compariranno le singole giornate, anche quando lo stesso percorso è stato fatto più volte." /> },
  { path: 'mappa', element: <PlaceholderPage title="La nostra mappa" text="La vista MapLibre raccoglierà percorsi e punti di partenza dell’archivio." /> },
  { path: 'importa', element: <PlaceholderPage title="Importa tracce GPX" text="L’importazione avrà analisi, confronto duplicati e revisione prima del salvataggio." /> },
]}])
export default function App() { return <RouterProvider router={router} /> }
