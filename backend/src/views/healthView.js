export function renderHealthJSON(vm) {
  return {
    status: vm.healthy ? 'ok' : 'degraded',
    uptimeSeconds: vm.uptimeSeconds,
    time: vm.isoTime
  };
}
