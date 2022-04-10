import { createStore } from 'vuex'

export default createStore({
  state: {
    TIME_LIMIT:20
  },
  getters: {
    getTimeLimit(state){
      return state.TIME_LIMIT;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
