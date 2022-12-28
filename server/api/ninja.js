export default defineEventHandler( async (event)=>{

  // // use query param "/api/ninja?name=vetal"
  // const { name } = getQuery(event)
  // // handle Post request
  // const {age} = await readBody(event)
  //api call with privat key(inside server we use "$fetch", inside front-end "useFetch")
  const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=vtBGqKJnGHGGocyXyAIu9S1DybAPibp2a4uNKuXZ')

return {
  // message: `Hello ${name}, you are ${age} years old!!!`
   data
}

})