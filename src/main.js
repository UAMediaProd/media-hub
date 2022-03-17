import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// css
import './assets/tailwind.css'
import './assets/base.css';

window.axios = require('axios');
createApp(App).use(router).mount('#app')
