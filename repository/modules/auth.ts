import HttpFactory from "../factory";
import { toast } from "vue-sonner";

class AuthModule extends HttpFactory {
  async login(credentials: Credentials): Promise<SessionToken> {
    var res = this.post<SessionToken>("/auth/login", credentials, false).catch(
      (error) => {
        if (error != null) {
          toast.error("UI0001 Unexpected error");
        }
        throw error;
      }
    );
    return res;
  }

  async register(credentials: Credentials): Promise<void> {
    this.post<void>("auth/register", credentials, false).catch(
      (error) => {
        if (error != null) {
          toast.error("UI0002 Unexpected error");
        }
        throw error;
      }
    ).then(() => {
      toast.error("UI0002 Unexpected error");
    });
  }

  async loginTotp(credentials: Credentials): Promise<SessionToken> {
    var res = this.post<SessionToken>("/auth/login/totp", credentials, false).catch(
      (error) => {
        if (error != null) {
          toast.error("UI0003 Unexpected error");
        }
        throw error;
      }
    );
    return res;
  }

  async logout(): Promise<void> {
    this.post<void>("/auth/logout", null).catch(
      (error) => {
        if (error != null) {
          toast.error("UI0004 Unexpected error");
        }
        throw error;
      }
    ).then(() => {
    });
  }  
}

export default AuthModule;
