import Vue from 'vue'
import Vuex from 'vuex'
import userAPI from '../api/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: "",
      email: "",
      image: "",
      isAdmin: false,
    },
    isAuthenticated: false,
  },
  getters: {
  },
  // 使用commit 發動 mutations
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }

      state.isAuthenticated = true
    }
  },
  // 使用dispatch 發動 actions
  actions: {
    async fetchCurrentUser() {
      try {
        const { data } = await userAPI.getCurrentUser()
        this.commit('setCurrentUser', data)
      } catch (error) {
        console.error(error.message)
      }
    }
  },
  modules: {
  }
})
