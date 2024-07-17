import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Loading from './components/Loading.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('Loading',Loading);
app.use(createPinia())
app.use(router)

app.mount('#app')
