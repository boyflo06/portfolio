// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon/module'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  icon: {
	mode: "css",
	cssLayer: "base"
  }
})
