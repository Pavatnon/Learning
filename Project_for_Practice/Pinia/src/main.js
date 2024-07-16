import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import Headbar from './components/Headbar.vue'

const app = createApp(App)

app.component('Headbar', Headbar);

app.use(createPinia())
app.use(router)

app.mount('#app')
