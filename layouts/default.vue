<template>
   <div>
    <header class="bg-gray-200" >
      <nav class="container mx-auto p-4 flex justify-between" >
        <NuxtLink to="/" class="font-bold" >Nuxt dojo</NuxtLink>
        <ul class="flex gap-4 ">
          <li >
            <NuxtLink to="/"  >Home</NuxtLink>
          </li>
          <li>            
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products">Products</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products/516516">test</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <!--output the page content-->
    <div class="container mx-auto p-4">
      <slot></slot>
    </div>
   
  </div>
</template>

<style  scoped>
 .router-link-active{
  color:#12b488
 }


 
</style>