<template>
    <div class="dashboard">
        <welcome-bar></welcome-bar>
        <search-bar></search-bar>
        <nav-bar></nav-bar>
        <action-bar></action-bar>
        <portfolio></portfolio>
    </div>
  </template>
  
  <script>
    import WelcomeBar from '../components/WelcomeBar.vue'
    import SearchBar from '../components/SearchBar.vue'
    import NavBar from '../components/NavBar.vue'
    import ActionBar from '../components/ActionBar.vue'
    import Portfolio from '../components/Portfolio.vue'

  
    export default {
      name: 'DashboardView',
      components: {
        WelcomeBar,
        SearchBar,
        NavBar,
        ActionBar,
        Portfolio,
      },
      data(){
      return{
        created:'New Portfolio',
        deleted:'Delete Portfolio',
        updated:'Save',
      } 
    }
    }
  </script>
  
<style>

</style>