type Alert = {
    id: string;
    message: string;
    title: string;
    error_code: string | null;
    type: string;
    ttl: number;
    progress: number;
    time_added: number;
    removeTimeout: NodeJS.Timeout;
}

type AlertService = {
    addAlert: (alert: Alert) => void;
    removeAlert: (alert: Alert) => void;
}