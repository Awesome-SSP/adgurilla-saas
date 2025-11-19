import { buildHealthViewModel } from '../viewmodels/healthViewModel.js';
import { renderHealthJSON } from '../views/healthView.js';

export function healthHandler(req, res) {
  const vm = buildHealthViewModel();
  const output = renderHealthJSON(vm);
  res.json(output);
}
