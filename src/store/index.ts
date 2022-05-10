import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    TIME_LIMIT:120,
    lobbys: [],
    admin_name:"",
  },
  getters: {
    getTimeLimit(state){
      return state.TIME_LIMIT;
    },
    getPlayers(state){
      return state.lobbys;
    },
    getNumPlayers(state) {
      return state.lobbys.length;
    },
    getAdminName(state){
      return state.admin_name;
    }
  },
  mutations: {
    updatePlayers(state, players) {
      state.lobbys=players;
    },
    updateAdmin(state, admin){
      state.admin_name=admin;
    }
  },
  actions: {
    async reqPlayers(ctx) {
      axios.get("http://localhost:3000/players").then((response) => {
        ctx.commit('updatePlayers',response.data)
        //this.state.lobbys = response.data;
      });
    }
  },
  modules: {
  }
})
