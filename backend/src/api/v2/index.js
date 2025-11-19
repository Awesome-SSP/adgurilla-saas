import { Router } from 'express';
import healthRoutes from './routes/healthRoutes.js';

const v2 = Router();

v2.use(healthRoutes);

export default v2;
