import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import AppRoutes from './routes.jsx'
import { seiten, seiteZuPfad, SITE } from './seo.js'

/**
 * Wird nur beim Bauen ausgefuehrt, nie im Browser.
 * Verwandelt eine Adresse in fertiges HTML.
 */
export function render(pfad) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={pfad}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>
  )
  return { html, meta: seiteZuPfad(pfad) }
}

export { seiten, SITE }
