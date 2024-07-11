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
    {
      path: "/BlockchainApp",
      name: "BlockchainApp",
      component: ()=> import('../components/Content/BlockchainApp.vue')
    },
    {
      path: "/CocktailApp",
      name: "CocktailApp",
      component: ()=> import('../components/Content/CocktailApp.vue')
    },
    {
      path: "/UVApp",
      name: "UVApp",
      component: ()=> import('../components/Content/UVApp.vue')
    },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;