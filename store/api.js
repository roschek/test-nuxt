import axios from 'axios'
const API = 'https://jsonplaceholder.typicode.com/'
export const state = () => ({
  toDos: [],
  users: [],
  currentTodo: ''
})

export const mutations = {
  SET_TODOS_TO_STATE: (state, toDos) => {
    return (state.toDos = toDos)
  },
  SET_USERS_TO_STATE: (state, users) => {
    return (state.users = users)
  },
  SET_CURRENT_TODO: (state, currentTodo) => {
    return (state.currentTodo = currentTodo)
  }
}
export const actions = {
  GET_TODOS_FROM_API ({ commit }) {
    return axios
      .get(`${API}todo`)
      .then((response) => {
        return commit('SET_TODOS_TO_STATE', response.data)
      })
      .catch(err => console.log(err))
  },
  GET_USERS_FROM_API ({ commit }) {
    return axios
      .get(`${API}users`)
      .then((response) => {
        return commit('SET_USERS_TO_STATE', response.data)
      })
      .catch(err => console.log(err))
  },
  GET_CURRENT_TODO ({ commit }, uid) {
    return axios
      .get(`${API}?id={${uid}}`)
      .then((response) => {
        console.log(response.data)
        return commit('SET_CURRENT_TODO', response.data)
      })
      .catch(err => console.log(err))
  }
}
export const getters = {
  GET_TODOS (state) {
    return state.toDos
  },
  GET_USERS (state) {
    return state.users
  },
  GET_TODO (state) {
    return state.currentTodo
  }
}
