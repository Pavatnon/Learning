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
    },


    // admin Router


    {
      path: '/admin',
      name: 'admin-login',
      component: () => import('../views/Admin/LoginView.vue')
    },
    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: () => import('../views/Admin/DashboardView.vue')
    },

    
    {
      path: '/admin/products/list',
      name: 'admin-products-list',
      component: () => import('../views/Admin/Products/ListView.vue')
    },
    {
      path: '/admin/products/update/:id',
      name: 'admin-products-update',
      component: () => import('../views/Admin/Products/UpdateView.vue')
    },
    {
      path: '/admin/products/create',
      name: 'admin-products-create',
      component: () => import('../views/Admin/Products/UpdateView.vue')
    },


    {
      path: '/admin/user/list',
      name: 'admin-user-list',
      component: () => import('../views/Admin/User/ListView.vue')
    },
    {
      path: '/admin/user/update/:id',
      name: 'admin-user-update',
      component: () => import('../views/Admin/User/UpdateView.vue')
    },


    {
      path: '/admin/order/detail/:id',
      name: 'admin-oder-details',
      component: () => import('../views/Admin/Order/DetailView.vue')
    },
    {
      path: '/admin/oder/list',
      name: 'admin-oder-list',
      component: () => import('../views/Admin/Order/ListView.vue')
    },

    
  ]


})

export default router
