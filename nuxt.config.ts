// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	sourcemap: { client: true },
	modules: [
		"@nuxtjs/tailwindcss",
		"shadcn-nuxt",
		"@nuxtjs/color-mode",
		"@sentry/nuxt/module",
		"nuxt-lucide-icons",
		"@nuxt/image",
		"@vee-validate/nuxt",
	],
	app: {
		head: {
			link: [
				{ rel: "icon", type: "image/x-icon", href: "/favicon.webp" },
			],
		},
	},

	//#region Module Configuration
	shadcn: {
		prefix: "",
		componentDir: "./components/ui",
	},
	colorMode: {
		classSuffix: "",
		classPrefix: "",
	},
	sentry: {
		sourceMapsUploadOptions: {
			org: "mtnmedia",
			project: "rst-web-frontend",
			authToken: process.env.SENTRY_AUTH_TOKEN,
		},
	},
	//#endregion Module Configuration

	runtimeConfig: {
		public: {
			sentry: {
				dsn: process.env.SENTRY_DSN,
			},
			API_BASE_URL: process.env.API_BASE_URL,
		},
	},
});
