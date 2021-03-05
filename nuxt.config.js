export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {
      
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Arascan',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'framevuerk/dist/framevuerk-nuxt.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/framevuerk',
    '~/plugins/axios.js',
    '~/plugins/util.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/moment'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
      '@nuxtjs/axios'
  ],

  axios: {
    baseURL: process.env.API_URL || 'http://localhost:8080'
  },

  moment: {
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
