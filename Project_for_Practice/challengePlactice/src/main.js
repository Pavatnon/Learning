import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

//router
import router from './Router';
//primevue
import PrimeVue from 'primevue/config';
import Lara from '@primevue/themes/Lara';



import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';
import Panel from 'primevue/panel';
import Button from 'primevue/button';





//component
import HeadNavbar from './components/HeadNavbar.vue';



const app = createApp(App)
app.component('HeadNavbar', HeadNavbar);
app.component('Select',Select);
app.component('InputNumber',InputNumber);
app.component('Panel',Panel);
app.component('Button',Button);


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

