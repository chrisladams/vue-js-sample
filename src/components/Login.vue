<template>
  <div>
    <button
      v-if="!showForm"
      @click="showForm = true">
      Login
    </button>
    <div v-else>
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button @click="attemptLogin">Login</button>
      <hr />
      <router-link :to="{ name: 'forgot-password' }">
        Forgot My Password
      </router-link>
      <button @click="showForm = false">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      showForm: false,
    }
  },
  methods: {
    attemptLogin() {
      this.$store.dispatch(
        'system/attemptAuth',
        this.email,
        this.password
      )
    }
  }
}
</script>
