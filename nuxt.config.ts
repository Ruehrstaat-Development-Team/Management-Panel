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
		"@pinia/nuxt",
		"pinia-plugin-persistedstate/nuxt",
		"@nuxt/icon"
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
	icon: {
		customCollections: [{
			prefix: "rst",
			dir: "./assets/icons"
		}],
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
