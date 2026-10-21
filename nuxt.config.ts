// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/icon/module', '@nuxt/ui'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  icon: {
	mode: "css",
	cssLayer: "base"
  },
  css: ['~/assets/css/main.css'],
  colorMode: {preference: "light"},
  routeRules: {
	
  }
})
