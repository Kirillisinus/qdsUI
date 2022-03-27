import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Lobby from "@/views/Lobby.vue";
import Entr from "@/views/Entrance.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
