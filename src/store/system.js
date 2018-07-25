import axios from 'axios';

/**
 * Setup the initial state for module.
 */
const state = () => ({
  user: null,
})

/**
 * Setup getters, use these like computed properties for the store module.
 */
const getters = {
  getUser(state) {
    return state.user
  },
}

/**
 * Setup actions. Use these for any and all async or complex logic
 */
const actions = {
  attemptAuth ({commit}, email, password) {
    axios.post('your-authentication-url', {email, password})
      .then(user => {
        commit('setUser', user)
      })
      .catch(() => {
        // HANDLE FAILED AUTH
      })
  },
}

/**
 * Setup mutations. These should be simple and directly manipulate the store with
 * _no side effects_.
 */
const mutations = {
  setUser (state, value) {
    state.user = value
  }
}

/**
 * Finally export our completed vuex module.
 */
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
