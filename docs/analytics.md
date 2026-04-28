# Documentación de Analytics y Conversiones

Este documento detalla la configuración de analítica, eventos de conversión y los pasos pendientes antes de iniciar campañas publicitarias.

## Estado Actual
- **Google Tag Manager (GTM)**: Preparado (usando placeholder `GTM-XXXXXXX`).
- **Google Analytics 4 (GA4)**: Preparado (usando placeholder `G-XXXXXXXXXX`).
- **Eventos de Conversión**: Implementados nativamente mediante atributos `data-track` en los elementos de la interfaz.

> **Nota Crítica**: El componente de Analytics (`src/components/Analytics.astro`) inyectará automáticamente los scripts de GTM/GA4 **solo cuando** los IDs placeholder sean reemplazados por los IDs reales en `src/config/site.ts`.

## IDs Pendientes de Configuración
Antes de salir a producción o lanzar Ads, se deben actualizar los siguientes valores en `src/config/site.ts`:

- `siteUrl`: URL definitiva de producción.
- `gaMeasurementId`: ID de Medición de GA4 (ej. `G-1234567890`).
- `gtmId`: ID del contenedor de Google Tag Manager (ej. `GTM-ABCDEFG`).
- `firebaseProjectId`: ID del proyecto en Firebase para el despliegue de Hosting.

## Eventos que se miden
Hemos configurado un listener global que envía eventos directamente al `dataLayer` (para GTM) o a `gtag` (si se usa GA4 directamente).

### Evento Principal: `whatsapp_click`
Este evento se dispara en **todos** los botones y enlaces de la página que dirigen a WhatsApp.

**Parámetros enviados:**
- `event`: `whatsapp_click`
- `event_category`: `conversion`
- `event_label`: El texto del botón (ej. "Cotizar por WhatsApp").
- `cta_location`: La ubicación exacta del botón en la página, lo que permite medir qué sección convierte más. Valores posibles:
  - `header`
  - `hero`
  - `quote_steps`
  - `location_contact`
  - `final_cta`
  - `floating_button`
- `link_url`: La URL completa de destino (sirve para verificar que se envió el mensaje predeterminado correcto).
- `page_location`: La URL desde donde se hizo el clic.

## Pasos de Configuración en Google Tag Manager (GTM)
Si utilizas GTM, sigue estos pasos para procesar el evento `whatsapp_click`:

1. **Crear Activador (Trigger):**
   - Tipo: "Evento personalizado" (Custom Event).
   - Nombre del evento: `whatsapp_click`.
2. **Crear Variables (Variables de capa de datos):**
   - Nombre de la variable en Data Layer: `cta_location`, `event_category`, `event_label`.
3. **Crear Etiqueta (Tag) para GA4:**
   - Tipo: "Google Analytics: Evento de GA4".
   - Etiqueta de configuración: Selecciona tu etiqueta de configuración de GA4.
   - Nombre del evento: `whatsapp_click` (o genérico `generate_lead` si prefieres mapearlo a conversiones estándar de Google).
   - Parámetros del evento: Mapear las variables del paso 2.

## Pasos Previos a Google Ads
Antes de invertir en campañas de tráfico pago:
1. Reemplazar los IDs en `src/config/site.ts`.
2. Verificar que GTM esté recibiendo los eventos usando la herramienta **DebugView** de Tag Assistant.
3. En GA4, ir a Administrar > Conversiones, y marcar el evento `whatsapp_click` (o `generate_lead`) como una **Conversión**.
4. Importar esa conversión a Google Ads.
5. NO arrancar campañas hasta verificar que los clics de prueba se están registrando correctamente como conversiones en Google Ads.
