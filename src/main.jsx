import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './fonts.css'
import './index.css'
import AppRoutes from './routes.jsx'
import ScrollToTop from './components/ScrollToTop'

const app = (
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
)

const wurzel = document.getElementById('root')

// Beim Bauen wird jede Seite bereits als fertiges HTML abgelegt. Ist dieses
// HTML vorhanden, uebernimmt React es, statt alles noch einmal aufzubauen.
if (wurzel.hasChildNodes()) {
  hydrateRoot(wurzel, app)
} else {
  createRoot(wurzel).render(app)
}
