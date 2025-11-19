import express from 'express';
import v1 from './api/v1/index.js';
import v2 from './api/v2/index.js';
import { healthHandler } from './controllers/healthController.js';

export function createApp() {
  const app = express();

  // Legacy direct endpoint (optional - can remove later)
  app.get('/health', healthHandler);

  // Versioned APIs
  app.use('/api/v1', v1);
  app.use('/api/v2', v2);

  return app;
}
