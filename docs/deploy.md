# Documentación de Despliegue (Deploy) Automatizado

Esta documentación detalla la configuración del despliegue continuo (CI/CD) de la landing de Bordados Córdoba hacia Firebase Hosting mediante GitHub Actions.

## Arquitectura de Despliegue
- **Framework:** Astro (Generación Estática de Sitios - SSG).
- **Hosting:** Firebase Hosting Clásico (NO App Hosting, NO Cloud Run).
- **CI/CD:** GitHub Actions (Compilación vía `pnpm build` y despliegue nativo).

## Workflows Configurados
Se han generado dos flujos automáticos en `.github/workflows/`:
1. **Deploy to Firebase Hosting on PR**: Cuando se abre un *Pull Request*, genera una URL temporal de previsualización (Preview URL) sin afectar la página en vivo.
2. **Deploy to Firebase Hosting on merge**: Cuando haces un `push` o `merge` a la rama `master`, despliega automáticamente la página en el dominio principal en vivo (`channelId: live`).

## Requisito: Autenticación entre GitHub y Firebase
Para que GitHub Actions tenga permiso de publicar en tu cuenta de Firebase, **debes realizar la vinculación**. Tienes dos métodos para hacerlo:

### Método 1: Automático (Recomendado)
Abre una terminal en tu computadora (donde ya estés logueado en Firebase) en la carpeta del proyecto y ejecuta:

```bash
firebase init hosting:github
```

**¿Qué te va a pedir?**
- Seleccionar tu proyecto de Firebase (ej. `bordados-cordoba`).
- Qué repositorio de GitHub usar (ej. `romdesigns0-dotcom/bordado-cordoba-astro`).
- Autenticarte en el navegador para dar acceso a GitHub.
- Configurar script de build (`pnpm run build`).

**¿Qué hace por detrás?**
Genera automáticamente una cuenta de servicio (Service Account) en Google Cloud, le asigna los permisos necesarios de Hosting, y crea el secreto `FIREBASE_SERVICE_ACCOUNT_[TU_PROYECTO]` dentro de tu repositorio de GitHub.

### Método 2: Manual (Si fallara la terminal)
Si no puedes usar la terminal, debes hacerlo manualmente en GitHub:
1. Ve a [Google Cloud Console](https://console.cloud.google.com/), selecciona tu proyecto de Firebase.
2. Ve a **IAM y Administración** > **Cuentas de servicio**.
3. Crea una nueva y dale el rol **"Administrador de Firebase Hosting"**.
4. Genera y descarga una clave en formato JSON.
5. Ve a tu repositorio en GitHub > **Settings** > **Secrets and variables** > **Actions**.
6. Crea un nuevo "New repository secret" llamado `FIREBASE_SERVICE_ACCOUNT`.
7. Pega todo el contenido del archivo JSON dentro del secreto.

> **Importante:** Actualmente los archivos YAML de workflows generados usan el secreto genérico `FIREBASE_SERVICE_ACCOUNT`. Si usas el Método 1, el CLI de Firebase podría crear un secreto con nombre específico (ej. `FIREBASE_SERVICE_ACCOUNT_BORDADOS_CORDOBA`). En ese caso, asegúrate de actualizar el nombre del secreto en los archivos `.yml` que hemos creado, así como el `projectId` real.

## Prohibiciones Estrictas de Firebase
Para mantener los costos a cero y la infraestructura simple, el proyecto **NO DEBE** utilizar:
- Firebase App Hosting
- Cloud Functions
- Cloud Run / Docker
- Firestore / Realtime Database
- Authentication
- Cloud Storage
- Plan Blaze (No es necesario activarlo a menos que las peticiones excedan la capa gratuita generosa del hosting estático).
