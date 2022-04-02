import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { io } from 'socket.io-client';
import VueSocketIO from 'vue-socket.io'

const socket = io('http://localhost:3003');
//import { VueLoadmore } from 'vuejs-loadmore';

createApp(App).use(store).use(router).mount('#app')
