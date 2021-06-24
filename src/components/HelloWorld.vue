<template>
  <div class="hello">
    <input type="text" v-model="address">
    <button @click="search">里自動</button>
    <p>住所：</p>
  </div>
</template>

<script>
import axios from "axios";
//import VueAxios from 'vue-axios';   

export default {
  data(){
    return{
      address:""
    }
  },
  methods:{
    search() {
      let data = axios.get("https://apis.postcode-jp.com/api/v4/postcodes/?apikey=VTgaCQkNgIB8UbxF3gz3Y21Lh1lVQAPHDNZED1a");
      console.log(data);
    },
  }
};  
</script>


<style scoped>
</style>
