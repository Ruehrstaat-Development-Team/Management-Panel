import type { $Fetch, FetchOptions } from "ofetch";

class HttpFactory {
  private $fetch: $Fetch;

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher;
  }

  protected async get<T>(url: string, options?: object): Promise<T> {
    return await this.$fetch(url, { method: "GET", ...options }).catch(
      (error) => {
        throw error.data;
      }
    );
  }

  protected async post<T>(
    url: string,
    data: object,
    options?: object
  ): Promise<T> {
    return await this.$fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      ...options,
    }).catch((error) => {
      throw error.data;
    });
  }

  protected async put<T>(
    url: string,
    data: object,
    options?: object
  ): Promise<T> {
    return await this.$fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      ...options,
    }).catch((error) => {
      throw error.data;
    });
  }

  protected async delete<T>(url: string, options?: object): Promise<T> {
    return await this.$fetch(url, { method: "DELETE", ...options }).catch(
      (error) => {
        throw error.data;
      }
    );
  }

  protected async patch<T>(
    url: string,
    data: object,
    options?: object
  ): Promise<T> {
    return await this.$fetch(url, {
      method: "PATCH",
      body: JSON.stringify(data),
      ...options,
    }).catch((error) => {
      throw error.data;
    });
  }

  protected async head<T>(url: string, options?: object): Promise<T> {
    return await this.$fetch(url, { method: "HEAD", ...options }).catch(
      (error) => {
        throw error.data;
      }
    );
  }
}

export default HttpFactory;
