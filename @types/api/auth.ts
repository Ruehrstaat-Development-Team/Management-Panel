type Credentials = {
    email: string | null;
    password: string | null;
    otp: string | null;
}

type SessionToken = {
    token: string;
    expiresAt: number;
}

type QuickLoginToken = {
    token: string;
}

type RstApiError = {
    error: string;
    code: string;
    name: string;
}