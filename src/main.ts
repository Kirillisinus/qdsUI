import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookie';
import baseTimer from "./components/baseTimer.vue";


createApp(App).use(store).use(router).use(VueCookies).component('baseTimer',{baseTimer}).mount('#app')