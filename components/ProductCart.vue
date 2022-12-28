<template>
  <div class=" cart p3 rounded-md bg-white shadow-md h-full text-center">
    <img :src="product88.image" alt="img" class="thumb">
    <p class="font=bold text-gray-500 m-4 truncate">{{ product88.title }}</p>
    <NuxtLink :to="`/products/${product88.id}`" >
      <button class="bg-[#12b488] text-white px-3 py-2 rounded-md text-sm ">View details</button>
    </NuxtLink>
  </div>
</template>

<script setup>
const {product88} = defineProps(['product88'])

</script>

<style  scoped>

.thumb{
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
.cart{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
}
button{
  width: 100%;
}
</style>