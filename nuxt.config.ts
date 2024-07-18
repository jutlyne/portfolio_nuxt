// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@ant-design-vue/nuxt', 'nuxt-booster', 'nuxt-particles', "@nuxt/image"],
  runtimeConfig: {
    public: {
      baseAPIUrl: process.env.BASE_API_URL,
    }
  },
  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  },

  booster: {
    detection: {
      performance: true,
      browserSupport: true
    },

    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 800,
        dcl: 1200
      }
    },

    targetFormats: ['webp', 'avif', 'jpg|jpeg|png|gif'],

    componentAutoImport: false,
    componentPrefix: undefined,

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: '0%',
      asset: '0%'
    }
  },

  image: {
    screens: {
      default: 320,
      xxs: 480,
      xs: 576,
      sm: 768,
      md: 996,
      lg: 1200,
      xl: 1367,
      xxl: 1600,
      '4k': 1921
    },

    domains: ['img.youtube.com', 'i.vimeocdn.com'],

    alias: {
      youtube: 'https://img.youtube.com',
      vimeo: 'https://i.vimeocdn.com'
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/main.scss" as *;'
        }
      }
    }
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Võ Cao Kỳ | Backend Developer Portfolio',
      link: [
        {
          rel: 'canonical',
          href: 'https://vocaoky.site/'
        }
      ],
      meta: [
        {
          name: 'description',
          content: 'Portfolio của Võ Cao Kỳ - Backend Developer. Khám phá các dự án và kỹ năng phát triển backend của tôi.'
        },
        {
          name: 'keywords',
          content: 'Võ Cao Kỳ, Backend Developer, Backend Development, Web Development, Software Developer, Programmer, Portfolio, JutLy, JutLyNe'
        },
        {
          name: 'author',
          content: 'Võ Cao Kỳ'
        },
        {
          property: 'fb:app_id',
          content: '3319764181635317'
        },
        {
          property: 'og:locale',
          content: 'vi_VN'
        },
        {
          property: 'og:site_name',
          content: 'Võ Cao Kỳ'
        },
        {
          property: 'og:title',
          content: 'Võ Cao Kỳ | Backend Developer Portfolio'
        },
        {
          property: 'og:description',
          content: 'Portfolio của Võ Cao Kỳ - Backend Developer. Khám phá các dự án và kỹ năng phát triển backend của tôi.'
        },
        // {
        //   property: 'og:image',
        //   content: ''
        // },
        {
          property: 'og:url',
          content: 'https://vocaoky.site/'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:site',
          content: '@K64192327'
        },
        {
          name: 'twitter:creator',
          content: '@K64192327'
        },
        {
          name: 'twitter:title',
          content: 'Võ Cao Kỳ | Backend Developer Portfolio'
        },
        {
          name: 'twitter:description',
          content: 'Portfolio của Võ Cao Kỳ - Backend Developer chuyên nghiệp. Khám phá các dự án và kỹ năng phát triển backend của tôi.'
        },
        // {
        //   name: 'twitter:image',
        //   content: ''
        // },
        {
          property: 'profile:first_name',
          content: 'Võ'
        },
        {
          property: 'profile:last_name',
          content: 'Kỳ'
        },
        {
          property: 'profile:username',
          content: 'jutlyne'
        },
        {
          property: 'profile:gender',
          content: 'male'
        }
      ]
    }
  }
})