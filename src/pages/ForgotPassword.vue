<template>
  <div>
    <h4>Forgotten Password:</h4>
    <input type="email" v-model="email" placeholder="Your Email" />
    <button @click="sendReset">Reset</button>
    <hr />

    <router-link :to="{ name: 'Home' }">
      Cancel
    </router-link>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      email: '',
      status: null,
    }
  },
  methods: {
    sendReset() {
      axios.post('reset-url')
        .then(response => {
          this.status = response.data
        })
        .catch(error => {
          this.status = error
        })
    }
  }
}
</script>
