import * as Sentry from "@sentry/vue";
import Log from "~/utils/log";


async function lazyLoadSentryIntegrations(){
    if(!process.client) return;
    Sentry.addIntegration(Sentry.replayIntegration({
        maskAllText: false,
        maskAllInputs: true,
        blockAllMedia: false
    }));
}

function getSentryIntegrations(){
    if(!process.client) return [];

    const router = useRouter();
    const browserTracing = Sentry.browserTracingIntegration({router})
    return [browserTracing];
}

export default defineNuxtPlugin({
    name: 'sentry',
    parallel: true,
    async setup(nuxtApp){
        if (!process.client) return;
        const config = useRuntimeConfig();
		if (config.public.SENTRY_ENABLED !== true){
            Log.Info("Sentry", "Sentry is disabled, skipping initialization.");
            return;
        }

        const vueApp = nuxtApp.vueApp;
        Sentry.init({
          app: vueApp,
          dsn: config.public.SENTRY_DSN_PUBLIC as string ?? undefined,
          integrations: getSentryIntegrations(),
          tracesSampleRate: config.public.SENTRY_TRACES_SAMPLE_RATE as number,
          replaysSessionSampleRate: config.public.SENTRY_REPLAY_SAMPLE_RATE as number,
          replaysOnErrorSampleRate: config.public.SENTRY_ERROR_REPLAY_SAMPLE_RATE as number,
          release: config.public.APP_VERSION as string ?? undefined,
          environment: (config.public.APP_VERSION as string).includes("beta") ? "development" : config.public.APP_ENVIRONMENT as string ?? undefined,
          enabled: config.public.APP_VERSION != "development",
        });

        lazyLoadSentryIntegrations();
    }
})