<template>
  <div id="app">
    <login v-if="!user" />
    <navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Login from './components/Login'

export default {
  components: {
    Navigation,
    Login
  },
  computed: {
    user() {
      return this.$store.getters['system/getUser']
    }
  }
}
</script>
