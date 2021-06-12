<template>
  <div class="hello">
    <input type="text" v-model="address">
    <button @click="search">里自動</button>　
    <p>住所：</p>
</template>

<script>
export default {
  data(){
    return{
      address:""
    }
  },
  methoods:{
    search(){
      async created() {
        let data =await axios.get ()
      }
    }
  }
};
</script>


<style scoped>
</style>
