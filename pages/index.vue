<template>
  <div>
    <h1>state.counter: {{ counter }}</h1>
    <button type="button" @click="clickBtn">ADD</button>
    <h1>asyncCount: {{ asyncCount }}</h1>
    
    <hr />
    <h1>state.myidx.idx: {{ idx }}</h1>
    <button type="button" @click="addIdx">ADD idx</button>
    <h1>getters: {{ getIdx }}</h1>
    
    <hr />
    <div><nuxt-link to="/todos">TODO List</nuxt-link></div>
    <div><a href="https://nuxtjs.org/docs/directory-structure/store/">Vuex Store directory</a></div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    counter() {
      return this.$store.state.counter    // state
    },
    idx() {
      return this.$store.state.myidx.idx    // state
    },
    getIdx() {
      return this.$store.getters['myidx/getIdx']  // getters
    }
  },
  methods: {
    clickBtn() {
      this.$store.commit('increment') // mutations
    },
    addIdx() {
      this.$store.dispatch('myidx/handAddCount')   // actions
    },
  },
  asyncData(context) {
    return { 
      asyncCount: context.app.store.state.counter // state
    }
  },
}
</script>
