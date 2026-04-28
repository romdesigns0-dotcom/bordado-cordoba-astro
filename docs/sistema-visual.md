# Sistema Visual: Bordados Córdoba

Este documento define las bases estéticas para el proyecto, alejándose de lo genérico y centrándose en el mundo textil.

## 1. Paleta Oficial de Identidad y UI
- **Grafito Principal (`#1C1C1A`):** Texto principal, versión oscura del logo sobre fondo claro, fondos oscuros, botones principales, líneas fuertes. Reemplaza el negro puro para aportar mayor calidez y elegancia premium.
- **Marfil / Hueso (`#F4EFE6`):** Versión clara del logo sobre fondo oscuro, fondos cálidos, texto sobre fondo grafito, bloques premium. Aporta sofisticación frente al blanco puro.
- **Bronce Hilo (`#B08A57`):** Detalle tipo hilo/puntada del isotipo, acentos sutiles, líneas finas seleccionadas, detalles de marca. Se utiliza con mesura como acento secundario, no como color dominante. Reemplaza por completo el azul eléctrico.
- **Blanco Técnico (`#FAFAFA`):** Fondos claros cuando se necesite una versión más limpia o neutra (ej. áreas técnicas de alta lectura).
- **Gris Línea (`#D8D2C8`):** Bordes, divisores, retículas sutiles y líneas técnicas de 1px.

**Reglas de Uso de Identidad:**
- El logo prioriza el uso monocromo.
- Sobre fondos claros (Marfil/Blanco Técnico): Usar la versión Grafito del logo.
- Sobre fondos oscuros (Grafito): Usar la versión Marfil del logo.
- El Azul Industrial previo ha sido retirado completamente de la identidad para alinear con la nueva madurez de la marca.

## 2. Sistema de Temas (Tokens Semánticos)
El proyecto utiliza un sistema de diseño basado en **Tokens Semánticos CSS** para soportar temas dinámicos (Claro y Oscuro) sin duplicación de código ni sobreescritura manual de variables por componente.

Los tokens globales están definidos en `src/styles/global.css`:
- `--surface`: Fondo principal (cambia de Blanco Técnico a Grafito).
- `--surface-soft`: Fondos secundarios o de contraste sutil (cambia de Marfil a un Grafito más claro).
- `--surface-invert`: Secciones que fuerzan alto contraste (siempre invertido al tema actual).
- `--text`: Texto principal.
- `--text-invert`: Texto forzado para contraste invertido.
- `--line`: Bordes y divisorias técnicas.
- `--accent`: Color de acento constante (Bronce Hilo).
- `--logo-horizontal`: Path dinámico del logo, el cual se renderiza con `background-image` para que el navegador cambie automáticamente el activo al alternar entre `[data-theme="light"]` y `[data-theme="dark"]`.

## 2. Tipografías (Unificadas)
- **Familia Principal:** *Montserrat* (Geometric Sans-Serif).
- **Justificación:** La marca exige un carácter técnico, limpio y de precisión industrial. La tipografía Montserrat aporta legibilidad, estructura geométrica (alineada al nuevo isotipo) y consistencia.
- **Jerarquías:**
  - *Títulos (Display)*: Montserrat SemiBold (600) o Bold (700). Tracking sutil (`tracking-tight`) y leading amplio (`leading-[1.1]`).
  - *Cuerpo (Body)*: Montserrat Regular (400).
  - *Botones y CTA*: Montserrat SemiBold (600) con alto contraste.
  - *Microcopy / Etiquetas*: Montserrat Medium (500) con tracking moderado (uppercase).
- **Prohibiciones:** Queda terminantemente prohibido el uso de tipografías Serif (tipo *Instrument Serif*), itálicas exageradas o efectos editoriales que evoquen estética de marca artesanal, boutique o "handmade".

## 4. Reglas Visuales y Composición
- **Líneas Técnicas:** Uso de líneas finas (1px) para delimitar secciones y dar estructura de plano técnico.
- **Retículas Sutiles:** Uso de fondos con puntos o mallas muy tenues que evoquen el área de trabajo de una bordadora industrial.
- **Imágenes:** Close-ups reales de puntadas limpias, maquinaria profesional Tajima/SWF trabajando y hilos técnicos.
- **Sin Cards:** Los servicios y contenidos se organizan en **filas o bloques numerados** con tipografía grande, evitando las cajas redondeadas genéricas.
- **Iconografía Mínima:** Evitar íconos genéricos. Preferir el uso de números, flechas técnicas o detalles fotográficos reales.

## 5. Texturas
- **Grano Sutil:** Para evitar fondos planos digitales.
- **Retícula Técnica:** Inspirada en patrones de digitalización o mallas de bordado industrial.

## 6. Motion (Animaciones)
- **Scroll Suave:** Transiciones que se sientan como el deslizamiento de una tela.
- **Revelado:** Elementos que aparecen con un ligero "stagger" (escalonado).

## 7. Accesibilidad
- **Contraste:** Todas las combinaciones de texto (#0A0A0A) sobre fondo (#FAFAFA) y botones (#0A0A0A) sobre blanco cumplen con estándares AA/AAA.
- **Interactividad:** Estados de hover claros con cambios de color de acento (#1D4ED8).
