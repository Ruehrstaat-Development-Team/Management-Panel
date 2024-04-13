import HttpFactory from "../factory";

class AuthModule extends HttpFactory {
  async login(credentials: Credentials) {
    return this.post<TokenResponse>("/auth/login", credentials);
  }
}

export default AuthModule;
