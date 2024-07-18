import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';


import App from './App.vue';
import router from './router';
import LoadScene from './components/LoadScene.vue'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('LoadScene',LoadScene);

app.mount('#app');
