// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app:{
    head:{
      title: "Nuxt dojo", // our title
      meta: [
        {
          name: 'description', content: 'Everything about Nuxt 3'
        }
      ],
      link:[
        {
           rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" 
        }
      ]  
    }
  },
  runtimeConfig:{
    currencyKey: process.env.CURRENCY_API_KEY
  }
})
