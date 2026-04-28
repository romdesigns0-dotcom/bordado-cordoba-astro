# Estrategia de Presencia en Redes y Open Graph

Este documento detalla la configuración de las previsualizaciones sociales (Open Graph) para Bordados Córdoba.

## Imagen Open Graph (OG Image)

Para garantizar que el sitio se comparta con una estética premium y profesional en WhatsApp, Facebook, LinkedIn y Twitter, se ha creado una imagen centralizada.

### Detalles Técnicos
- **Ruta del archivo:** `public/og/bordados-cordoba-og.png`
- **Formato:** PNG (alta calidad)
- **Dimensiones:** 1200 x 630 px
- **Color de fondo:** Marfil / Crema (#FDFBF7)
- **Logo utilizado:** `logo-grafito.svg` (Horizontal Negro)
- **Márgenes:** Se dejó un área de seguridad (safe area) de aproximadamente 160px en los laterales y 120px en la parte superior/inferior para evitar recortes accidentales en las distintas plataformas.

### Implementación
La imagen se gestiona a través de:
1. `src/config/site.ts`: Donde se define la ruta `ogImage`.
2. `src/components/SEO.astro`: Que inyecta automáticamente los metatags `og:image` y `twitter:image`.

## Cómo reemplazar la imagen
Si en el futuro se desea cambiar la imagen de previsualización:
1. Sube la nueva imagen a `public/og/`.
2. Actualiza la propiedad `ogImage` en `src/config/site.ts`.
3. Se recomienda mantener las dimensiones de 1200x630px para evitar que las redes sociales deformen o ignoren la imagen.

## Guía de Estilo Social
- **Sobriedad:** No satures las imágenes OG con texto promocional o flyers. El objetivo es reforzar la identidad de marca premium.
- **Aire:** Siempre mantén un margen interno amplio. Las aplicaciones de mensajería como WhatsApp suelen poner bordes o sombras sobre la imagen.
