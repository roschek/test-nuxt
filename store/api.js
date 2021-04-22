import axios from 'axios'
const API = 'https://jsonplaceholder.typicode.com/'
export const state = () => ({
  toDos: [],
  users: [],
  sortedTodos: []
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
  },
  SET_SORTED_TODOS: (state, sortedTodos) => {
    return (state.sortedTodos = sortedTodos)
  }
}
export const actions = {
  GET_TODOS_FROM_API ({ commit }) {
    return axios
      .get(`${API}todos`)
      .then((response) => {
        return commit('SET_TODOS_TO_STATE', response.data)
      })
      // eslint-disable-next-line no-console
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
      .get(`${API}todos?userId={${uid}}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        return commit('SET_CURRENT_TODO', response.data)
      })
      .catch(err => console.log(err))
  },
  SORTED_TODOS ({ commit, state }, id) {
    const sorted = state.toDos.filter((element) => {
      return element.userId === id
    })
    return commit('SET_SORTED_TODOS', sorted)
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
  },
  GET_SORTED_TODOS (state) {
    return state.sortedTodos
  }
}
