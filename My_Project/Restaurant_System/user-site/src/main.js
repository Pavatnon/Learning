import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


// icon component
import IconList from '@/components/Icon/IconList.vue'
// main component
import Leyout from '@/components/Leyout.vue'
import ShowItem from '@/components/ShowItem.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// icon component
app.component('IconList',IconList)
// main component
app.component('Leyout',Leyout)
app.component('ShowItem',ShowItem)

app.mount('#app')
