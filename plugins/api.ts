import { $fetch } from "ofetch";
import type { FetchOptions } from "ofetch";
import AuthModule from "~/repository/modules/auth";

interface IApiInstance {
  auth: AuthModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const fetchOptions: FetchOptions = {
    baseURL: config.public.API_BASE_URL,
  };

  const apiFetcher = $fetch.create(fetchOptions);

  const modules: IApiInstance = {
    auth: new AuthModule(apiFetcher),
  };

  const session = {
    token: useCookie("session_token", { path: "/", secure: true }),
    expires: useCookie("session_expires", { path: "/", secure: true }),
    set_Session: setSession,
  };

  function setSession(token: TokenResponse) {
    session.token = useCookie("session_token",{ path: "/" , secure: true, expires: new Date(token.expiresAt) });
    session.expires = useCookie("session_expires", {
      path: "/",
      secure: true,
      expires: new Date(token.expiresAt),
    });
    session.token.value = token.token;
    session.expires.value = new Date(token.expiresAt).toISOString();
  }

  return {
    provide: {
        api: modules,
        session: session,
    },
  }
});
