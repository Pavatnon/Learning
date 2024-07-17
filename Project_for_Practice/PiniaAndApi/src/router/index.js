import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: ()=> import('../views/Homepage.vue')
    },
    {
      path: '/editpage/:id',
      name: 'editpage',
      component: ()=>import('../views/Editpage.vue')
    },

  ]
})

export default router
