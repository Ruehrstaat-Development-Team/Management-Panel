import HttpFactory from "../factory";

class AuthModule extends HttpFactory {
  async login(credentials: Credentials): Promise<SessionToken> {
    var res = this.post<SessionToken>("/auth/login", credentials, false).catch(
      (error) => {
        if (error != null) {
          this.alerts.AlertService.addAlert({
            code: "UIA001",
            type: "error",
            ttl: 5,
          } as Alert);
        }
        throw error;
      }
    );
    return res;
  }

  async register(credentials: Credentials): Promise<void> {
    this.post<void>("auth/register", credentials, false)
      .catch((error) => {
        if (error != null) {
          this.alerts.AlertService.addAlert({
            code: "UIA002",
            type: "error",
            ttl: 5,
          } as Alert);
        }
        throw error;
      })
      .then(() => {
        this.alerts.AlertService.addAlert({
          title: "account-created",
          type: "success",
          ttl: 5,
        } as Alert);
      });
  }

  async loginTotp(credentials: Credentials): Promise<SessionToken> {
    var res = this.post<SessionToken>(
      "/auth/login/totp",
      credentials,
      false
    ).catch((error) => {
      if (error != null) {
        this.alerts.AlertService.addAlert({
          code: "UIA003",
          type: "error",
          ttl: 5,
        } as Alert);
      }
      throw error;
    });
    return res;
  }

  async logout(): Promise<void> {
    this.post<void>("/auth/logout", null, true).catch((error) => {
      if (error != null) {
        this.alerts.AlertService.addAlert({
          code: "UIA004",
          type: "error",
          ttl: 5,
        } as Alert);
      }
      throw error;
    });
  }

  async logoutAll(): Promise<void> {
    this.post<void>("/auth/logout/all", null, true).catch((error) => {
      if (error != null) {
        this.alerts.AlertService.addAlert({
          code: "UIA005",
          type: "error",
          ttl: 5,
        } as Alert);
      }
      throw error;
    });
  }

  async verfyQuickLogin(quickLoginToken: QuickLoginToken): Promise<void> {
    this.put<void>("/auth/quick-login", quickLoginToken, true).catch((error) => {
      if (error != null) {
        this.alerts.AlertService.addAlert({
          code: "UIA006",
          type: "error",
          ttl: 5,
        } as Alert);
      }
      throw error;
    });
  }
}

export default AuthModule;
