<template>
  <div class="new-user">
    <main-bar></main-bar>
    <sign-up-form @signup="enterLogin"></sign-up-form>
  </div>
</template>

<script>
  import MainBar from '../components/MainBar.vue'
  import SignUpForm from '../components/SignUpForm.vue'
  import { useRouter } from 'vue-router'

  export default {
    name: 'NewUserView',
    components: {
      MainBar,
      SignUpForm
    },
    setup(){
      const router = useRouter()
      const enterLogin = () => {
        router.push({ name: 'login' })
      } 
      return{enterLogin}
    }
  }
</script>

