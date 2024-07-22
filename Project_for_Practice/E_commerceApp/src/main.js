import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Userlayout from './layouts/Userlayout.vue'
import Xmark from '@/components/X_mark.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('Xmark',Xmark);
app.component('Userlayout',Userlayout);

app.use(createPinia())
app.use(router)

app.mount('#app')
