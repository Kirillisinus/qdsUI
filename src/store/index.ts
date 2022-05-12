import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    TIME_LIMIT: 0,
    lobbys: [],
    admin_name: "",
    rounds: 0,
  },
  getters: {
    getTimeLimit(state) {
      return state.TIME_LIMIT;
    },
    getPlayers(state) {
      return state.lobbys;
    },
    getNumPlayers(state) {
      return state.lobbys.length;
    },
    getAdminName(state) {
      return state.admin_name;
    },
    getNumRounds(state) {
      return state.rounds;
    },
  },
  mutations: {
    updateTimeLimit(state, new_time) {
      state.TIME_LIMIT = new_time;
    },
    updatePlayers(state, players) {
      state.lobbys = players;
    },
    updateAdmin(state, admin) {
      state.admin_name = admin;
    },
    updateRounds(state, num_rounds) {
      state.rounds = num_rounds;
    },
  },
  actions: {
    setTimeLimit(ctx, new_time) {
      //alert("this is args inside vuex: " + new_time);
      ctx.commit("updateTimeLimit", new_time);
    },
    async reqPlayers(ctx) {
      await axios.get("https://qds-serv.herokuapp.com/players").then((response) => {
        ctx.commit('updatePlayers',response.data)
        //this.state.lobbys = response.data;
      });
    },
    setRounds(ctx) {
      ctx.commit("updateRounds", this.state.lobbys.length);
    },
  },
  modules: {},
});
