import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style.css';
import './assets/page-load.css';

createApp(App).use(router).mount('#app');
