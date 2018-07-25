<template>
  <div class="navigation">
    <router-link :to="{ name: 'Home' }">
      Home
    </router-link>
    <router-link :to="{ name: 'About' }">
      About Us
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  border-top: 2px solid red;
  border-bottom: 2px solid red;
  margin: 20px 0;
  padding: 15px;
  a {
    margin: 10px;
  }
}
</style>
