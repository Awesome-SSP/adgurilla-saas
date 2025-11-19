# adgurilla Backend (Node.js)

## Structure
```
backend/
  package.json
  src/
    models/              # Data access / raw state
      healthStatus.js
    viewmodels/          # Transformation layer (MVVC)
      healthViewModel.js
    views/               # Presentation formatting
      healthView.js
    controllers/         # Route handlers (business orchestration)
      healthController.js
    api/                 # Versioned API surface
      v1/
        index.js         # Assembles v1 routes
        routes/
          healthRoutes.js
      v2/
        index.js
        routes/
          healthRoutes.js
    app.js               # App factory wiring routes & middleware
    server.js            # Startup script
```

## Versioning Strategy

We mount routers at `/api/v1` and `/api/v2`. Keep older versions stable while introducing new behavior in later versions.

Recommended future expansion per version:
```
api/
  vX/
    routes/        # Express route definitions
    controllers/   # (Optional) Version-specific controllers
    services/      # Business logic units
    dtos/          # Request/response shaping (validation schemas)
    middleware/    # Auth, rate-limit, feature flags
```

Guidelines:
- Never break contracts in an existing version; add a new version instead.
- Deprecate by documenting sunset timeline; remove only after all consumers migrate.
- Central cross-cutting concerns (logging, tracing, auth) live at app factory or shared middleware layer.

## Install & Run
```powershell
cd backend
npm install
npm run start   # production style
npm run dev     # with nodemon autoreload
```
Then visit: http://localhost:3001/health (legacy) or versioned endpoints:

- `http://localhost:3001/api/v1/health`
- `http://localhost:3001/api/v2/health`

## /health Response Example (v1 & v2 currently identical)
```json
{
  "status": "ok",
  "uptimeSeconds": 12.345,
  "time": "2025-11-19T12:00:00.000Z"
}
```

## Customization
- Change port via `PORT` env variable.
- Extend health model to include DB checks, cache status, etc.
- Add middlewares (e.g. `app.use('/api', authMiddleware)` before mounting versions).
- Use DTO validation (e.g. `zod` or `joi`) inside version folders for request schemas.
- Introduce a `services/` layer for non-trivial business logic.

Creator: Awesome-SSP
