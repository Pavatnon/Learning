import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Userlayout from './layouts/Userlayout.vue'
import Adminlayout from './layouts/Adminlayout.vue'
import Table from './components/Table.vue'
import Pagination from './components/Pagination.vue'

import VueApexCharts from "vue3-apexcharts";

import XmarkIcon from '@/components/Icon/X_mark.vue'
import ViewIcon from '@/components/Icon/viewIcon.vue'
import TrashIcon from '@/components/Icon/TrashIcon.vue'
import EditIcon from '@/components/Icon/EditIcon.vue'


import App from './App.vue'
import router from './router'

const app = createApp(App)



app.component('Xmark',XmarkIcon);
app.component('ViewIcon',ViewIcon);
app.component('TrashIcon',TrashIcon);
app.component('EditIcon',EditIcon);


app.component('Userlayout',Userlayout);
app.component('Adminlayout',Adminlayout);
app.component('Table',Table);
app.component('Pagination',Pagination);

app.use(VueApexCharts);
app.use(createPinia())
app.use(router)

app.mount('#app')
