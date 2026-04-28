# Contexto Activo

## Estado Actual del Proyecto
- Proyecto de Astro inicializado.
- WhatsApp confirmado: 951 207 8403.
- Dirección provisional (pendiente validación final): Cuauhtémoc 111, Trinidad de las Huertas.
- Estructura principal de la landing implementada: Hero, Servicios, Proceso, Cotizar, FAQ, Ubicación, Footer.
- Base técnica de SEO implementada (Meta tags, robots.txt, JSON-LD LocalBusiness y FAQPage).
- Identidad visual actualizada (Nuevos logos y paleta de colores oficial: Grafito, Marfil, Bronce).
- **Sistema de temas claro/oscuro basado en tokens semánticos implementado** y operando mediante detección `prefers-color-scheme`.
- **Refactorización tipográfica** (Montserrat unificada) aplicada en toda la plataforma para lograr alineación estética con el logotipo (geométrico, técnico e industrial).

## En qué estamos trabajando
- Preparación para despliegue en producción.
- Configuración de analítica y conversiones (GTM/GA4).

## Próximos pasos inmediatos
- Confirmación y reemplazo de IDs (GTM, GA4, URL) en `src/config/site.ts`.
- Despliegue en Firebase Hosting (Automático vía GitHub Actions una vez configurado el Service Account).
- Recopilación de fotografías reales del taller y productos terminados para Galería.

## Stack Tecnológico
- **Framework:** Astro.
- **Styling:** Tailwind CSS (Instalado y configurado con @tailwindcss/vite).
- **Gestor de paquetes:** pnpm.
- **Hosting:** Firebase Hosting Clásico (Preparado con `firebase.json` y scripts de deploy).
- **CI/CD:** GitHub Actions (Workflows de preview y deploy en producción creados en `.github/workflows/`).
