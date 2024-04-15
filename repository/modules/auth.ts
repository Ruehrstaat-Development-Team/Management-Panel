import HttpFactory from "../factory";

class AuthModule extends HttpFactory {
  async login(credentials: Credentials): Promise<SessionToken> {
    return this.post<SessionToken>("/auth/login", credentials, false);
  }
}

export default AuthModule;
