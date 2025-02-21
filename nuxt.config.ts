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
		"@nuxt/image",
		"@vee-validate/nuxt",
		"@pinia/nuxt",
		"pinia-plugin-persistedstate/nuxt",
		"@nuxt/icon",
		"nuxt-lucide-icons",
		"nuxt-i18n-micro",
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
			enabled: false, // we do this in the CI
		},
	},
	icon: {
		customCollections: [
			{
				prefix: "rst",
				dir: "./assets/icons",
			},
		],
	},
	i18n: {
		locales: [
			{ code: "en", iso: "en-US", displayName: "English" },
			{ code: "de", iso: "de-DE", displayName: "Deutsch" },
		],
		defaultLocale: "en",
		meta: true,
		autoDetectLanguage: true,
		strategy: "prefix_and_default",
		disableWatcher: true,
		disableUpdater: true,
	},
	//#endregion Module Configuration

	imports: {
		dirs: ["stores", "repository"],
	},

	runtimeConfig: {
		public: {
			sentry: {
				dsn: process.env.SENTRY_DSN,
			},
			API_BASE_URL: process.env.API_BASE_URL,
		},
	},
});
