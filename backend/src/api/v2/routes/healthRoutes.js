import { Router } from 'express';
import { healthHandler } from '../../../controllers/healthController.js';

const router = Router();

// GET /api/v2/health - hypothetical future extended response
router.get('/health', (req, res) => {
  // Could add extended diagnostics later
  return healthHandler(req, res);
});

export default router;
