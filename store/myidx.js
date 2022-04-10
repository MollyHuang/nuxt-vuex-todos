// state
export const state = () => ({
  idx: 0,
})

// mutations
export const mutations = {
  addCount(state) {
    state.idx++
  },
}

// actions
export const actions = {
  handAddCount({ commit }) {
    commit('addCount')
  },
}

// getters
export const getters = {
  getIdx(state) {
    return `count: ${state.idx}`
  },
}