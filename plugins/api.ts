import type { FetchOptions } from "ofetch";

export default defineNuxtPlugin({
	setup() {
		const config = useRuntimeConfig();

		var headers = useRequestHeaders(["cookie", "authorization"]);
		const fetchOptions: FetchOptions = {
			baseURL: config.public.API_BASE_URL,
			credentials: "include",
			headers: headers,
			onRequest: (context) => {
				const sessionStore = useSessionStore();
				context.options.headers.append(
					"Authorization",
					"Bearer " + sessionStore.token
				);
			},
		};
		const api = $fetch.create(fetchOptions);

		return {
			provide: {
				api,
			},
		};
	},
});
