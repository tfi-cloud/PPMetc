<template>
  <SignUpForm/>
</template>

<script>
import { h } from 'vue';
import SignUpForm from './components/SignUpForm.vue'

export default {
  name: 'App',

  components:{
    SignUpForm,
    h
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
  margin-top: 60px;
}
body{
  margin: 0;
  background: white;
}

</style>
