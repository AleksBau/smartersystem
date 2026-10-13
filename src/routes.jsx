import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Kontakt from './pages/Kontakt'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import Layout from './components/Layout'

/**
 * Nur der Seitenbaum, ohne Router.
 *
 * Der Router kommt von außen: im Browser BrowserRouter, beim Vorab-Rendern
 * StaticRouter. Dadurch lässt sich jede Seite beim Bauen in fertiges HTML
 * verwandeln, statt sie erst im Browser zusammenzusetzen.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Route>
    </Routes>
  )
}
