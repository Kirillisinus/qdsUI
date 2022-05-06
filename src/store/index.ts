import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    TIME_LIMIT:120,
    lobbys: []
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
    }
  },
  mutations: {
    updatePlayers(state, players) {
      state.lobbys=players;
    }
  },
  actions: {
    async reqPlayers(ctx) {
      await axios.get("https://qds-serv.herokuapp.com/players").then((response) => {
        ctx.commit('updatePlayers',response.data)
        //this.state.lobbys = response.data;
      });
    }
  },
  modules: {
  }
})
