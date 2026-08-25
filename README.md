# Cambios de seguridad y SEO

Estos son los archivos modificados/agregados sobre la rama `tumi`. Reemplazá los archivos correspondientes en el repo (mismas rutas relativas) y corré `npm install` para que se apliquen las versiones nuevas de `package.json`.

## ⚠️ Acción requerida
En estos archivos puse un dominio de ejemplo (`https://www.fronteradelosandes.com`) porque no tengo el dominio real del sitio en producción. **Reemplazalo por el dominio definitivo antes de publicar**:
- `src/app/layout.jsx` (`metadataBase`, `openGraph.url`)
- `src/app/robots.js`
- `src/app/sitemap.js`

## Seguridad
- **`package.json`**: se actualizó `next` a `^15.5.24` y se agregaron `overrides` para `sharp` y `nanoid` y `postcss`. Esto resuelve **todas** las vulnerabilidades que reportaba `npm audit` (3 altas + 1 crítica, todas en la cadena de Next.js/postcss/sharp/nanoid). Corré `npm install` para regenerar `package-lock.json`.
- **`footer.jsx` y `layout.jsx`**: los links `target="_blank"` (WhatsApp, Instagram, Ubicación) no tenían `rel="noopener noreferrer"`. Sin ese atributo, la página que abrís puede acceder a `window.opener` y redirigir tu pestaña original (reverse tabnabbing). Ya está agregado en los 4 links que lo necesitaban (los de `contact/page.jsx` y `activityCard.jsx` ya lo tenían bien).
- **`next.config.mjs`**: 
  - Se agregaron headers de seguridad estándar (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) para todas las rutas.
  - Se desactivó el header `X-Powered-By: Next.js` (`poweredByHeader: false`), que por defecto revela el framework usado.

## SEO
- **Metadata por página**: antes solo existía un `title`/`description` global en `layout.jsx`, igual para las 4 páginas. Ahora cada página tiene su propio título y descripción:
  - `contact/page.jsx` (ya era server component, se agregó `metadata` directo).
  - `cabins/layout.jsx` y `whatDo/layout.jsx` (nuevos): como esas páginas son `"use client"`, Next no permite exportar `metadata` desde el mismo archivo, así que agregué un layout server-component en cada carpeta que lo provee.
- **Open Graph / Twitter Cards**: agregado en `layout.jsx` para que los links compartidos en WhatsApp/redes muestren título, descripción e imagen del logo.
- **`robots.js` y `sitemap.js`** (nuevos): generan `/robots.txt` y `/sitemap.xml` automáticamente listando las 4 páginas públicas.
- **`page.jsx` (home)**: la sección hero no tenía ningún `<h1>` en toda la página (estaba comentado). Agregué un `<h1 className="sr-only">` con el nombre del sitio — no cambia nada visualmente pero le da a Google/lectores de pantalla la señal principal de la página que faltaba.
- **`cabinsGallery.jsx`**: las 26 imágenes de la galería tenían `alt="Imagen 1"`, `"Imagen 2"`... (sin ningún valor para SEO ni accesibilidad). Ahora cada una tiene un `alt` descriptivo real. También agregué `href={src}` a los `<a>` de Fancybox (antes no tenían `href`, lo cual no es válido semánticamente para un link).

## Verificado
- `npm audit` → 0 vulnerabilidades (antes: 4, incluyendo 1 crítica).
- `npm run build` compila igual que antes (el único fallo que da en este entorno es por no tener acceso a `fonts.googleapis.com` desde el sandbox, no es un problema del código).

## No incluido (fuera de este alcance, pero para tener en cuenta)
- El QA final pendiente de rutas de imágenes/responsive que ya tenías anotado.
- `src/app/data/actividades.json` parece no estar en uso (la página `whatDo` usa un array inline propio) — si no lo necesitás, se puede borrar.
- La navbar usa `<a href>` en vez de `next/link` para la navegación interna, lo que fuerza recarga completa de página en cada click. No es un problema de seguridad/SEO grave, pero es una mejora de performance fácil si querés que lo haga después.
