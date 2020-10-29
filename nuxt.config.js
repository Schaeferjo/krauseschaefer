import colors from 'vuetify/es5/util/colors'

const primary = '#5e2368'
const description =
  'Die Naturheilpraxis Krause-Schäfer in Lohmar bietet viele alternativer Therapien an. Ein Schwerpunkt ist die individuelle Behandlung von Migräne.'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate:
      'Naturheilpraxis Krause-Schäfer | Heilpraktikerin aus Lohmar | %s',
    title: '',
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
    'fontsource-palanquin/400.css',
    'fontsource-palanquin/700.css',
    'fontsource-playfair-display/700.css',
    'fontsource-playfair-display-sc/400.css',
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
    // https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/sitemap',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
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
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  pwa: {
    meta: {
      theme_color: primary,
      lang: 'de',
      description,
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
