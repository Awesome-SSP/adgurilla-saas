import { getRawHealth } from '../models/healthStatus.js';

export function buildHealthViewModel() {
  const raw = getRawHealth();
  return {
    healthy: raw.status === 'ok',
    uptimeSeconds: raw.uptime,
    isoTime: new Date(raw.timestamp).toISOString()
  };
}
