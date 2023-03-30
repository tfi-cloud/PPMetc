<template>
  <div class="login">
    <main-bar></main-bar>
    <sign-in-form @login="enterDashboard"></sign-in-form>
  </div>
</template>

<script>
  import SignInForm from '../components/SignInForm.vue'
  import MainBar from '../components/MainBar.vue'
  import { useRouter } from 'vue-router'

  export default {
    name: 'LoginView',
    components: {
      SignInForm,
      MainBar
    },
    setup(){
      const router = useRouter()
      const enterDashboard = () => {
        router.push({ name: 'dashboard' })
      } 
      return{enterDashboard}
    }
  }
</script>
