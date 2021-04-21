/* eslint-disable no-unused-expressions */
/* eslint-disable no-labels */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const API = 'https://jsonplaceholder.typicode.com/todos'
const store = new Vuex.Store({
  state: {
    // eslint-disable-next-line no-labels
    toDos: ['Пока тут нет']
  },
  mutations: {
    SET_TODOS_TO_STATE: (state, toDos) => {
      state.toDos = toDos
    }
  },
  actions:{
    GET_TODOS_FROM_API({ commit }) {
      return axios
        .get(API)
        .then((response) => {
          console.log(response.data)
          return commit('SET_TODOS_TO_STATE', response.data)
        })
        .catch(err => console.log(err))
    }
  },
  getters: {
    GET_TODOS (state) {
      return state.toDos
    }
  }
})
export default store
