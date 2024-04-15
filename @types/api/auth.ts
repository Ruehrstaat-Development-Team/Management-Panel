type Credentials = {
    email: string | null;
    password: string | null;
    otp: string | null;
}

type SessionToken = {
    token: string;
    expiresAt: number;
}

type ApiError = {
    error: string;
}