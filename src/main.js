import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'
import App from './App.vue'

Vue.use(VueAxios, axios);

new Vue({
  render: (h) => h(App),
}).$mount("#app");


