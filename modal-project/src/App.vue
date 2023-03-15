<template>
  <MainBar/>
  <SignUpForm/>
</template>

<script>

import MainBar from './components/MainBar.vue'
import SignUpForm from './components/SignUpForm.vue'

export default {
  name: 'App',

  components:{
    MainBar,
    SignUpForm,
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
  background: white;
}

</style>
