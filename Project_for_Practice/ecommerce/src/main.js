import '@/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import UserLayout from '@/Layout/User/UserLayout.vue'
import Product from '@/components/Product.vue'
import Xmark from '@/components/icons/Xmark.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('Xmark', Xmark);
app.component('UserLayout', UserLayout);
app.component('Product',Product);

app.mount('#app')
