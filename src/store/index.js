import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    colorValue: 'blue'
  },
  mutations: {
    increaseCounter (state, randomNumber) {
      state.counter += randomNumber
    },
    decreaseCounter (state, randomNumber) {
      state.counter -= randomNumber
    },
    setColorValue (state, newValue) {
      state.colorValue = newValue
    }
  },
  actions: {
    decreaseCounter ({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('decreaseCounter', response.data)
      })
    },
    increaseCounter ({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('increaseCounter', response.data)
      })
    },
    setColorValue ({ commit }, newValue) {
      commit('setColorValue', newValue)
    }
  },
  getters: {
    counterSquared (state) {
      return state.counter * state.counter
    }

  },
  modules: {
  }
})
