import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    TIME_LIMIT: 0,
    lobbys: [],
    admin_name: "",
    rounds: 0,
    round: 1,
    creator: ""
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
    getCurRound(state){
      return state.round;
    },
    getCreator(state){
      return state.creator;
    }
  },
  mutations: {
    updateTimeLimit(state, new_time) {
      state.TIME_LIMIT = new_time;
    },
    updatePlayers(state, players) {
      state.lobbys = players;
    },
    updateAdmin(state, admin_nm) {
      state.admin_name = admin_nm;
    },
    updateRounds(state, num_rounds) {
      state.rounds = num_rounds;
    },
    updateRound(state) {
      state.round++;
    },
    updateCreator(state, new_creator){
      state.creator = new_creator;
    }
  },
  actions: {
    setTimeLimit(ctx, new_time) {
      //alert("this is args inside vuex: " + new_time);
      ctx.commit("updateTimeLimit", new_time);
    },
    async reqPlayers(ctx, adm_name) {
      await axios.get("https://qds-serv.herokuapp.com/players").then((response) => {
        ctx.commit("updatePlayers", response.data);
        ctx.commit("updateAdmin", adm_name);
        //this.state.lobbys = response.data;
      });
    },
    setRounds(ctx) {
      ctx.commit("updateRounds", this.state.lobbys.length);
    },
    setAdminName(ctx, adm_name) {
      ctx.commit("updateAdmin", adm_name);
    },
    setRound(ctx) {
      ctx.commit("updateRound");
    },
    setCreator(ctx, new_crtr){
      ctx.commit("updateCreator", new_crtr);
    }
  },
  modules: {},
});
