# Registro de Decisiones

## [2026-04-28] Elección de Stack Inicial
- **Decisión:** Usar Astro + Tailwind.
- **Razón:** Necesidad de un sitio extremadamente rápido (Astro) y flexibilidad total en diseño (Tailwind).

## [2026-04-28] Pivote de Estrategia de Contenido
- **Decisión:** Desplazar los uniformes como enfoque principal.
- **Razón:** El negocio ya no considera los uniformes su servicio principal; se busca priorizar personalización y logos.

## [2026-04-28] Estrategia de SEO Local
- **Decisión:** Priorizar SEO local (Oaxaca) antes de cualquier inversión en publicidad pagada.
- **Razón:** Establecer una base orgánica sólida y captar tráfico de alta intención de búsqueda en la región.

## [2026-04-28] Centralización de Datos Técnicos
- **Decisión:** Implementar `src/consts.ts` para gestionar datos de contacto y enlaces.
- **Razón:** Garantizar que el WhatsApp, dirección y horarios sean consistentes en todos los componentes y documentación.

## [2026-04-28] Modularización de SEO y Datos Estructurados
- **Decisión:** Crear componentes `SEO.astro` y `JsonLd.astro`.
- **Razón:** Facilitar la gestión de meta-etiquetas y asegurar que los datos estructurados (LocalBusiness, FAQPage) se inyecten de forma limpia y solo con datos confirmados, evitando penalizaciones por información incompleta.

## [2026-04-28] Definición de Identidad Visual y Paleta de Colores
- **Decisión:** Integración del nuevo logotipo oficial e implementación de la paleta: Grafito (`#1C1C1A`), Marfil (`#F4EFE6`), Bronce Hilo (`#B08A57`), Blanco Técnico (`#FAFAFA`) y Gris Línea (`#D8D2C8`). Retirada completa del azul eléctrico previo.
- **Razón:** Alinear la interfaz web con la nueva madurez de la marca. El azul eléctrico resultaba muy "tech/SaaS" o genérico, mientras que la nueva paleta ancla el proyecto en la materialidad textil (hilos de bronce, contrastes sobrios tipo etiqueta premium) sin perder el carácter industrial (Grafito y Blanco Técnico).

## [2026-04-28] Sistema Automático de Tema Claro/Oscuro
- **Decisión:** Implementar un sistema de detección `prefers-color-scheme` con tokens semánticos CSS y un control manual para alternar temas (`ThemeToggle.astro`). La inicialización ocurre con un `<script is:inline>` en el `Layout.astro` para evitar "FOUC" (Flash of Unstyled Content).
- **Razón:** Proveer soporte nativo al modo oscuro respetando la decisión del usuario y del sistema, centralizando colores mediante tokens (`--surface`, `--text`) sin duplicar componentes ni utilizar un esquema intrusivo de selectores.

## [2026-04-28] Refactorización Tipográfica (Montserrat)
- **Decisión:** Eliminar las fuentes serif editoriales (Instrument Serif) e itálicas extremas en favor de un sistema unificado en *Montserrat Variable*. Se ajustó el *tracking* (de `tracking-tighter` a `tracking-tight`) y el *leading* a proporciones geométricas y legibles.
- **Razón:** La estética editorial serif chocaba con la geometría y precisión industrial del nuevo logotipo de la marca. Montserrat, al ser una geométrica neutra y profesional, se integra al mismo sistema visual del monograma de Bordados Córdoba.

## [2026-04-28] Preparación para Despliegue y Analítica
- **Decisión:** Implementar configuración estática para Firebase Hosting (firebase.json) y crear un componente nativo de Analítica (`Analytics.astro`) usando `data-track` para medir conversiones directamente hacia `dataLayer` (GTM) o `gtag` (GA4).
- **Razón:** Proveer una infraestructura lista para producción que permita medir conversiones (clics a WhatsApp) desde el Día 1, sin saturar la aplicación con librerías externas. Esto garantiza que las decisiones de Google Ads futuras se basen en datos reales de conversiones y no en clics vacíos.
