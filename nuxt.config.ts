
export default defineNuxtConfig({
  modules:[
    '@nuxtjs/color-mode'
  ],
  //Global-Config
  css: ['~/assets/css/main.scss'],
  app:{
    head:{
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'},
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      ]
    }
  },
  //Module-Config
  colorMode: {
    preference: 'system',
    fallback: 'dark',
  },
  //Deployment
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  ssr: false,
})