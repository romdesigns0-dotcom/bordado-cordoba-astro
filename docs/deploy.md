# Documentacion de despliegue automatizado

Esta documentacion describe como se publica la landing de Bordados Cordoba en Firebase Hosting usando GitHub Actions.

## Arquitectura de despliegue
- **Framework:** Astro en modo estatico.
- **Hosting:** Firebase Hosting clasico.
- **CI/CD:** GitHub Actions compila con `pnpm run build` y publica en Firebase.

## Workflows configurados
En [firebase-hosting-merge.yml](C:/Users/Romar/Documents/bordado-cordoba-astro/.github/workflows/firebase-hosting-merge.yml) y [firebase-hosting-pull-request.yml](C:/Users/Romar/Documents/bordado-cordoba-astro/.github/workflows/firebase-hosting-pull-request.yml) ya quedan definidos estos flujos:

1. `Deploy to Firebase Hosting on PR`: crea una preview URL para pull requests del mismo repositorio.
2. `Deploy to Firebase Hosting on merge`: publica automaticamente a `live` cuando hay push a `master` o `main`.
3. `workflow_dispatch`: permite lanzar manualmente el deploy live desde la pestaña **Actions**.

## Secreto requerido en GitHub
Los workflows actuales usan este secreto:

```text
FIREBASE_SERVICE_ACCOUNT_BORDADOS_CORDOBA
```

Ese secreto debe contener el JSON de una service account con permisos para Firebase Hosting en el proyecto:

```text
bordados-cordoba
```

## Forma recomendada de vincular GitHub con Firebase
Desde una terminal autenticada en Firebase, dentro de este proyecto, ejecuta:

```bash
firebase init hosting:github
```

Eso normalmente crea o actualiza:
- La service account en Google Cloud.
- El secreto del repositorio en GitHub.
- Los permisos para que GitHub Actions pueda desplegar.

## Verificacion minima
1. Revisa en GitHub `Settings > Secrets and variables > Actions`.
2. Confirma que existe `FIREBASE_SERVICE_ACCOUNT_BORDADOS_CORDOBA`.
3. Haz push a `master` o `main`.
4. Abre la accion `Deploy to Firebase Hosting on merge`.
5. Verifica que el deploy termine en estado exitoso.

## Despliegue manual local
Si necesitas publicar sin pasar por GitHub:

```bash
pnpm run deploy:hosting
```

## Restricciones del proyecto
Este proyecto debe seguir usando solo hosting estatico. No se debe agregar:
- Firebase App Hosting
- Cloud Functions
- Cloud Run
- Firestore
- Realtime Database
- Authentication
- Cloud Storage
