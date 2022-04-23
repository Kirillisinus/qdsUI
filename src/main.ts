import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(store).use(router).use(VueAxios,axios).use(new VueSocketIO({
    debug: true,
    connection: 'http://localhost:3000/'
})).mount('#app')