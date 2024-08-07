import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/booklist',
      name: 'Booklist',
      component:  ()=> import('../views/BookList.vue')
    },
    {
      path: '/addbook',
      name: 'AddBook',
      component: ()=> import('../views/AddBook.vue')
    },
    {
      path: '/deletebook',
      name: 'DeleteBook',
      component: ()=> import('../views/DeleteBook.vue')
    },
    {
      path: '/bookdetail/:id',
      name: 'BookDetail',
      component: ()=> import('../views/ฺBookDetail.vue'),
      props:true
    },
  ]
});

export default router
