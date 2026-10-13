/**
 * Erzeugt aus jeder Route eine fertige HTML-Datei.
 *
 * Hintergrund: Die Seite ist eine React-Anwendung. Ohne diesen Schritt liegt
 * im dist-Ordner nur eine einzige index.html mit einem leeren Geruest. GitHub
 * Pages antwortet auf /kontakt dann mit "404 nicht gefunden" - und was 404
 * meldet, nimmt Google nicht in den Index auf.
 *
 * Nach diesem Schritt existiert dist/kontakt/index.html mit dem vollstaendigen
 * Text, eigenem Titel und eigener Beschreibung. Der Server antwortet mit 200.
 *
 * Laeuft automatisch als Teil von "npm run build".
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HIER = path.dirname(fileURLToPath(import.meta.url));
const WURZEL = path.resolve(HIER, '..');
const DIST = path.join(WURZEL, 'dist');
const SSR = path.join(WURZEL, 'dist-ssr', 'entry-server.js');

function maskieren(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function main() {
  if (!fs.existsSync(SSR)) {
    throw new Error('Server-Bundle fehlt: ' + SSR);
  }

  const vorlagePfad = path.join(DIST, 'index.html');
  const vorlage = fs.readFileSync(vorlagePfad, 'utf8');

  const { render, seiten, SITE } = await import(pathToFileURL(SSR).href);

  const erzeugt = [];

  for (const seite of seiten) {
    const { html, meta } = render(seite.pfad);

    const adresse = SITE.url + (seite.pfad === '/' ? '/' : seite.pfad);
    const titel = maskieren(meta.titel);
    const beschreibung = maskieren(meta.beschreibung);

    let ausgabe = vorlage
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${titel}</title>`)
      .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${beschreibung}" />`)
      .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${adresse}" />`)
      .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${titel}" />`)
      .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${beschreibung}" />`)
      .replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${adresse}" />`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    if (!ausgabe.includes('<div id="root">')) {
      throw new Error('Einhaengepunkt nicht gefunden fuer ' + seite.pfad);
    }

    // Auf Leistungsseiten zusaetzlich die Leistung selbst und die haeufigen
    // Fragen maschinenlesbar mitgeben. Google zeigt solche Fragen teils direkt
    // im Suchergebnis an, was den Platz in der Trefferliste vergroessert.
    if (seite.faq && seite.faq.length) {
      const daten = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Service',
            '@id': adresse + '#leistung',
            name: seite.leistungsName,
            description: seite.beschreibung,
            url: adresse,
            provider: { '@id': SITE.url + '/#betrieb' },
            areaServed: { '@type': 'City', name: 'Berlin' },
          },
          {
            '@type': 'FAQPage',
            '@id': adresse + '#fragen',
            mainEntity: seite.faq.map((f) => ({
              '@type': 'Question',
              name: f.frage,
              acceptedAnswer: { '@type': 'Answer', text: f.antwort },
            })),
          },
        ],
      };
      ausgabe = ausgabe.replace(
        '</head>',
        `    <script type="application/ld+json">${JSON.stringify(daten)}</script>\n  </head>`
      );
    }

    if (seite.pfad === '/') {
      fs.writeFileSync(path.join(DIST, 'index.html'), ausgabe, 'utf8');
      erzeugt.push({ pfad: '/', datei: 'dist/index.html', zeichen: ausgabe.length });
    } else {
      const name = seite.pfad.replace(/^\//, '');

      // Zwei Ablagen fuer dieselbe Seite, weil GitHub Pages in dieser
      // Reihenfolge sucht:
      //   /kontakt  ->  kontakt.html          (wird direkt mit 200 geliefert)
      //   /kontakt/ ->  kontakt/index.html
      // Ohne die erste Datei antwortet GitHub auf /kontakt mit einer
      // Weiterleitung auf /kontakt/. Mit ihr entfaellt der Umweg.
      const flach = path.join(DIST, name + '.html');
      const ordner = path.join(DIST, name, 'index.html');

      fs.mkdirSync(path.dirname(flach), { recursive: true });
      fs.writeFileSync(flach, ausgabe, 'utf8');

      fs.mkdirSync(path.dirname(ordner), { recursive: true });
      fs.writeFileSync(ordner, ausgabe, 'utf8');

      erzeugt.push({ pfad: seite.pfad, datei: `dist/${name}.html + ${name}/index.html`, zeichen: ausgabe.length });
    }
  }

  // sitemap.xml aus derselben Liste, damit beides nie auseinanderlaeuft.
  const heute = new Date().toISOString().slice(0, 10);
  const sitemap =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    seiten
      .filter((s) => !s.nichtIndexieren)
      .map(
        (s) =>
          '  <url>\n' +
          `    <loc>${SITE.url}${s.pfad === '/' ? '/' : s.pfad}</loc>\n` +
          `    <lastmod>${heute}</lastmod>\n` +
          `    <priority>${s.prioritaet}</priority>\n` +
          '  </url>'
      )
      .join('\n') +
    '\n</urlset>\n';

  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap, 'utf8');

  console.log('\nVorab gerenderte Seiten:');
  for (const e of erzeugt) {
    console.log(`  ${e.pfad.padEnd(14)} -> ${e.datei.padEnd(34)} ${(e.zeichen / 1024).toFixed(1)} KB`);
  }
  console.log(`\n  sitemap.xml mit ${seiten.filter((s) => !s.nichtIndexieren).length} Adressen`);
}

main().catch((e) => {
  console.error('\nFEHLER beim Vorab-Rendern:', e.message);
  process.exit(1);
});
