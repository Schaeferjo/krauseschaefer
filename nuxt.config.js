import colors from 'vuetify/es5/util/colors'

const primary = '#5e2368'
const description =
  'Die Naturheilpraxis Krause-Schäfer in Lohmar bietet viele alternative Therapien an. Ein Schwerpunkt ist die individuelle Behandlung von Migräne.'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate:
      'Naturheilpraxis Krause-Schäfer | Heilpraktikerin aus Lohmar | %s',
    title: 'Naturheilpraxis Krause-Schäfer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'fontsource-palanquin/latin-400.css',
    'fontsource-palanquin/latin-700.css',
    'fontsource-playfair-display/latin-700.css',
    'fontsource-playfair-display-sc/latin-400.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://axios.nuxtjs.org/
    '@nuxtjs/axios',
    // https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/sitemap',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // see: https://github.com/schlunsen/nuxt-leaflet
    'nuxt-leaflet',
    // see: https://github.com/pimlie/nuxt-matomo
    ['nuxt-matomo', { matomoUrl: '//piwik.krause-schaefer.de/', siteId: 2 }],
  ],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: false,
      icons: 'mdiSvg',
    },
    theme: {
      light: true,
      themes: {
        light: {
          primary,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.red.darken4,
          success: colors.green.darken3,
        },
      },
    },
  },

  pwa: {
    icon: {
      fileName: 'icon.png',
    },
    manifest: {
      short_name: 'Krause-Schäfer',
      name: 'Naturheilpraxis Krause-Schäfer',
      description:
        'Die Naturheilpraxis Krause-Schäfer in Lohmar bietet viele alternative Therapien an. Ein Schwerpunkt ist die individuelle Behandlung von Migräne.',
      theme_color: primary,
      lang: 'de-DE',
      author: 'Robert und Jo Schäfer',
    },
  },

  /* sitemap */
  sitemap: {
    hostname: 'https://krause-schaefer.de/',
    gzip: true,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
