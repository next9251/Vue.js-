import Vue from "vue";
import App from "App.vue";

Vue.use(VueRouter);

const router = [
  {
    path: "/",
    name: "About",
    component: About,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;