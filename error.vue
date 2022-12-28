<template>
  <div class="mt-7 max-w-sm mx-auto text-center cart">
    <p class="mt-7 text-7xl font-bold"> {{ error.statusCode }}</p>
    <p class="mt-7 text-6xl"> Opps...</p>
    <p class="mt-7 "> {{ error.message }}</p>
    <button class=" btn my-7" @click="handleClearError">Go Home</button>
  </div>
</template>

<script setup>
  defineProps(['error'])
  const handleClearError = ()=>clearError({redirect: '/'})
</script>

<style  scoped>
.btn{
  font-weight: bold;
    font-size: large;
    padding: 10px 20px;
    background-color: #1ad796;
    border-radius: 4px;
    color: white;
}

</style>