import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/User/HomeView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/User/CartView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/User/CheckoutView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/User/ProfileView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/User/SearchView.vue')
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('../views/User/SuccessView.vue')
    }
  ]
})

export default router
