<template>
  <div class="cart">
     <div class="grid grid-cols-2 gap-30">
        <div class="p-7">
          <img :src="product44.image" alt="img" class="mx-auto my-7">
        </div>
        <div class="p-7">
          <h2 class="text-4xl my-7">{{ product44.title }}</h2>
          <p class="text-xl my-7">Price: $ {{ product44.price }}</p>
          <h3 class="font-bolt border-b-2 mb-4 pb-2">Product description:</h3>
          <p class="mb-7">{{ product44.description }}</p>
          <button class="flex text-white px-3 py-2 rounded-md text-sm bg-[#12b488]">
            <span class="material-symbols-outlined mr-3">
              add_shopping_cart
            </span>
            <span>Add to cart </span>
          </button>
        </div>
     </div>
  </div>
</template>

<script setup>
  const { product44 } = defineProps(['product44'])
</script>

<style  scoped>

img{
  max-width: 400px;
}


.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}

</style>