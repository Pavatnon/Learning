import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './Router'


import HeadNavbar from './components/HeadNavbar.vue'



const app = createApp(App)
app.component('HeadNavbar', HeadNavbar)

app.use(router);
app.mount('#app')

