<template>
  <div>
   <div class="grid grid-cols-4 gap-5">
    <div v-for = "p in products" :key="p.id">
      <ProductCart :product88="p"/>
    </div>
   </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout:'products'
  })

const { data: products } = await useFetch('https://fakestoreapi.com/products')
//--------Change meta tags method 1 --------------------------------------------
useHead({
  title: "Nuxt Dojo | Merch",
  meta: [
    { name: "description", content: 'Nuxt 3 Merch' }
  ]
})
//------------------------------------------------------------------------------

</script>

<style  scoped>

</style>