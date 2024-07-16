import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=> import('../views/HomeView.vue')
    },

    {
      path: '/emproyee',
      name: 'EmproyeeList',
      component: ()=> import('../views/EmproyeeShow.vue')
    },
    
  ]
})

export default router
