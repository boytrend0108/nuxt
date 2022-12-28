<template>
  <div>
    <!--Add meta method 2------------------------------------------------------>
    <Head>
      <Title>Nuxt Dojo | {{ product11.title }}</Title>
      <Meta name="description" :content="product11.description"/>
    </Head>
    <!------------------------------------------------------------------------->
    <ProductDetails :product44="product11"/>
  </div>
</template>

<script setup>
  const { id } = useRoute().params
  const url = `https://fakestoreapi.com/products/`+ id
  const { data:product11 } = await useFetch(url, {key:id} )

  if(!product11.value){
    throw createError({statusCode: 404, statusMessage:'Product not found', fatal: true})
  }
  //------------ Add layout
  definePageMeta({
    layout:'products'
  })
  //-----------------------
</script>

<style lang="scss"  scoped>

</style>