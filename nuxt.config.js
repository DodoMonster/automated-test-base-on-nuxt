module.exports = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'nuxt-project',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  router: {
    mode: 'hash',
    // 配置所有页面渲染后滚动至顶部：
    scrollBehavior: function (to, from, savedPosition) {
      return {
        x: 0,
        y: 0
      }
    }
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },

  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~static/css/main.css',
  ],

  plugins: [
    '@/plugins/common-plugin'
  ],

  /*
   ** Build configuration
   */
  build: {
    // vendor: ['axios'],

    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      //   config.resolve.alias = Object.assign(config.resolve.alias, {
      //     '~libs': '~/libs',
      //     '~api': '~/api',
      //   })
    }
  }
}
