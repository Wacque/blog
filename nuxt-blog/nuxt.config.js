const pkg = require('./package')
console.log('-------')
console.log(process.env.BASE_URL)

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    htmlAttrs: {
      class: 'font-6-10',
    },
    meta: [
      { charset: 'utf-8' },

      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/style/index.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/lazy-loader.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.BASE_URL || 'https://api.wuacque.cn/index',
    proxy: true
  },

  proxy: {
    "/proxy": {
      target: process.env.BASE_URL || 'https://api.wuacque.cn/index',
      pathRewrite: { "^/proxy/": "/" },
      changeOrigin: false,
      logLevel: "info",
      onProxyReq() {
        console.log('go proxy')
      }
    },
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://api.wuacque.cn/index'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
