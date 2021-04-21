/* eslint-disable no-unused-expressions */
/* eslint-disable no-labels */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const API = 'https://jsonplaceholder.typicode.com/todos'

export const state = () => {
  // eslint-disable-next-line no-labels
  toDos: ['Пока тут нет']
}
const mutations = () => {
  SET_TODOS_TO_STATE: (state, toDos) => {
    state.toDos = toDos
  }
}
const actions = {
  GET_TODOS_FROM_API ({ commit }) {
    return axios
      .get(API)
      .then((response) => {
        return commit('SET_TODOS_TO_STATE', response.data)
      })
      .catch(err => console.log(err))
  }
}

const getters = {
  GET_TODOS (state) {
    return state.toDos
  }
}

export default { actions, getters, mutations }
