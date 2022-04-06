import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Lobby from "@/views/Lobby.vue";
import Entr from "@/views/Entrance.vue";
import Write from "@/views/Write.vue"
import Draw from "@/views/Draw.vue"
import History from "@/views/History.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "entrace",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Entr,
    //component: () => import(/* webpackChunkName: "about" */ '../views/Lobby.vue')
  },
  {
    path: "/lobby",
    name: "lobby",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Lobby,
    //component: () => import(/* webpackChunkName: "about" */ '../views/Lobby.vue')
  },
  {
    path: "/write",
    name: "write",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Write,
    //component: () => import(/* webpackChunkName: "about" */ '../views/Lobby.vue')
  },
  {
    path: "/draw",
    name: "draw",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Draw,
    //component: () => import(/* webpackChunkName: "about" */ '../views/Lobby.vue')
  },
  {
    path: "/album",
    name: "album",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: History,
    //component: () => import(/* webpackChunkName: "about" */ '../views/Lobby.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
