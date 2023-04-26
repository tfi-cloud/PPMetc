<template>
    <div class="reports-view">
        <welcome-bar></welcome-bar>
        <search-bar></search-bar>
        <nav-bar></nav-bar>
    </div>
  </template>
  
  <script>
    import WelcomeBar from '../components/WelcomeBar.vue'
    import SearchBar from '../components/SearchBar.vue'
    import NavBar from '../components/NavBar.vue'
    import Portfolio from '../components/Portfolio.vue'

  
    export default {
      name: 'ReportsView',
      components: {
        WelcomeBar,
        SearchBar,
        NavBar,
        Portfolio,
      }
    }
  </script>
  
<style>

</style>