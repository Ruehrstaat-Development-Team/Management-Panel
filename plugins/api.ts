import { $fetch } from "ofetch";
import type { FetchOptions } from "ofetch";
import AuthModule from "~/repository/modules/auth";
import UserModule from "~/repository/modules/user";

interface IApiInstance {
	auth: AuthModule;
	user: UserModule;
}

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig();
	const fetchOptions: FetchOptions = {
		baseURL: config.public.API_BASE_URL,
	};

	const apiFetcher = $fetch.create(fetchOptions);

	const modules: IApiInstance = {
		auth: new AuthModule(apiFetcher),
		user: new UserModule(apiFetcher),
	};

	return {
		provide: {
			api: modules,
		},
	};
});
