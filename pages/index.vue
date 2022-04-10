<template>
  <div>
    <h1>{{ counter }}</h1>
    <button type="button" @click="clickBtn">ADD</button>
    <hr />
    <h1>{{ asyncCount }}</h1>
    <div><nuxt-link to="/todos">TODO List</nuxt-link></div>
    <div><a href="https://nuxtjs.org/docs/directory-structure/store/">Vuex Store directory</a></div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  },
  methods: {
    clickBtn() {
      console.log('click ...')
      this.$store.commit('increment')
    }
  },
  asyncData(context) {
    return { asyncCount: context.app.store.state.counter };
  },
}
</script>
