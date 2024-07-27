import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import '/node_modules/primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import App from './App.vue'
import router from './router'

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
import Textarea from 'primevue/textarea';
import Divider from 'primevue/divider';
import Select from 'primevue/select';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Drawer from 'primevue/drawer';

const app = createApp(App);


app.use(PrimeVue, {
    // Default theme configuration
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'light',
            cssLayer: false
        }
    }
});
app.use(router)
app.use(ToastService);

app.component('Button', Button);
app.component('InputText', InputText);
app.component('FloatLabel', FloatLabel);
app.component('Textarea', Textarea);
app.component('Divider', Divider);
app.component('Select', Select);
app.component('Toast', Toast);
app.component('Drawer', Drawer);

app.mount('#app')
