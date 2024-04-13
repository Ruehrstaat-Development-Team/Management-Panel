type Credentials = {
    email: string | null;
    password: string | null;
    otp: string | null;
}

type TokenResponse = {
    token: string;
    expiresAt: Date;
}