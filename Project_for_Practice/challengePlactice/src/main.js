import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

//router
import router from './Router';
//primevue
import PrimeVue from 'primevue/config';
import Select from 'primevue/select';
import Lara from '@primevue/themes/Lara';





//component
import HeadNavbar from './components/HeadNavbar.vue';



const app = createApp(App)
app.component('HeadNavbar', HeadNavbar);
app.component('Select',Select);


app.use(PrimeVue,{
    theme: {
        preset: Lara,
        options: {
            prefix: 'px',
            darkModeSelector: 'none',
            cssLayer: false
        }
    }
});
app.use(router);



app.mount('#app');

