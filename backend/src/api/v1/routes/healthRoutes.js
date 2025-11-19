import { Router } from 'express';
import { healthHandler } from '../../../controllers/healthController.js';

const router = Router();

// GET /api/v1/health
router.get('/health', healthHandler);

export default router;
