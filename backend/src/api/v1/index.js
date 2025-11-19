import { Router } from 'express';
import healthRoutes from './routes/healthRoutes.js';

const v1 = Router();

v1.use(healthRoutes);

export default v1;
