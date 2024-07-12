import { createRouter, createWebHistory } from "vue-router";

let routes = [
    {
      path: "/",
      name: "Home",
      component: ()=> import('../components/Content/HomeView.vue')
    },
    {
      path: "/Home",
      redirect: '/'
    },
    {
      path: "/JokeApp",
      name: "JokeApp",
      component: ()=> import('../components/Content/JokeApp.vue')
    },
    {
      path: "/WeatherApp",
      name: "WeatherApp",
      component: ()=> import('../components/Content/WeatherApp.vue')
    },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;