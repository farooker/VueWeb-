import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: true,
    RouteName : '',
  },
  actions: {

  },
  mutations: {
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    SET_NAMEROUTE(state, payload){
      state.RouteName = payload
    },
  },
  getters: {
    GET_DRAWER :(state) =>state.drawer,
    GET_NAMEROUTE :(state) =>state.RouteName,
  },
})
