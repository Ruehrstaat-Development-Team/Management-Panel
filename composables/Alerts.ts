const alerts = ref<Alert[]>([]);

export const useAlerts = () => {
  const AlertService: AlertService = {
    addAlert: (alert: Alert) => {
      alerts.value.push(alert);
      setTimeout(() => {
        AlertService.removeAlert(alert);
      }, alert.ttl * 1000);
    },
    removeAlert: (alert: Alert) => {
      alerts.value.splice(alerts.value.indexOf(alert), 1);
    },
  };
  return {alerts, AlertService};
}
