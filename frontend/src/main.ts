import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import '/node_modules/primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import App from './App.vue'
import router from './router'

import Button from "primevue/button";

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

app.component('Button', Button);

app.mount('#app')
