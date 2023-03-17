<template>
  <div class="home">
    <main-bar></main-bar>
    <sign-up-form></sign-up-form>
  </div>
</template>

<script>

import SignUpForm from '../components/SignUpForm.vue'
import MainBar from '../components/MainBar.vue'

export default {
  name: 'HomeView',
  components: {
    SignUpForm,
    MainBar
  }
}
</script>
