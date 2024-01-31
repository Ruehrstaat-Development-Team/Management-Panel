import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@nuxtjs/color-mode"],
  //Global-Config
  css: ["~/assets/css/main.scss"],
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
      ],
    },
  },
  //Module-Config
  colorMode: {
    preference: "system",
    fallback: "dark",
  },
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
      }),
    ],
  },
  //Deployment
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  ssr: false,
});
