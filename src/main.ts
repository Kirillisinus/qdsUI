import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookie';
//const Vue = require('vue');
//const VueCookies = require('vue-cookie');


createApp(App).use(store).use(router).use(VueCookies).mount('#app')