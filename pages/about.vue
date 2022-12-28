<template>
  <div>
    <h2>About Page+</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste ipsa optio et at laborum aspernatur facere autem
      saepe qui cupiditate.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste ipsa optio et at laborum aspernatur facere autem
      saepe qui cupiditate.</p>
  </div>
  <div> {{ data }} </div>

</template>

<script setup>
// const { data } = await useFetch('/api/ninja?name=Vetal') // fetch to our server GET

// const { data } = await useFetch('/api/ninja?name=Vetal', {
//   method: 'post',
//   body: { age: 30 }
// }) // fetch to our server GET

// const { data } = await useFetch('/api/ninja') // fetch to our server GET

const { data } = await useFetch('/api/currency/AZN') // go to api/currency/[code].js

</script>

<style  scoped>
 h2{
  margin-bottom: 20px;
  font-size: 36px;
 }

 p{
  margin: 20px 0;
  color: brown;
 }
</style>