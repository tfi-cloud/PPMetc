<template>
  <div class="new-user">
    <main-bar></main-bar>
    <sign-up-form></sign-up-form>
  </div>
</template>

<script>
  import MainBar from '../components/MainBar.vue'
  import SignUpForm from '../components/SignUpForm.vue'

  export default {
    name: 'NewUserView',
    components: {
      MainBar,
      SignUpForm
    }
  }
</script>

