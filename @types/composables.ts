type Alert = {
    message: string;
    title: string;
    error_code: string | null;
    type: string;
    ttl: number;
}

type AlertService = {
    addAlert: (alert: Alert) => void;
    removeAlert: (alert: Alert) => void;
}