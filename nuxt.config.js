module.exports = {
  components: true,
  telemetry: false,

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {rel:"apple-touch-icon", sizes:"180x180", href:"/apple-touch-icon.png"},
      {rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"},
      {rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"},
      {rel:"manifest", href:"/site.webmanifest"}
    ],
  },
  
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/main.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/postcss8',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    "nuxt-socket-io",
    ],

  io: {
    // we could have multiple sockets that we identify with names
    // one of these sockets may have set "default" to true
    sockets: [
      {
        default: true, // make this the default socket
        name: "main", // give it a name that we can later use to choose this socket in the .vue file
        url:
          process.env.NODE_ENV === "production"
            ? "https://nuxt-express-socket.herokuapp.com"
            : "http://localhost:3000",
      },
    ],
  },

  pwa: {
    manifest: {
      name: process.env.npm_package_name,
      short_name: process.env.npm_package_name,
      start_url: "/",
      theme_color: "#424242",
      display: "standalone",
    },
    icon: {
      iconSrc: "/favicon.ico",
    },
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
