export const actions = {
  nuxtServerInit({ commit }, { req }) {
    console.log('[store/index.js][nuxtServerInit] req.session =', req.session)
    if (req.session && req.session.user) {
      commit('user', req.session.user)
    }
  }
}
