import type { $Fetch, FetchOptions } from "ofetch";

class HttpFactory {
  private $fetch: $Fetch;
  private session = useSession();

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher;
  }

  protected async get<T>(
    url: string,
    authenticated: boolean = true,
    options?: object
  ): Promise<T> {
    if (authenticated) {
      await this.checkAndRefreshSession();
      return await this.$fetch(url, {
        method: "GET",
        ...options,
        headers: { Authorization: `Bearer ${this.session.token}` },
      }).catch((error) => {
        if (error.data) {
          throw error.data;
        }
        throw error;
      });
    } else {
      return await this.$fetch(url, { method: "GET", ...options }).catch(
        (error) => {
          if (error.data) {
            throw error.data;
          }
          throw error;
        }
      );
    }
  }

  protected async post<T>(
    url: string,
    data: object | null,
    authenticated: boolean = true,
    options?: object
  ): Promise<T> {
    if (authenticated) {
      await this.checkAndRefreshSession();
      return await this.$fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        ...options,
        headers: { Authorization: `Bearer ${this.session.token}` },
      }).catch((error) => {
        if(error.data){
          throw error.data;
        }
        throw error;
      });
    } else {
      return await this.$fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        ...options,
      }).catch((error) => {
        if (error.data) {
          throw error.data;
        }
        throw error;
      });
    }
  }

  protected async put<T>(
    url: string,
    data: object | null,
    authenticated: boolean = true,
    options?: object
  ): Promise<T> {
    if (authenticated) {
      await this.checkAndRefreshSession();
      return await this.$fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        ...options,
        headers: { Authorization: `Bearer ${this.session.token}` },
      }).catch((error) => {
        if (error.data) {
          throw error.data;
        }
        throw error;
      });
    } else {
      return await this.$fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        ...options,
      }).catch((error) => {
        if (error.data) {
          throw error.data;
        }
        throw error;
      });
    }
  }

  protected async delete<T>(
    url: string,
    authenticated: boolean = true,
    options?: object
  ): Promise<T> {
    if (authenticated) {
      await this.checkAndRefreshSession();
      return await this.$fetch(url, {
        method: "DELETE",
        ...options,
        headers: { Authorization: `Bearer ${this.session.token}` },
      }).catch((error) => {
        if (error.data) {
          throw error.data;
        }
        throw error;
      });
    } else {
      return await this.$fetch(url, { method: "DELETE", ...options }).catch(
        (error) => {
          if (error.data) {
            throw error.data;
          }
          throw error;
        }
      );
    }
  }

  protected async patch<T>(
    url: string,
    data: object | null,
    authenticated: boolean = true,
    options?: object
  ): Promise<T> {
    if(authenticated) {
      await this.checkAndRefreshSession();
      return await this.$fetch(url, {
        method: "PATCH",
        body: data != null ? JSON.stringify(data) : undefined,
        ...options,
        headers: { Authorization: `Bearer ${this.session.token}` },
      }).catch((error) => {
        if (error.data) {
          throw error.data;
        }
        throw error;
      });
    }
    else{
      return await this.$fetch(url, {
        method: "PATCH",
        body: data != null ? JSON.stringify(data) : undefined,
        ...options,
      }).catch((error) => {
        if (error.data) {
          throw error.data;
        }
        throw error;
      });
    }
  }

  protected async head<T>(
    url: string,
    authenticated: boolean = true,
    options?: object
  ): Promise<T> {
    if(authenticated) {
      await this.checkAndRefreshSession();
      return await this.$fetch(url, {
        method: "HEAD",
        ...options,
        headers: { Authorization: `Bearer ${this.session.token}` },
      }).catch((error) => {
        if (error.data) {
          throw error.data;
        }
        throw error;
      });
    }
    else{
      return await this.$fetch(url, {
        method: "HEAD",
        ...options,
      }).catch((error) => {
        if (error.data) {
          throw error.data;
        }
        throw error;
      });
    }
  }

  private async checkAndRefreshSession(): Promise<void> {
    if (!this.session.token) {
      throw new Error("No session token found");
    } else if (new Date(this.session.expiresAt as string) < new Date()) {
      var newToken: SessionToken = await this.post<SessionToken>(
        "/auth/refresh",
        null,
        false
      );
      this.session.setSession(newToken);
    }
  }
}

export default HttpFactory;
