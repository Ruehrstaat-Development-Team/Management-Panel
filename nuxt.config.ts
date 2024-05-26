import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineNuxtConfig } from "nuxt/config";
const path = require("path");
export default defineNuxtConfig({
	modules: [
		"@nuxtjs/color-mode",
		"@nuxtjs/i18n",
		"nuxt-viewport",
		"floating-vue/nuxt",
		"@nuxtjs/google-fonts",
		"nuxt-icons",
	],
	css: [
		"~/assets/css/main.scss",
		"~/assets/css/variables.scss",
		"~/assets/css/components.scss",
	],
	//#region Global-Config
	app: {
		head: {
			meta: [
				{ charset: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width,initial-scale=1",
				},
			],
			link: [
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossorigin: "anonymous",
				},
				{ rel: "preconnect", href: "https://fonts.googleapis.com" },
			],
		},
	},
	//#endregion
	//#region Module-Config
	//region colorMode
	colorMode: {
		preference: "system",
		fallback: "dark",
	},
	//#endregion
	//#region googleFonts
	googleFonts: {
		families: {
			Montserrat: [400, 500, 600, 700],
		},
	},
	//#endregion
	//#region i18n
	i18n: {
		strategy: "no_prefix",
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: "i18n_redirected",
			alwaysRedirect: true,
			redirectOn: "all",
		},
		langDir: "lang/",
		locales: [
			{
				code: "en",
				name: "English",
				iso: "en-US",
				file: "en.ts",
			},
			{
				code: "de",
				name: "Deutsch",
				iso: "de-DE",
				file: "de.ts",
			},
		],
		defaultLocale: "en",
	},
	//#endregion
	//#endregion
	//#region runtimeConfig
	runtimeConfig: {
		public: {
			// Config within public will be also exposed to the client
			SENTRY_DSN_PUBLIC: process.env.SENTRY_DSN_PUBLIC,
			SENTRY_TRACES_SAMPLE_RATE: parseFloat(
				process.env.SENTRY_TRACES_SAMPLE_RATE ?? "0"
			),
			SENTRY_REPLAY_SAMPLE_RATE: parseFloat(
				process.env.SENTRY_REPLAY_SAMPLE_RATE ?? "0"
			),
			SENTRY_ERROR_REPLAY_SAMPLE_RATE: parseFloat(
				process.env.SENTRY_ERROR_REPLAY_SAMPLE_RATE ?? "0"
			),
			APP_VERSION: JSON.stringify(require("./package.json").version),
			APP_ENVIRONMENT: process.env.NODE_ENV,
			API_BASE_URL: process.env.API_BASE_URL,
		},
	},
	sourcemap: true,
	vite: {
		plugins: [
			// Put the Sentry vite plugin after all other plugins
			sentryVitePlugin({
				authToken: process.env.SENTRY_AUTH_TOKEN,
				org: "ruehrstaat",
				project: "web-frontend",
				telemetry: false,
			}),
		],
	},
	//#endregion
	//#region Deployment
	devtools: {
		enabled: true,

		timeline: {
			enabled: true,
		},
	},
	ssr: true,
	nitro: {
		output: {
			publicDir: path.join(__dirname, "dist"),
		},
	},
	//#endregion
});
